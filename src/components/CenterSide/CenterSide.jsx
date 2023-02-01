import React from "react";

import AddPosting from "./AddPosting";
import Post from "./Post";

const CenterSide = () => {
  return (
    <div className="w-1/2 mt-10">
      <AddPosting />
      <Post />
    </div>
  );
};

export default CenterSide;
