import React from "react";
import NewButton from "./NewButton";
import List from "./List";

const Sidebar = () => {
  return (
    <aside className="fixed text-white flex  z-[1] left-0 bg-blue-950 h-full w-[60px] flex-col p-2.5 gap-y-4">
      <List />
      <NewButton />
    </aside>
  );
};

export default Sidebar;
