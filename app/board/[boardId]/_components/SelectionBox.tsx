"use client";
import { useSelectionBounds } from "@/hooks/use-selection-bounds";
import { useSelf, useStorage } from "@/liveblocks.config";
import { LayerType, Side, XYWH } from "@/types/canvas";
import { memo } from "react";
interface SelectionBoxProps {
  onResizeHandlePointerDown: (corner: Side, initialBounds: XYWH) => void;
}
const HANDLE_WIDTH = 8;
export const SelectionBox = memo(
  ({ onResizeHandlePointerDown }: SelectionBoxProps) => {
    const soleLayerId = useSelf((me) =>
      me.presence.selection.length === 1 ? me.presence.selection[0] : null
    );
    const isShowingHandles = useStorage(
      (root) =>
        soleLayerId && root.layers.get(soleLayerId)?.type !== LayerType.Path
    );
    const bound = useSelectionBounds();
    if (!bound) {
      return null;
    }
    return (
      <>
        <rect
          className="fill-transparent stroke-blue-500 stroke-1 pointer-events-auto"
          style={{
            transform: `translate(${bound.x}px, ${bound.y}px)`,
          }}
          x={0}
          y={0}
          width={bound.width}
          height={bound.height}
        />{" "}
        {isShowingHandles && (
          <>
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              style={{
                cursor: "nwse-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bound.x - HANDLE_WIDTH / 2}px, ${bound.y - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Top + Side.Left, bound);
              }}
            />

            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              style={{
                cursor: "ns-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bound.x + bound.width / 2 - HANDLE_WIDTH / 2}px, ${bound.y - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Top, bound);
              }}
            />

            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              style={{
                cursor: "nesw-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bound.x - HANDLE_WIDTH / 2 + bound.width}px, ${bound.y - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                // TODO: Add resize handler
                onResizeHandlePointerDown(Side.Top + Side.Right, bound);
              }}
            />

            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              style={{
                cursor: "ew-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bound.x - HANDLE_WIDTH / 2 + bound.width}px, ${bound.y + bound.height / 2 - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                // TODO: Add resize handler
                onResizeHandlePointerDown(Side.Right, bound);
              }}
            />
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              style={{
                cursor: "nwse-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bound.x - HANDLE_WIDTH / 2 + bound.width}px, ${bound.y - HANDLE_WIDTH / 2 + bound.height}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                // TODO: Add resize handler
                onResizeHandlePointerDown(Side.Bottom + Side.Right, bound);
              }}
            />
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              style={{
                cursor: "ns-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bound.x + bound.width / 2 - HANDLE_WIDTH / 2}px, ${bound.y - HANDLE_WIDTH / 2 + bound.height}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                // TODO: Add resize handler
                onResizeHandlePointerDown(Side.Bottom, bound);
              }}
            />
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              style={{
                cursor: "nesw-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bound.x - HANDLE_WIDTH / 2}px, ${bound.y - HANDLE_WIDTH / 2 + bound.height}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                // TODO: Add resize handler
                onResizeHandlePointerDown(Side.Bottom + Side.Left, bound);
              }}
            />
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              style={{
                cursor: "ew-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bound.x - HANDLE_WIDTH / 2}px, ${bound.y - HANDLE_WIDTH / 2 + bound.height / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                // TODO: Add resize handler
                onResizeHandlePointerDown(Side.Left, bound);
              }}
            />
          </>
        )}
      </>
    );
  }
);

SelectionBox.displayName = "SelectionBox";
