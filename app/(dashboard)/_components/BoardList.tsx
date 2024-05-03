"use client";
import { query } from "@/convex/_generated/server";

import React from "react";
import EmptySearch from "./EmptySearch";
import EmptyFavorite from "./EmptyFavorite";
import EmptyBoard from "./EmptyBoard";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { BoardCard } from "./boardCard";
import { NewBoardButton } from "./NewBoardButton";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.get, { orgId });
  if (data === undefined) {
    return (
      <div>
        <h2 className="text-3xl">
          {query.favorites ? "Favorite Boards" : "Team Boards"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-5 pb-10">
          <NewBoardButton orgId={orgId} disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );
  }
  if (!data?.length && query.search) {
    return (
      <>
        <EmptySearch />
      </>
    );
  }

  if (!data?.length && query.favorites) {
    return (
      <>
        <EmptyFavorite />
      </>
    );
  }
  if (!data?.length) {
    return (
      <>
        <EmptyBoard />
      </>
    );
  }

  return (
    <div>
      <h2 className="text-3xl">
        {query.favorites ? "Favorite Boards" : "Team Boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-5 pb-10">
        <NewBoardButton orgId={orgId} />
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={false}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardList;
