"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5 ">
      <div className="hidden lg:flex lg:flex-1">{/* TODO:Add search */}</div>
      <UserButton />
    </div>
  );
};

export default Navbar;
