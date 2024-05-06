import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const Participants = () => {
  return (
    <div className=" absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      List of users
    </div>
  );
};
Participants.Skeleton = function ParticipantsSkeletons() {
  return (
    <div className="w-[100px] absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md" />
  );
};
