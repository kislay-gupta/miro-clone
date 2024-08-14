import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
const ORG_BOARD_LIMIT = 2;
const images = [
  "/placeholder/1.svg",
  "/placeholder/2.svg",
  "/placeholder/3.svg",
  "/placeholder/4.svg",
  "/placeholder/5.svg",
  "/placeholder/6.svg",
  "/placeholder/7.svg",
  "/placeholder/8.svg",
  "/placeholder/9.svg",
  "/placeholder/10.svg",
];

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorize");
    }
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const existingBoards = await ctx.db
      .query("boards")
      .withIndex("by_ord", (q) => q.eq("orgId", args.orgId))
      .collect();
    if (existingBoards.length >= ORG_BOARD_LIMIT) {
      throw new Error("Organization limit reached");
    }
    const board = await ctx.db.insert("boards", {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: randomImage,
    });
    return board;
  },
});

export const remove = mutation({
  args: { id: v.id("boards") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }
    const userId = identity.subject;
    const existingFavorite = await ctx.db
      .query("userFavorite")
      .withIndex("by_user_board", (q) =>
        q.eq("userId", userId).eq("boardId", args.id)
      )
      .unique();

    if (existingFavorite) {
      await ctx.db.delete(existingFavorite._id);
    }

    await ctx.db.delete(args.id);
  },
});

export const update = mutation({
  args: { id: v.id("boards"), title: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }
    const title = args.title.trim();
    if (!title) {
      throw new Error("Title is Required");
    }
    if (title.length > 60) {
      throw new Error("Title cannot be more than 60 characters");
    }
    const board = await ctx.db.patch(args.id, {
      title: args.title,
    });
    return board;
  },
});

export const favorite = mutation({
  args: { id: v.id("boards"), orgId: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }
    const board = await ctx.db.get(args.id);
    if (!board) {
      throw new Error("Board not found");
    }
    const userId = identity.subject;
    const existingFavorite = await ctx.db
      .query("userFavorite")
      .withIndex("by_user_board", (q) =>
        q.eq("userId", userId).eq("boardId", board._id)
      )
      .unique();

    if (existingFavorite) {
      throw new Error("Board already favorited");
    }
    await ctx.db.insert("userFavorite", {
      userId,
      boardId: board._id,
      orgId: args.orgId,
    });
    return board;
  },
});

export const unfavorite = mutation({
  args: { id: v.id("boards") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }
    const board = await ctx.db.get(args.id);
    if (!board) {
      throw new Error("Board not found");
    }
    const userId = identity.subject;
    const existingFavorite = await ctx.db
      .query("userFavorite")
      .withIndex(
        "by_user_board",
        (q) => q.eq("userId", userId).eq("boardId", board._id)
        // TODO check if org id is needed
      )
      .unique();

    if (!existingFavorite) {
      throw new Error("favorited Board Not found");
    }
    await ctx.db.delete(existingFavorite._id);
    return board;
  },
});

export const get = query({
  args: { id: v.id("boards") },
  handler: async (ctx, args) => {
    const board = ctx.db.get(args.id);
    return board;
  },
});
