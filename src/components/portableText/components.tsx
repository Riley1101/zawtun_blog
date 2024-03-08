import { PortableTextComponents } from "@portabletext/react";

import Codeblock from "./Codeblock";
import { SanityImage } from "./Image";

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
      <h3 className="text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 my-4">
        {children}
      </h3>
    ),

    h4: ({ children }: any) => (
      <h4 className="text-xl  text-transparent bg-clip-text leading-loose text-gray-300 text-[19px] px-4">
        {children}
      </h4>
    ),

    normal: ({ children }: any) => (
      <p className=" text-gray-400 text-lg py-4">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className=" pl-6 flex flex-col gap-2 text-gray-300">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="pl-6 flex flex-col gap-2 text-gray-300">{children}</ol>
    ),

    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li className="list-disc">{children}</li>,
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },

  marks: {
    code: ({ children }: any) => (
      <code className="text-sm my-4">{children}</code>
    ),
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),

    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;

      return (
        <a
          className="text-indigo-500 hover:text-purple-500 px-2"
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noindex nofollow" : "external"}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    code: (props) => {
      return <Codeblock {...props} />;
    },
    image: SanityImage,
  },
};

export { myPortableTextComponents };
