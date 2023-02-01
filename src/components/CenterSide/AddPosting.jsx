import React from "react";

import Avatar from "../Avatar";
import { MenuOutlined } from "@ant-design/icons";

const AddPosting = () => {
  return (
    <div className="flex items-center shadow-lg justify-between mb-5 p-3 rounded">
      <Avatar />
      <button className="rounded p-2 w-10/12 mx-2 sm:bg-gray-100 text-gray-800">
        Add a post
      </button>
      <MenuOutlined className="text-3xl flex items-center justify-center text-gray-600" />
    </div>
  );
};

export default AddPosting;
