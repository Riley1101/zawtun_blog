import React, { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { myPortableTextComponents } from "../portableText/components";
import { urlFor } from "../../studio/sanity_utils";
import Image from "next/image";
type Props = { data: any };

export const PostDetail = ({ data }: Props) => {
  const [scroll, setScroll] = useState(0);
  // console.log(data.body);
  // console.log(data.mainImage);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScroll(position);
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  console.log(scroll);
  return (
    <>
      <div
        className={`text-white py-8 from-gray-500 via-black to-gray-500 transition-all duration-700 ${" bg-gray-800"}`}
      >
        <div className="flex flex-col p-8 lg:w-[50%] mx-auto  border-gray-600 bg-transparent rounded-md">
          <div className="flex w-full justify-center mx-auto aspect-video">
            <Image
              className="aspect-video object-cover rounded-md"
              src={urlFor(data.mainImage).width(1000).url()}
              width={800}
              height={250}
              alt=""
            />
          </div>
          <h1 className="font-bold mt-6 text-3xl lg:text-5xl line-clamp-1 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500">
            {data.title}
          </h1>

          {/* <img src={urlFor(data.mainImage).width(600).url()} className="my-4" /> */}
          <div className="leading-[1.5]">
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
