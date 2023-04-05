import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  console.log(props);
  return (
    <div className="bg-bg sticky top-0 z-10 ">
      <div className="flex justify-between gap-4 lg:w-3/5 lg:mx-auto py-2 animate-fade-in-down duration-500">
        <div className="bg-bt-bg rounded-md m-4 text-white p-2 items-center">
          ZT
        </div>
        <div className="flex justify-around gap-4">
          <div className="invisible text-white lg:flex gap-4 lg:visible lg:justify-center lg:items-center">
            <Link href="/blogs">Blogs</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/snippets">Snippets</Link>
            <Link href="/about">About</Link>
          </div>
          <div className="flex bg-bg text-white mx-4 justify-center items-center">
            <Link href="/logo">
              <Image src="/images/markdown.svg" alt="" width={35} height={35} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
