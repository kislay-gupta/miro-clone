"use client";
import React from "react";
import { ToolButton } from "./ToolButton";
import {
  Circle,
  MousePointer2,
  Pencil,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2,
} from "lucide-react";

export const Toolbar = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <ToolButton
          label="Select"
          onClick={() => {}}
          isActive={false}
          icon={MousePointer2}
        />
        <ToolButton
          label="Text"
          onClick={() => {}}
          isActive={false}
          icon={Type}
        />
        <ToolButton
          label="Sticky Note"
          onClick={() => {}}
          isActive={false}
          icon={StickyNote}
        />
        <ToolButton
          label="Rectangle"
          onClick={() => {}}
          isActive={false}
          icon={Square}
        />
        <ToolButton
          label="Ellipse"
          onClick={() => {}}
          isActive={false}
          icon={Circle}
        />
        <ToolButton
          label="Pen"
          onClick={() => {}}
          isActive={false}
          icon={Pencil}
        />
      </div>
      <div className="bg-white rounded-md flex flex-col items-center shadow-md p-1.5">
        <ToolButton
          label="Undo"
          onClick={() => {}}
          isDisabled={false}
          icon={Undo2}
        />
        <ToolButton
          label="Redo"
          onClick={() => {}}
          isDisabled={false}
          icon={Redo2}
        />
      </div>
    </div>
  );
};
export const ToolbarSkeleton = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360px] rounded-md shadow-md  w-[52px]" />
  );
};
