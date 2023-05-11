import Link from "next/link";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import ContactForm from "../form/ContactForm ";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-gray-800 text-gray-300 p-4 ">
      <div className="flex text-center justify-center py-4">🤖🤖🤖</div>
      <div className="lg:flex lg:w-3/5 justify-between mx-auto">
        <div className="flex gap-16 p-4 lg:flex-row">
          <div className="flex flex-col gap-4 text-gray-400 text-sm">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600 hover:text-bd-bg">
              GENERAL
            </h2>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/snippets">Snippets</Link>
          </div>
          <div className="flex flex-col gap-4 ">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600 hover:text-bd-bg">
              EXTRAS
            </h2>
            <Link href="https://mail.google.com/">
              <HiOutlineMail className="w-[25px] h-[25px] text-red-500" />
            </Link>
            <Link href="https://www.linkedin.com/in/zaw-tun-75bb52127/">
              <AiOutlineLinkedin className="w-[25px] h-[25px] text-sky-600" />
            </Link>
            <Link href="https://github.com/zawztun">
              <AiFillGithub className="w-[25px] h-[25px] text-bwhite" />
            </Link>
            <Link href="https://twitter.com">
              <BsTwitter className="w-[25px] h-[25px] text-sky-400" />
            </Link>

            {/* <Link href="/">Newsletter</Link>
            <Link href="/">Uses</Link>
            <Link href="/">Resume</Link>
            <Link href="/">Tweets</Link>
            <Link href="/">Tags</Link> */}
          </div>
        </div>
        <ContactForm />
      </div>

      <div className="flex flex-col gap-8 justify-center items-center lg:w-3/5 lg:mx-auto lg:flex-row-reverse lg:justify-between ">
        <div className="flex gap-8 py-8">
          {/* <Link href="https://mail.google.com/">
            <HiOutlineMail className="w-[30px] h-[30px] text-red-500" />
          </Link>
          <Link href="https://www.linkedin.com/in/zaw-tun-75bb52127/">
            <AiOutlineLinkedin className="w-[30px] h-[30px] text-sky-600" />
          </Link>
          <Link href="https://github.com/zawztun">
            <AiFillGithub className="w-[30px] h-[30px] text-bwhite" />
          </Link>
          <Link href="https://twitter.com">
            <BsTwitter className="w-[30px] h-[30px] text-sky-400" />
          </Link> */}
        </div>

        <h3 className="py-8b text-bt-bg "></h3>
      </div>
    </div>
  );
};
export default Footer;
