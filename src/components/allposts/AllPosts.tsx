import Image from "next/image";
import Link from "next/link";

import type { Category, ArticleProps } from "@/type";

type Props = {
  categories: Category[];
  handleSearch: (e: any) => void;
  handleFilterCategory: (name: string) => void;
};

const AllPosts = (props: Props) => {
  const { categories, handleSearch, handleFilterCategory } = props;
  return (
    <div className="bg-gradient-to-r from-gray-500 via-black to-gray-500 sticky ">
      <div className="flex flex-col gap-4 text-white py-8 px-4 lg:w-3/5 lg:mx-auto rounded-md">
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
            onChange={handleSearch}
            type="text"
            placeholder="search "
            className="w-full bg-nav-bt outline-none"
          />
          <Image src="/images/search.svg" alt="" width={25} height={25} />
        </div>
        <div className="flex overflow-x-auto gap-8 py-4 scrollbar">
          <div
            onClick={() => handleFilterCategory("All")}
            className=" border-2 border-bt-bg max-w-max p-2 rounded-full -scroll-ml-3.5"
          >
            <span className=" cursor-pointer">All</span>
          </div>
          {categories.map((el) => (
            <div
              onClick={() => handleFilterCategory(el.title)}
              key={el._id}
              className="  cursor-pointer border-2 border-bt-bg max-w-max p-2 rounded-full -scroll-ml-3.5"
            >
              <span>{el.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AllPosts;

// export async function getStaticProps() {
//   const data = await sanityClient.fetch(query);
//   console.log(data);
//   return {
//     props: {
//       ...data,
//     },
//   };
// }
