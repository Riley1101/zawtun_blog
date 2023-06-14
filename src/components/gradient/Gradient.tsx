import React from "react";

type Props = {};

const Gradient = (props: Props) => {
  return (
    <>
      <div className="w-[420px] h-[250px] aspect-video absolute right-20 top-20 bg-gradient-to-br from-pink-400 to-sky-600 rounded-full blur-2xl opacity-30"></div>
    </>
  );
};

export default Gradient;
