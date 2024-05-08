import React from "react";
import Hint from "@/components/Hint";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
interface UserAvatarProps {
  src?: string;
  name?: string;
  fallback?: string;
  borderColor?: string;
}
export const UserAvatar = ({
  src,
  name,
  fallback,
  borderColor,
}: UserAvatarProps) => {
  return (
    <Hint label={name || "Anonymous"} side="bottom" sideOffset={18}>
      <Avatar className="size-8 rounded-full border-2" style={{ borderColor }}>
        <AvatarImage className="rounded-full" src={src} />
        <AvatarFallback className="text-xs font-semibold">
          {fallback}
        </AvatarFallback>
      </Avatar>
    </Hint>
  );
};
