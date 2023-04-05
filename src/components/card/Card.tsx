import React from "react";

type Props = {};

const Card = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-4 border-2 border-bt-bg p-4 rounded-md ">
        <h3>Stytem-Design</h3>
        <h2>
          Exploring HTTP/2 Server Push: An Efficient Way to Speed Up Your Web
          Applications
        </h2>
        <p>
          HTTP/2 is the second major version of the HTTP protocol used by the
          World Wide Web. It is the successor of the HTTP/1.x protocol, which
          has been in use for over a decade.
        </p>

        <div className="flex py-4">
          <p>April 3,2023</p>
          <p>2 min read</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
