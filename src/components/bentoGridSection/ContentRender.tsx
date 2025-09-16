import Image from "next/image";
import React from "react";
import clsx from "clsx";
import { FadeIn } from "../common/FadeIn";

type Props = {
  image: {
    id: number;
    src: string;
    alt: string;
    col_size: string;
    content1: string;
    content2: string;
  };
};

const ContentRender = ({ image }: Props) => {
  return (
    <FadeIn
      start="top 90%"
      targetChildren
      className={clsx(
        "relative overflow-hidden rounded-3xl",
        image.col_size === "large" && "col-span-4",
        image.col_size === "medium" && "col-span-3",
        image.col_size === "small" && "col-span-2",
      )}
      key={image.id}
    >
      <Image
        src={image.src}
        className="h-full w-full object-cover"
        alt={image.alt}
        width={700}
        height={500}
        quality={96}
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black"></div>
      <div className="absolute bottom-0 left-0 max-w-xl p-6 text-xl text-balance text-white">
        <p>
          <span className="font-bold">{image.content1}</span> {image.content2}
        </p>
      </div>
    </FadeIn>
  );
};

export default ContentRender;
