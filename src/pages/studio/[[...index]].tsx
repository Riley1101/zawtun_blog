import React from "react";
import { NextStudio } from "next-sanity/studio";

import sanityConfig from "../../studio/sanity.config";
type Props = {};

const StudioAdmin = (props: Props) => {
  return (
    <div>
      <NextStudio config={sanityConfig} />
    </div>
  );
};
export default StudioAdmin;
