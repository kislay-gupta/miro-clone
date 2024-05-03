"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs";

import Image from "next/image";
import React from "react";
import { toast } from "sonner";

const EmptyBoard = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;
    mutate({
      orgId: organization.id,
      title: "untitled",
    })
      .then((id) => {
        toast.success("Board Created");
        // TODO: redirect to board/{id}
      })
      .catch(() => toast.error("failed to create board"));
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Image
        src="/element-board.png"
        alt="empty board"
        width={110}
        height={110}
      />
      <h2 className="text-2x font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-foreground  text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size="lg">
          {pending ? <>creating</> : <>Create board</>}
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoard;
