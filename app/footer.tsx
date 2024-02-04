"use client";
import React from "react";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Footer() {
  const pathname = usePathname();

  return (
    <div className="w-full p-4 flex justify-end items-center">
      {pathname === "/projects" ? (
        <Link href={"/contact"}>
          <EnvelopeOpenIcon width={20} height={20} />
        </Link>
      ) : null}
    </div>
  );
}

export default Footer;
