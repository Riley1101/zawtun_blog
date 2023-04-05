import Image from "next/image";
import Link from "next/link";
import React from "react";

const lists = [1, 2, 3, 4, 5, 6, 7, 8];
type Props = {};

const AllPosts = (props: Props) => {
  return (
    <div className="bg-bg">
      <div className="flex flex-col gap-4 bg-bg text-white py-8 px-4 lg:w-3/5 lg:mx-auto">
        <div className="flex flex-col leading-6 gap-4">
          <h2 className="text-3xl">All Posts</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            iure doloremque dicta laboriosam omnis labore quam ea sint, ut nemo?
            Incidunt explicabo cum velit, laudantium praesentium labore deserunt
            eos vel.
          </p>
        </div>
        <div className=" flex bg-nav-bt p-2 rounded-md">
          <input
            type="text"
            placeholder="search "
            className="w-full bg-nav-bt outline-none"
          />
          <Image src="/images/search.svg" alt="" width={25} height={25} />
        </div>
        <div className="flex overflow-x-auto gap-8 py-4 scrollbar">
          {lists.map((el) => (
            <div
              key={el}
              className=" border-2 border-bt-bg max-w-max p-2 rounded-full -scroll-ml-3.5"
            >
              <Link href="/">snippets</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AllPosts;
