import { create } from "zustand";

const defaultValues = { id: "", title: "" };

interface IRenameModal {
  isOpen: boolean;
  initialValue: typeof defaultValues;
  onOpen: (id: string, title: string) => void;
  onClose: () => void;
}

export const useRenameModal = create<IRenameModal>((set) => ({
  isOpen: false,
  onOpen: (id, title) =>
    set({
      isOpen: true,
      initialValue: { id, title },
    }),
  onClose: () =>
    set({
      isOpen: false,
      initialValue: defaultValues,
    }),
  initialValue: defaultValues,
}));
