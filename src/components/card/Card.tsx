import React from "react";
import Link from "next/link";
import { ArticleProps } from "@/type";

const Card = (props: ArticleProps) => {
  const { title, body, _id, author, slug, _type } = props;

  return (
    <Link href={`/${_type}s/${slug.current}`}>
      <div className="flex flex-col gap-4 border hover:border-bd-bg border-bt-bg p-4 rounded-md">
        <h3 className="text-2xl font-semibold line-clamp-1">{title}</h3>
        <p>{author.name}</p>
        <h2 className="line-clamp-2">
          Exploring HTTP2 Server Push: An Efficient Way to Speed Up Your Web
          Applications
        </h2>
        <p>
          HTTP2 is the second major version of the HTTP protocol used by the
          World Wide Web. It is the successor of the HTTP1.x protocol, which has
          been in use for over a decade.
        </p>

        <div className="flex py-4">
          <p>April 3,2023</p>
          <p>2 min read</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
