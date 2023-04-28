import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "./Modal";

type Props = {};

const Navbar = (props: Props) => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(!modal);
  };
  return (
    <div className="bg-gradient-to-r from-gray-500 via-black to-gray-500 sticky top-0 z-10 ">
      <div className="flex justify-between gap-4 lg:w-3/5 lg:mx-auto py-2 animate-fade-in-down duration-500">
        <div className="bg-gradient-to-r from-gray-500 via-black to-gray-500 rounded-full m-4 text-white p-2 items-center">
          <Link href="/">ZT</Link>
        </div>
        <div className="flex justify-around gap-4 ">
          <div className="invisible hover:text-white lg:flex gap-8 lg:visible lg:justify-center lg:items-center ">
            <Link
              href="/blogs"
              className="border-b-2 border-transparent hover:border-bd-bg text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600 hover:text-bd-bg  "
            >
              Blogs
            </Link>
            <Link
              href="/projects"
              className="border-b-2 border-transparent hover:border-bd-bg text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600 hover:text-bd-bg"
            >
              Projects
            </Link>
            <Link
              href="/snippets"
              className="border-b-2 border-transparent hover:border-bd-bg text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600 hover:text-bd-bg"
            >
              Snippets
            </Link>
            <Link
              href="/about"
              className="border-b-2 border-transparent hover:border-bd-bg text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600 hover:text-bd-bg"
            >
              About
            </Link>
          </div>
          <div
            className="flex bg-gradient-to-r from-gray-500 via-black to-gray-500 text-white my-auto justify-center items-center rounded-md w-[40px] h-[40px] mx-4 lg:bg-none lg:hidden"
            onClick={showModal}
          >
            <Image src="/images/markdown.svg" alt="" width={35} height={35} />
          </div>
        </div>
      </div>
      {modal ? <Modal showModal={showModal} /> : " "}
    </div>
  );
};

export default Navbar;
