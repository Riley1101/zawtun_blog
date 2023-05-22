import React from "react";
import Link from "next/link";
import { ArticleProps } from "@/type";

const Card = (props: ArticleProps) => {
  const { title, body, _id, author, slug, _type, description, readingTime } =
    props;

  return (
    <Link href={`/${_type}s/${slug.current}`}>
      <div className="flex flex-col gap-4 p-4 border rounded-md hover:border-bd-bg border-bt-bg">
        <h3 className="text-2xl font-semibold text-transparent line-clamp-1 bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600">
          {title}
        </h3>
        <p className="text-sm text-gray-400">{author.name}</p>

        <p className="text-gray-300 line-clamp-5">{description}</p>

        <div className="flex justify-between py-4 text-sm text-gray-400 ">
          <p>April 3,2023</p>
          <p>{readingTime} min read</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
