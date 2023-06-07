import Link from "next/link";
import React from "react";

type Props = { title: string; href: string };

const Title = (props: Props) => {
  return (
    <div className="pt-6 pb-4 bg-gray-800">
      <div className="w-full p-2 mx-auto bg-gray-800 lg:w-3/5">
        <Link
          href={props.href}
          className="text-2xl text-transparent  -scroll-ml-3.5  bg-nav-bt bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600 hover:text-bd-bg"
        >
          {props.title}
        </Link>
      </div>
    </div>
  );
};

export default Title;
