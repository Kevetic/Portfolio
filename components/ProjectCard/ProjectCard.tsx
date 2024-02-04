"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

function ProjectCard({
  name,
  image,
  summary,
  link,
  github,
  styles,
  first,
}: any) {
  return (
    <Card className={styles}>
      <CardHeader>
        <CardTitle className="text-center justify-center items-center lg:m-2">
          {name}
        </CardTitle>
        <CardDescription className="w-full p-2 text-center">
          {summary}
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="text-center m-auto"
        />
      </CardContent>
      <CardFooter className="justify-around">
        {github ? (
          <Link href={github}>
            <Button>Github</Button>
          </Link>
        ) : null}
        <Link href={link}>
          <Button>Demo</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
