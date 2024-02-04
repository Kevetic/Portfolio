"use client";
import React from "react";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Footer() {
  const pathname = usePathname();

  return (
    <div className="w-full p-4 flex justify-end items-center ">
      {pathname === "/projects" ? (
        <Link href={"/contact"}>
          <EnvelopeOpenIcon width={20} height={20} />
        </Link>
      ) : null}
      {pathname === "/contact" ? (
        <Link href={"/projects"} className="absolute bottom-2">
          <video
            width="50px"
            height="50px"
            loop
            autoPlay={true}
            webkit-playsInline={true}
            playsInline
            muted
          >
            <source src="/QPS.mp4" type="video/mp4" />
          </video>
        </Link>
      ) : null}
    </div>
  );
}

export default Footer;
