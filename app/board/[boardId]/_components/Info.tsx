"use client";
import React from "react";
import { useQuery } from "convex/react";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Hint from "@/components/Hint";
import { useRenameModal } from "@/store/use-rename-modal";
import { Actions } from "@/components/action/Actions";
import { Menu } from "lucide-react";
interface InfoProps {
  boardId: string;
}
const fonts = Poppins({ subsets: ["latin"], weight: ["600"] });
const TabSeparator = () => {
  return <div className="text-neutral-300 px-1.5">|</div>;
};
export const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();
  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });
  if (!data) return <InfoSkeleton />;
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      <Hint label="Go to Boards" side="bottom" sideOffset={10}>
        <Button asChild variant="board" className="px-2">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              className="mr-1"
              width={20}
              height={20}
            />
            <span
              className={
                (cn("font-semibold text-xl  text-black"), fonts.className)
              }
            >
              Next Miro
            </span>
          </Link>
        </Button>
      </Hint>
      <TabSeparator />
      <Hint label="Edit title" side="bottom" sideOffset={10}>
        <Button
          variant="board"
          onClick={() => onOpen(data._id, data.title)}
          className="text-base font-normal px-2"
        >
          {data.title}
        </Button>
      </Hint>
      <TabSeparator />
      <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
        <div>
          <Hint label="Main menu" side="bottom" sideOffset={10}>
            <Button size="icon" variant="board">
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};
export const InfoSkeleton = () => {
  return (
    <div className="absolute top-2 left-2 w-[300px] bg-white rounded-md px-1.5 h-12 flex items-center shadow-md" />
  );
};
