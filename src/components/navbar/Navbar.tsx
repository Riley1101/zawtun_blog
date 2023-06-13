import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "./Modal";
import { AiOutlineBars } from "react-icons/Ai";

type Props = {};

const Navbar = (props: Props) => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(!modal);
  };
  return (
    <div className="sticky top-0 z-10 bg-gray-800 ">
      <div className="flex justify-between gap-4 py-2 duration-500 lg:w-3/5 lg:mx-auto animate-fade-in-down">
        <div className="items-center p-2 m-4 text-white bg-gray-800 rounded-full">
          <Link href="/">
            <span className="text-transparent border-b-2 border-transparent hover:border-bd-bg bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600 hover:text-bd-bg ">
              Home
            </span>
          </Link>
        </div>
        <div className="flex justify-around gap-4 ">
          <div className="invisible gap-8 hover:text-white lg:flex lg:visible lg:justify-center lg:items-center ">
            <Link
              href="/blogs"
              className="text-transparent border-b-2 border-transparent hover:border-bd-bg bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600 hover:text-bd-bg "
            >
              Blogs
            </Link>
            <Link
              href="/projects"
              className="text-transparent border-b-2 border-transparent hover:border-bd-bg bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600 hover:text-bd-bg"
            >
              Projects
            </Link>
            <Link
              href="/snippets"
              className="text-transparent border-b-2 border-transparent hover:border-bd-bg bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600 hover:text-bd-bg"
            >
              Snippets
            </Link>
            <Link
              href="/about"
              className="text-transparent border-b-2 border-transparent hover:border-bd-bg bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600 hover:text-bd-bg"
            >
              About
            </Link>
          </div>
          <div
            className="flex bg-gray-800 text-white my-auto justify-center items-center rounded-md w-[40px] h-[40px] mx-4 lg:bg-none lg:hidden"
            onClick={showModal}
          >
            <AiOutlineBars className="w-[35px] h-[35px]" />
          </div>
        </div>
      </div>
      {modal ? <Modal showModal={showModal} /> : " "}
    </div>
  );
};

export default Navbar;
