import React from "react";
import { Canvas } from "./_components/Canvas";
import { Room } from "@/components/Room";
import { Loading } from "./_components/loading";
interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}
const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardIdPage;
