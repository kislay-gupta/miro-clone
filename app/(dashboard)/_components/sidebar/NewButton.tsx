"use client";
import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Hint from "@/components/Hint";
const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint
            label="Create Organization"
            side="right"
            align="start"
            sideOffset={18}
          >
            <Button className="bg-white/25   size-full flex justify-center items-center rounded-md opacity-60 hover:opacity-100 transition">
              <Plus className="text-white" />
            </Button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none ">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;
