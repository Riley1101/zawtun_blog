import Link from "next/link";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-bg text-white p-4  ">
      <div className="flex text-center justify-center py-4">🤖🤖🤖</div>
      <div className="lg:flex lg:w-3/5 justify-between mx-auto">
        <div className="flex gap-16 p-4 lg:flex-row">
          <div className="flex flex-col gap-4">
            <h2>GENERAL</h2>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/snippets">Snippets</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h2>EXTRAS</h2>
            <Link href="/">Newsletter</Link>
            <Link href="/">Uses</Link>
            <Link href="/">Resume</Link>
            <Link href="/">Tweets</Link>
            <Link href="/">Tags</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="leading-8">
            <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
            <p>
              The latest articles, and resources, sent to your inbox directly!
            </p>
          </div>
          <div className="flex-col w-full border-2 border-bt-bg p-2 rounded-md lg:flex lg:flex-row">
            <input
              type="text"
              placeholder=" Please enter email address "
              className="flex outline-none bg-bg w-full"
            />
            <div className="hidden mx-auto bg-white text-bg p-2 rounded-md lg:block">
              Subscribe
            </div>
          </div>
          <div className="flex w-full mx-auto bg-white text-bg p-2 rounded-md justify-center lg:hidden">
            Subscribe
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 justify-center items-center lg:w-3/5 lg:mx-auto lg:flex-row-reverse lg:justify-between ">
        <div className="flex gap-8 py-8">
          <HiOutlineMail className="w-[35px] h-[35px]" />
          <AiOutlineLinkedin className="w-[35px] h-[35px]" />
          <AiFillGithub className="w-[35px] h-[35px]" />
          <BsTwitter className="w-[35px] h-[35px]" />
        </div>

        <h3 className="py-8b text-bt-bg ">&#169; by ZawTun </h3>
      </div>
    </div>
  );
};
export default Footer;
