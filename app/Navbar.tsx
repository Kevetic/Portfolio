"use client";

import { ModeToggle } from "@/components/Toggle";
import * as React from "react";
import { usePathname } from "next/navigation";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function Navigation() {
  const pathname = usePathname();

  return (
    <div className="p-4 flex justify-start items-center gap-5 z-30 relative">
      {pathname == "/" ? null : (
        <Link href={"/"}>
          <ArrowLeftIcon className="w-9 h-9 border rounded-lg hover:animate-pulse cursor-pointer transition-all" />
        </Link>
      )}
      <ModeToggle />
    </div>
  );
}
