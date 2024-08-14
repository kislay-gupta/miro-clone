"use client";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import { useProModal } from "@/store/use-pro-modal";

export const ProModal = () => {
  const { isOpen, onClose } = useProModal();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pro Modal</DialogTitle>
        </DialogHeader>
        <DialogDescription>This is a pro modal</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
