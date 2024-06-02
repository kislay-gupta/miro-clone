import { Camera, Color, Point, Side, XYWH } from "@/types/canvas";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const COLORS = ["#DC2626", "#097706", "#059669", "#7C3AED", "#DB2777"];
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
}

export function pointerEventToCanvasPoint(
  e: React.PointerEvent,
  camera: Camera
) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y,
  };
}
export function colorToCss(color: Color) {
  return `#${color.r.toString(16).padStart(2, "0")}${color.g.toString(16).padStart(2, "0")}${color.b.toString(16).padStart(2, "0")}`;
}

export function resizeBounds(bound: XYWH, corner: Side, point: Point): XYWH {
  const result = {
    x: bound.x,
    y: bound.y,
    width: bound.width,
    height: bound.height,
  };

  if ((corner & Side.Left) === Side.Left) {
    result.x = Math.min(point.x, bound.x + bound.width);
    result.width = Math.abs(bound.x + bound.width - point.x);
  }

  if ((corner & Side.Right) === Side.Right) {
    result.x = Math.min(point.x, bound.x);
    result.width = Math.abs(point.x - bound.x);
  }

  if ((corner & Side.Top) === Side.Top) {
    result.y = Math.min(point.y, bound.y + bound.height);
    result.height = Math.abs(bound.y + bound.height - point.y);
  }
  if ((corner & Side.Bottom) === Side.Bottom) {
    result.y = Math.min(point.y, bound.y);
    result.height = Math.abs(point.y - bound.y);
  }
  return result;
}
