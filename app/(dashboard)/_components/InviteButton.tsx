import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { OrganizationProfile } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import React from "react";

const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <Plus className="size-4 mr-2" />
          Invite Member
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 lg:m-4 bg-transparent border-none w-fit max-w-[880px]">
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
};

export default InviteButton;
