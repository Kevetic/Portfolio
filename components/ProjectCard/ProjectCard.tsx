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
        {first ? <CardTitle>{name}</CardTitle> : null}
        <CardDescription>{summary}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="rounded-lg p-10 md:max-h-96"
        />
      </CardContent>
      <CardFooter className="w-full flex justify-between">
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