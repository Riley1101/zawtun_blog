import React from "react";
import Pjcard from "./Pjcard";
import { ArticleProps } from "@/type";

type BlogsProps = {
  blogs: ArticleProps[];
};

const PjCardList = (props: BlogsProps) => {
  const { blogs } = props;

  return (
    <div className="bg-gray-800 ">
      <div className="flex flex-col gap-4 px-4 ">
        <div className="flex flex-col gap-4 text-white duration-500 rounded-md shadow-none cursor-pointe lg:w-3/5 lg:mx-auto lg:grid lg:grid-cols-3 animate-fade-in-up">
          {blogs.map((el) => (
            <Pjcard
              readingTime={el.readingTime}
              key={el._id}
              slug={el.slug}
              title={el.title}
              body={el.body}
              author={el.author}
              _id={el._id}
              _type={el._type}
              description={el.description}
              categories={el.categories}
              mainImage={el.mainImage}
              publishedAt={el.publishedAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default PjCardList;
