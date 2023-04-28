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
    <div className="bg-gradient-to-r from-gray-500 via-black to-gray-500">
      <h2 className="p-6 text-3xl text-white border-b-2 py-4 border-bt-bg lg:w-3/5 lg:mx-auto">
        About
      </h2>
      <div className="lg:flex lg:w-3/5 justify-between mx-auto lg:gap-8 ">
        <div className="flex flex-col">
          <div className="flex justify-center items-center py-4 ">
            <Image
              src="/zzt.jpeg"
              alt=""
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
          <div className="text-white flex flex-col gap-4 lg:mx-auto lg:justify-between ">
            <div className="flex flex-col gap-4 justify-center items-center ">
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
          <div className="flex flex-col gap-4 items-center p-4">
            <p className=" p-2 leading-8 text-white">
              I am currently a Freelence Web Developer. My background is Cisco
              certified Network Engineer . I switched my career to Web Developer
              from Network Engineer at 2017. Before Freeelencer I was frontEnd
              Developer in Teromac and Arcon Technologies at New York City.
              <br />I mainly working building UI, authorizations, payment
              integrations. I using React , Redux, NextJS , TypeScript , Jest,
              SQl, NoSql, RESTful , Tailwind , Git. I mainly working building
              UI, authorizations, payment integrations and Using React, NextJS
              TypeScript and CMS integration. I mainly working building UI,
              authorizations, payment integrations and Using React, NextJS
              TypeScript and CMS integration.
            </p>
          </div>
          <div className="flex flex-col p-6 gap-4 text-white font-semibold ">
            My current Tech Stack:
            <div className="flex gap-4">
              <SiJavascript className="w-[30px] h-[30px] text-yellow-600" />
              <SiTypescript className="w-[30px] h-[30px] text-sky-600" />
              <IoLogoNodejs className="w-[30px] h-[30px] text-green-400" />
              <GrReactjs className="w-[30px] h-[30px] text-sky-600" />
              <TbBrandNextjs className="w-[30px] h-[30px] text-black-600" />
              <GrGraphQl className="w-[30px] h-[30px] text-red-700" />
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
