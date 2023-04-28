import React from "react";
import { PortableText } from "@portabletext/react";
import { myPortableTextComponents } from "../portableText/components";
import { urlFor } from "../studio/sanity_utils";
import Image from "next/image";
type Props = { data: any };

export const PostDetail = ({ data }: Props) => {
  // console.log(data.body);
  // console.log(data.mainImage);
  // console.log(urlFor(data.mainImage).width(200).url());

  return (
    <>
      <div className="bg-gradient-to-r from-gray-500 via-black to-gray-500 text-white py-8 ">
        <div className="flex flex-col p-8 lg:w-3/5 mx-auto border border-gray-600 bg-transparent rounded-md">
          <h3 className="text-2xl font-semibold line-clamp-1 text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600">
            {data.title}
          </h3>

          <div className="flex w-full justify-center mx-auto p-4 aspect-video">
            <Image
              src={urlFor(data.mainImage).width(600).url()}
              width={600}
              height={250}
              alt=""
            />
          </div>

          {/* <img src={urlFor(data.mainImage).width(600).url()} className="my-4" /> */}
          <div className="bg-gray-700 flex flex-col gap-4 p-4 rounded-md ">
            <PortableText
              value={data.body}
              components={myPortableTextComponents}
            />
          </div>
        </div>
      </div>
    </>
  );
};
