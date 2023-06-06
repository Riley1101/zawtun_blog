import React from "react";

type Props = { title: string };

const Title = (props: Props) => {
  return (
    <div className="pt-6 pb-4 bg-gray-800">
      <div className="w-full p-2 mx-auto bg-gray-800 lg:w-3/5">
        <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-sky-600 hover:text-bd-bg">
          {props.title}
        </span>
      </div>
    </div>
  );
};

export default Title;
