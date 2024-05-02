import Image from "next/image";
import React from "react";

const EmptyFavorite = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Image
        src="/elements-favorite.png"
        alt="empty favorite"
        width={140}
        height={140}
      />
      <h2 className="text-2x font-semibold mt-6">No Favorite Boards!</h2>
      <p className="text-muted-foreground  text-sm mt-2">
        Try favoriting a board
      </p>
    </div>
  );
};

export default EmptyFavorite;
