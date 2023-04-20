import React from "react";
import { PortableText } from "@portabletext/react";
import { myPortableTextComponents } from "../portableText/components";
import { urlFor } from "../studio/sanity_utils";
type Props = { data: any };

export const PostDetail = ({ data }: Props) => {
  // console.log(data.body);
  console.log(data.body);
  return (
    <>
      <div className="bg-gradient-to-r from-gray-500 via-black to-gray-500 text-white py-8 ">
        <div className="flex flex-col p-8 lg:w-3/5 mx-auto ">
          <h1 className="text-2xl font-semibold ">{data.title}</h1>
          <img src={urlFor(data.mainImage).width(200).url()} className="my-4" />
          <div className="bg-gray-700 flex flex-col gap-4 p-4 ">
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
