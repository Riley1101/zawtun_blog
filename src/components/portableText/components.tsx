import { PortableTextComponents } from "@portabletext/react";

import Codeblock from "./Codeblock";
import { SanityImage } from "./Image";
import Link from "next/link";
const myPortableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }: any) => (
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 my-4">
        {children}
      </h2>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 my-4">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 my-4">
        {children}
      </h3>
    ),

    h4: ({ children }: any) => (
      <h4 className="text-xl leading-loose text-gray-200 text-[19px] px-4">
        {children}
      </h4>
    ),

    link: ({ children }: any) => (
      <h4 className="text-xl leading-loose text-gray-200 text-[19px] px-4">
        {children}
      </h4>
    ),

    normal: ({ children }: any) => (
      <p className="text-base leading-loose text-gray-200 text-[19px] px-4">
        {children}
      </p>
    ),
  },

  marks: {
    code: ({ children }: any) => (
      <code className="text-2xl text-teal-200 my-4">{children}</code>
    ),
    a: ({ children }) => (
      <a className="font-semibold text-blue-300">{children}</a>
    ),
  },
  types: {
    code: (props) => {
      return (
        <p className="text-[9px]">
          <Codeblock {...props} />
        </p>
      );
    },
    image: SanityImage,
  },
};

export { myPortableTextComponents };
