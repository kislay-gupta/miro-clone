"use client";
import {
  OrganizationSwitcher,
  useOrganization,
  UserButton,
} from "@clerk/nextjs";
import React from "react";
import SearchInput from "./SearchInput";
import InviteButton from "./InviteButton";
import Link from "next/link";

const Navbar = () => {
  const { organization } = useOrganization();
  return (
    <div className="flex justify-center  items-center  gap-x-4 p-5 ">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <div className="block lg:hidden flex-1">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "376px",
              },
              organizationSwitcherTrigger: {
                padding: "6px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                justifyContent: "space-between",
                backgroundColor: "white",
              },
            },
          }}
        />
      </div>
      {organization && <InviteButton />}
      <UserButton />
      <Link href="https://nearstudy.com/bihar-paramedical-vacancy-2024/">
        Near study
      </Link>
    </div>
  );
};

export default Navbar;
