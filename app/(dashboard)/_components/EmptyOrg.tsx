import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const EmptyOrg = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Image alt="empty state" src="/elements.png" width={200} height={200} />
      <h2 className="text-2xl font-semibold mt-6">Welcome to Next Miro</h2>
      <p className="text-muted-foreground mt-2 text-sm">
        Create an organization to get started{" "}
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Create Organization</Button>
          </DialogTrigger>
          <DialogContent className="p-0 border-none bg-transparent max-w-[480px]">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EmptyOrg;
