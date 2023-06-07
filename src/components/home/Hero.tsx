import Link from "next/link";
import React from "react";
import Lottie from "react-lottie-player";
import lotti from "./lotti_02.json";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full py-8 pb-6 mx-auto overflow-x-auto text-white bg-gray-800">
      <div className="flex flex-col-reverse items-center justify-center w-full gap-4 mx-auto lg:w-3/5 lg:mx-auto lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-8 p-2 duration-1000 animate-fade-in-down scrollbar">
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold leading-relaxed text-center lg:text-start lg:text-5xl ">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600">
                Hi there 👋
              </span>
              <br />I am Zaw Z Tun.
            </h2>
            <div className="text-2xl text-center text-gray-400 leading-12 lg:text-start lg:text-2xl">
              <p className="text-[19px]">
                I am a web developer with expertise in software engineering
                practices throughout the entire <strong>SDLC</strong>, from
                design to implementation to integration.
              </p>
            </div>
          </div>
          <div className="flex gap-4 py-2">
            <Link
              className="p-2 bg-gray-800 border rounded-lg hover:border-bd-bg border-bt-bg"
              href="/blogs"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600 hover:text-bd-bg">
                Check Blog
              </span>
            </Link>

            <Link
              className="p-2 bg-gray-800 border rounded-lg hover:border-bd-bg border-bt-bg"
              href="/about"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600 hover:text-bd-bg">
                About Me
              </span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center w-2/4 origin-center lg:justify-end md:py-12 ">
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
