import Link from "next/link";
import React from "react";
import Image from "next/image";
import Lottie from "react-lottie-player";
import lotti from "./lotti.json";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-bg text-white w-full mx-auto overflow-x-auto">
      <div className="flex flex-col-reverse w-full justify-center items-center gap-4 mx-auto lg:w-3/5 lg:mx-auto lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-8 p-2 animate-fade-in-down duration-1000 scrollbar">
          <div className="flex flex-col gap-4 ">
            <h2 className="text-3xl lg:text-5xl font-bold leading-relaxed">
              Hey there 👋 <br />I am Zaw Z Tun.
            </h2>
            <p className="text-2xl lg:text-2xl">
              I am Web Developer and Blogger .
            </p>
          </div>
          <div className="flex gap-4 py-2">
            <Link className="p-2 bg-bt-bg rounded-lg" href="/">
              Check Blog
            </Link>

            <Link className="p-2 bg-white text-bt-bg rounded-lg" href="/">
              About Me
            </Link>
          </div>
        </div>
        <div className="flex justify-center p-2 w-2/4 lg:justify-end origin-center md:py-12 ">
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
