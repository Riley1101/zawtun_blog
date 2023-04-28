import Link from "next/link";
import React from "react";
import Lottie from "react-lottie-player";
import lotti from "./lotti_02.json";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-gradient-to-r from-gray-500 via-black to-gray-500 text-white w-full mx-auto overflow-x-auto">
      <div className="flex flex-col-reverse w-full justify-center items-center gap-4 mx-auto lg:w-3/5 lg:mx-auto lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-8 p-2 animate-fade-in-down duration-1000 scrollbar">
          <div className="flex flex-col gap-8 ">
            <h2 className="text-3xl lg:text-5xl font-bold leading-relaxed ">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600">
                Hi there 👋
              </span>
              <br />I am Zaw Z Tun.
            </h2>
            <p className="text-2xl lg:text-2xl">I am Web Developer .</p>
          </div>
          <div className="flex gap-4 py-2">
            <Link
              className="p-2 bg-gradient-to-r from-gray-500 via-black to-gray-500 rounded-lg border hover:border-bd-bg border-bt-bg"
              href="/blogs"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600 hover:text-bd-bg">
                Check Blog
              </span>
            </Link>

            <Link
              className="p-2 bg-gradient-to-r from-gray-500 via-black to-gray-500 rounded-lg border hover:border-bd-bg border-bt-bg"
              href="/about"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600 hover:text-bd-bg">
                About Me
              </span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center w-full lg:justify-end origin-center md:py-12 ">
          <Lottie
            className="animate-wiggle duration-1000 w-[200px] aspect-square md:w-[300px] "
            loop
            animationData={lotti}
            play
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
