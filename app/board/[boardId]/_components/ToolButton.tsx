"use client";

import React from "react";
import Hint from "@/components/Hint";
import { Button } from "@/components/ui/button";

import { LucideIcon } from "lucide-react";

interface ToolButtonProps {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
}

export const ToolButton = ({
  label,
  icon: Icon,
  onClick,
  isActive,
  isDisabled,
}: ToolButtonProps) => {
  return (
    <Hint label={label} side="right" sideOffset={14}>
      <Button
        onClick={onClick}
        size="icon"
        variant={isActive ? "boardActive" : "board"}
        disabled={isDisabled}
      >
        <Icon />
      </Button>
    </Hint>
  );
};
