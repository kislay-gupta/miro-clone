import React from "react";
import { useSelf, useMutation } from "@/liveblocks.config";

export const useDeleteLayers = () => {
  const selection = useSelf((me) => me.presence.selection);
  return useMutation(
    ({ storage, setMyPresence }) => {
      const liveLayers = storage.get("layers");
      const liveLayersId = storage.get("layerIds");

      for (const id of selection) {
        liveLayers.delete(id);
        const index = liveLayersId.indexOf(id);
        if (index !== -1) {
          liveLayersId.delete(index);
        }
      }
      setMyPresence({ selection: [] }, { addToHistory: true });
    },
    [selection]
  );
};
