import React, { useState } from "react";
import Link from "next/link";
import Modal from "./Modal";
import { CgMenuGridO } from "react-icons/cg";

type Props = {};

const Navbar = (props: Props) => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(!modal);
  };
  return (
    <div className="sticky top-0 z-10 bg-gray-800 backdrop-filter backdrop-blur-xl bg-opacity-10 ">
      <div className="flex justify-between gap-4 py-2 duration-500 lg:w-3/5 lg:mx-auto animate-fade-in-down">
        <div className="items-center p-2 m-4 text-white rounded-full">
          <Link href="/">
            <span className="text-transparent border-b-2 border-transparent hover:border-bd-bg bg-clip-text bg-gradient-to-br from-purple-400 to-sky-600 hover:text-bd-bg ">
              Home
            </span>
          </Link>
        </div>
        <div className="flex justify-around gap-4 ">
          <div className="hidden gap-8 hover:text-white lg:flex lg:visible lg:justify-center lg:items-center ">
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
            className="flex items-center justify-center mx-4 my-auto text-white bg-gray-800 rounded-md lg:bg-none lg:hidden bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600 hover:text-bd-bg"
            onClick={showModal}
          >
            <CgMenuGridO className="w-[20px] h-[20px] text-menu " />
          </div>
        </div>
      </div>
      {modal ? <Modal showModal={showModal} /> : " "}
    </div>
  );
};

export default Navbar;
