"use client";
import React, { useEffect, useState, ChangeEvent } from "react";
import qs from "query-string";
import { useDebounceValue, DebouncedState } from "usehooks-ts";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useDebounceValue(value, 100);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  }, [debouncedValue, router]);
  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground size-4" />
      <Input
        placeholder="Search boards"
        className="w-full max-w-[516px] pl-9"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default SearchInput;
