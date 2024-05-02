"use client";
import { query } from "@/convex/_generated/server";
import React from "react";
import EmptySearch from "./EmptySearch";
import EmptyFavorite from "./EmptyFavorite";
import EmptyBoard from "./EmptyBoard";
interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = [];
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

  return <div>{}</div>;
};

export default BoardList;
