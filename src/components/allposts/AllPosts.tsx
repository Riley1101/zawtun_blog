import Image from "next/image";

import type { Category } from "@/type";

type Props = {
  categories: Category[];
  handleSearch: (e: any) => void;
  handleFilterCategory: (name: string) => void;
};

const AllPosts = (props: Props) => {
  const { categories, handleSearch, handleFilterCategory } = props;
  return (
    <div className="sticky bg-gray-800 ">
      <div className="l-3.5 flex flex-col gap-4 text-white py-8 px-2 lg:w-3/5 lg:mx-auto rounded-md">
        <div className="flex flex-col gap-4 leading-6">
          <h2 className="text-3xl">All Posts</h2>
          <p className="-scroll-ml-3.5">
            I mainly building UI, authorizations, payment integrations. I using
            React , Redux, NextJS , TypeScript.
          </p>
        </div>
        <div className="flex p-2 rounded-md bg-nav-bt">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="search "
            className="w-full outline-none bg-nav-bt"
          />
          <Image src="/images/search.svg" alt="" width={25} height={25} />
        </div>
        <div className="flex gap-4 pt-2 overflow-x-auto scrollbar ">
          <div
            onClick={() => handleFilterCategory("All")}
            className=" flex items-center border max-w-max rounded-full -scroll-ml-3.5 px-4 justify-center hover:border-bd-bg border-bt-bg bg-nav-bt text-gray-400 hover:text-bg-bd"
          >
            <span className="text-transparent cursor-pointer bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600 hover:text-bd-bg">
              All
            </span>
          </div>
          {categories.map((el) => (
            <div
              onClick={() => handleFilterCategory(el.title)}
              key={el._id}
              className=" flex py-2 justify-center items-center cursor-pointer border hover:border-bd-bg border-bt-bg rounded-full -scroll-ml-3.5 px-4 bg-nav-bt hover:text-bd-bg"
            >
              <span className="text-sm text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600 hover:text-bd-bg">
                {el.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AllPosts;
