import React from "react";

type Props = {};

const Gradient = (props: Props) => {
  return (
    <>
      <div className="w-[320px] h-[350px] aspect-video absolute right-20 -top-30  bg-gradient-to-br from-pink-400 to-sky-600 rounded-full blur-2xl opacity-30"></div>
    </>
  );
};

export default Gradient;
