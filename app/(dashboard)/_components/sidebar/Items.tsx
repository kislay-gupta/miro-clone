"use client";
import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";

interface ItemsProps {
  id: string;
  name: string;
  imageUrl: string;
}
const Items = ({ id, name, imageUrl }: ItemsProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) return;
    setActive({ organization: id });
  };
  return (
    <div className="aspect-square relative">
      <Image
        fill
        alt={name}
        src={imageUrl}
        onClick={onClick}
        className={cn(
          "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
          isActive && "opacity-100"
        )}
      />
    </div>
  );
};

export default Items;
