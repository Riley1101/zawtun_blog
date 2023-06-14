import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArticleProps } from "@/type";
import moment from "moment";

const Pjcard = (props: ArticleProps) => {
  const {
    title,
    body,
    _id,
    author,
    slug,
    _type,
    description,
    readingTime,
    mainImage,
    publishedAt,
  } = props;

  return (
    <div>
      <Link href={`/${_type}s/${slug.current}`}>
        <div className="flex flex-col p-4 border rounded-md hover:border-bd-bg border-bt-bg">
          <div className=" border border-bt-bg min-w-[100px] ">
            <Image
              src={mainImage}
              alt=""
              width={350}
              height={300}
              className="aspect-video"
            />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-transparent line-clamp-1 bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600">
            {title}
          </h3>
          <p className="my-2 text-sm text-gray-400">{author.name}</p>

          <p className="text-gray-300 line-clamp-3">{description}</p>

          <div className="flex justify-between py-4 text-sm text-gray-400 ">
            <p>{moment(publishedAt).format("MMM Do YYYY")}</p>
            <p>{readingTime} min read</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Pjcard;
