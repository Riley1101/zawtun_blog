import React from "react";
import Card from "./Card";

type Props = {};

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const CardList = (props: Props) => {
  return (
    <div className="bg-bg">
      <div className="flex flex-col p-4 gap-4  ">
        <div
          className=" text-white shadow-none 
          cursor-pointer flex flex-col gap-4 lg:w-3/5 lg:mx-auto lg:grid lg:grid-cols-3 rounded-md animate-fade-in-up duration-500"
        >
          {list.map((el) => (
            <Card key={el} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CardList;
