import React from "react";
import Card from "./Card";
import { ArticleProps } from "@/type";

type BlogsProps = {
  blogs: ArticleProps[];
};

const CardList = (props: BlogsProps) => {
  const { blogs } = props;

  return (
    <div className="bg-gradient-to-r from-gray-500 via-black to-gray-500 ">
      <div className="flex flex-col p-4 gap-4  ">
        <div
          className="text-white shadow-none 
          cursor-pointer flex flex-col gap-4 lg:w-3/5 lg:mx-auto lg:grid lg:grid-cols-3 rounded-md animate-fade-in-up duration-500"
        >
          {blogs.map((el) => (
            <Card
              key={el._id}
              slug={el.slug}
              title={el.title}
              body={el.body}
              author={el.author}
              _id={el._id}
              _type={el._type}
              description={el.description}
              categories={el.categories}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CardList;
