import React from "react";
import Link from "next/link";
import { ArticleProps } from "@/type";

const Card = (props: ArticleProps) => {
  const { title, body, _id, author, slug, _type, description } = props;
  console.log(description);
  return (
    <Link href={`/${_type}s/${slug.current}`}>
      <div className="flex flex-col gap-4 border hover:border-bd-bg border-bt-bg p-4 rounded-md">
        <h3 className="text-2xl font-semibold line-clamp-1 text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600">
          {title}
        </h3>
        <p className="text-sm text-gray-400">{author.name}</p>

        <p className="line-clamp-5 text-gray-300">{description}</p>

        <div className="flex py-4 justify-between text-sm text-gray-400 ">
          <p>April 3,2023</p>
          <p>2 min read</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
