import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FcHome } from "react-icons/fc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsFillPostcardHeartFill } from "react-icons/bs";
import { FaBlogger } from "react-icons/fa";
import { AiFillSnippets } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Link from "next/link";

type Props = {
  showModal: () => void;
};
const lists = [
  {
    id: 1,
    icon: <FcHome />,
    link: "/",
    name: "Home",
    route: "h",
  },
  {
    id: 2,
    icon: <AiOutlineFundProjectionScreen />,
    link: "/projects",
    name: "Projects",
    route: "p",
  },
  {
    id: 3,
    icon: <FaBlogger />,
    link: "/blogs",
    name: "Blogs",
    route: "p",
  },

  {
    id: 4,
    icon: <AiFillSnippets />,
    link: "/snippets",
    name: "Snippets",
    route: "s",
  },
  {
    id: 5,
    icon: <AiFillGithub />,
    link: "github.com",
    name: "Github",
    route: "g",
  },
  {
    id: 6,
    icon: <AiOutlineLinkedin />,
    link: "linked.com",
    name: "LinkedIn",
    route: "L",
  },
  {
    id: 7,
    icon: <BsTwitter />,
    link: "twitter.com",
    name: "Twitter",
    route: "t",
  },
];
const Modal = ({ showModal }: Props) => {
  return (
    <div
      className="bg-gray-800 text-white w-full h-screen fixed z-10 top-0 left-0 opacity-91 grid place-items-center"
      onClick={(e) => {
        showModal();
      }}
    >
      <div
        className="border p-4 max-h-[600px] overflow-auto rounded-lg lg:w-2/5 lg:overflow-y-auto"
        onClick={(e) => {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }}
      >
        <div className="flex-col sticky top-0 w-full p-2 rounded-md lg:flex lg:flex-row ">
          <input
            type="text"
            placeholder=" Type a command search "
            className="flex outline-none bg-bg w-full font-thin focus:first-letter:"
          />
        </div>
        <div className="flex flex-col p-2">
          {lists.map((el) => (
            <div key={el.id} className="py-2 hover:bg-gray-700 px-2 rounded-lg">
              <div className="flex justify-between gap-16 ">
                <div className="flex gap-2 justify-center items-center">
                  <i>{el.icon}</i>
                  <Link href={el.link}>{el.name}</Link>
                </div>
                <div className="flex gap-4 lg:gap-8">
                  <p className="bg-bt-bg w-[30px] h-[30px] rounded-md flex justify-center items-center text-white">
                    g
                  </p>
                  <p className="bg-bt-bg p-2 w-[30px] h-[30px] rounded-md flex justify-center items-center text-white">
                    {el.route}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Modal;
