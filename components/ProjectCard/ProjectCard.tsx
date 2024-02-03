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
        <CardTitle className="text-center md:text-left">{name}</CardTitle>
        <CardDescription className="w-full p-2 text-center md:text-left md:w-1/2">
          {summary}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center overflow-hidden md:w-full">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="rounded-lg p-10 md:max-h-96"
        />
      </CardContent>
      <CardFooter className="w-full flex justify-center gap-4">
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
