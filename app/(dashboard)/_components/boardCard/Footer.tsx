import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { title } from "process";

interface FooterProps {
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  isFavorite: boolean;
  onClick: () => void;
  disabled: boolean;
}

export const Footer = ({
  title,
  authorLabel,
  createdAtLabel,
  isFavorite,
  onClick,
  disabled,
}: FooterProps) => {
  return (
    <div className="relative bg-white p-3 text-[13px] truncate max-w-[calc(100%-0px)]">
      <p>{title}</p>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] truncate text-muted-foreground">
        {authorLabel}, {createdAtLabel}
      </p>
      <Button
        disabled={disabled}
        onClick={onClick}
        variant="link"
        className={cn(
          "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-blue-600",
          disabled && "cursor-not-allowed opacity-75"
        )}
      >
        <Star
          className={cn("size-4", isFavorite && "fill-blue-600 text-blue-600")}
        />
      </Button>
    </div>
  );
};
