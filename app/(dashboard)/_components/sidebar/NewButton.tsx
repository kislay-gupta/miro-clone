"use client";
import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Button className="bg-white/25   size-full flex justify-center items-center rounded-md opacity-60 hover:opacity-100 transition">
            <Plus className="text-white" />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none w-max-[480px]">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;
