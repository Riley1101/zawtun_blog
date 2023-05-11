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
    <div className="bg-gray-800 sticky ">
      <div className="l-3.5 flex flex-col gap-4 text-white py-8 px-4 lg:w-3/5 lg:mx-auto rounded-md">
        <div className="flex flex-col leading-6 gap-4">
          <h2 className="text-3xl">All Posts</h2>
          <p className="-scroll-ml-3.5">
            I mainly working building UI, authorizations, payment integrations.
            I using React , Redux, NextJS , TypeScript.
          </p>
        </div>
        <div className=" flex bg-nav-bt p-2 rounded-md">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="search "
            className="w-full bg-nav-bt outline-none"
          />
          <Image src="/images/search.svg" alt="" width={25} height={25} />
        </div>
        <div className="flex overflow-x-auto gap-8 py-4 scrollbar ">
          <div
            onClick={() => handleFilterCategory("All")}
            className=" flex border-2 max-w-max p-2 rounded-full -scroll-ml-3.5 min-w-[100px] justify-center hover:border-bd-bg border-bt-bg bg-nav-bt text-gray-400 hover:text-bg-bd"
          >
            <span className=" cursor-pointer bg-clip-text bg-gradient-to-br text-transparent from-pink-400 to-sky-600 hover:text-bd-bg ">
              All
            </span>
          </div>
          {categories.map((el) => (
            <div
              onClick={() => handleFilterCategory(el.title)}
              key={el._id}
              className=" flex justify-center cursor-pointer border-2 hover:border-bd-bg border-bt-bg p-2 rounded-full -scroll-ml-3.5 min-w-[100px] bg-nav-bt hover:text-bd-bg"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600 hover:text-bd-bg">
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
