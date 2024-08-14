"use node";

import Stripe from "stripe";

import { v } from "convex/values";

import { action } from "./_generated/server";

const url = process.env.NEXT_PUBLIC_URL;
const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: "2024-06-20",
});

export const pay = action({
  args: { orgId: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }
    if (!args.orgId) {
      throw new Error("Missing orgId");
    }
    const session = await stripe.checkout.sessions.create({
      success_url: url,
      cancel_url: url,
      customer_email: identity.email,
      line_items: [
        {
          price_data: {
            currency: "INR",
            product_data: {
              name: "Board Pro",
              description: "Unlimited Board for you",
            },
            unit_amount: 100,
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        orgId: args.orgId,
      },
      mode: "subscription",
    });
    return session.url!;
  },
});
