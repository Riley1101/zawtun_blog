import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { SiTypescript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { SiJavascript } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io";
import { FaAws } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaDocker } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { DiJava } from "react-icons/di";

import Image from "next/image";
import Link from "next/link";

interface AboutProps {
  title: string;
  name: string;
  description: string;
  body: any;
}

const Profile = (props: AboutProps) => {
  const { title, description, body, name } = props;
  return (
    <div className="bg-gray-800">
      <h2 className="p-6 py-4 text-3xl text-white border-b-2 border-bt-bg lg:w-3/5 lg:mx-auto">
        About
      </h2>
      <div className="justify-between mx-auto lg:flex lg:w-3/5 lg:gap-8 ">
        <div className="flex flex-col">
          <div className="flex items-center justify-center py-4 ">
            <Image
              src="/zzt.jpeg"
              alt=""
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-4 text-white lg:mx-auto lg:justify-between ">
            <div className="flex flex-col items-center justify-center gap-4 ">
              <h2 className="text-3xl">{title}</h2>
              <p> {description}</p>
            </div>
            <div className="flex justify-center gap-8 py-4 text-white ">
              <Link href="https://mail.google.com/">
                <HiOutlineMail className="w-[25px] h-[25px] text-red-500" />
              </Link>
              <Link href="https://www.linkedin.com/in/zaw-tun-75bb52127/">
                <AiOutlineLinkedin className="w-[25px] h-[25px] text-sky-600" />
              </Link>
              <Link href="https://github.com/zawztun">
                <AiFillGithub className="w-[25px] h-[25px] text-white" />
              </Link>
              <Link href="https://twitter.com">
                <BsTwitter className="w-[25px] h-[25px] text-sky-400" />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center gap-4 p-4">
            <p className="p-2 leading-8 text-white ">
              I am a professional freelance web developer with a background as a
              Cisco certified Network Engineer. In 2017, I made a successful
              career transition from Network Engineering to Web Development.
              <br />
              Prior to my freelance work, I gained valuable experience as a
              Frontend Developer at Teromac and Arcon Technologies in New York
              City. My primary focus as a web developer revolves around building
              user interfaces, implementing robust authorization systems, and
              integrating secure payment gateways.
              <br />I possess expertise in a wide range of technologies and
              frameworks, including React, Redux, Next.js, TypeScript, Jest,
              SQL, NoSQL, RESTful APIs, Tailwind CSS, and Git.
              <br />
            </p>
          </div>
          <div className="flex flex-col gap-4 p-6 font-semibold text-white ">
            My current Tech Stack:
            <div className="flex gap-4">
              <DiJava className="w-[35px] h-[35px] text-yellow-600" />
              <SiJavascript className="w-[30px] h-[30px] text-yellow-600" />
              <SiTypescript className="w-[30px] h-[30px] text-sky-600" />
              <IoLogoNodejs className="w-[30px] h-[30px] text-green-400" />
              <GrReactjs className="w-[30px] h-[30px] text-sky-600" />
              <TbBrandNextjs className="w-[30px] h-[30px] text-black-600" />
              <GrGraphQl className="w-[30px] h-[30px] text-red-700" />
              <DiMysql className="w-[35px] h-[35px] text-blue-300" />
              <SiMongodb className="w-[30px] h-[30px] text-green-600" />
              <FaDocker className="w-[30px] h-[30px] text-sky-600" />
              <FaAws className="w-[30px] h-[30px] text-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
