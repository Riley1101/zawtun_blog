import React, { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { myPortableTextComponents } from "../portableText/components";
import { urlFor } from "../../studio/sanity_utils";
import Image from "next/image";
type Props = { data: any };

export const PostDetail = ({ data }: Props) => {
  const [scroll, setScroll] = useState(0);

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

  return (
    <>
      <div
        className={`text-white py-8 from-gray-500 via-black to-gray-500 transition-all duration-700 ${" bg-gray-800"}`}
      >
        <div className="flex flex-col p-8 lg:w-[50%] mx-auto  border-gray-600 bg-transparent rounded-md">
          <div className="flex justify-center w-full mx-auto aspect-video">
            <Image
              className="object-cover rounded-md aspect-video"
              src={urlFor(data?.mainImage).width(1000).url()}
              width={800}
              height={250}
              alt=""
            />
          </div>
          <h1 className="mt-6 text-xl font-bold text-transparent lg:text-3xl line-clamp-1 bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500">
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
