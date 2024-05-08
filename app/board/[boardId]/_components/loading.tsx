import { Loader } from "lucide-react";

import React from "react";
import { InfoSkeleton } from "./Info";
import { ParticipantsSkeletons } from "./Participants";
import { ToolbarSkeleton } from "./Toolbar";

export const Loading = () => {
  return (
    <main className="h-screen w-full relative bg-neutral-100 touch-none flex items-center justify-center">
      <Loader className="size-6 text-muted-foreground animate-spin" />
      <InfoSkeleton />
      <ParticipantsSkeletons />
      <ToolbarSkeleton />
    </main>
  );
};
