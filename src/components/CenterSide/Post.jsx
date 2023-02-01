import React from "react";

import Avatar from "../Avatar";
import { MenuOutlined } from "@ant-design/icons";

const Post = () => {
  return (
    <div className="shadow-lg rounded">
      <div className="p-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Avatar />
            <div className="ml-2">
              <div className="text-gray-800 text-sm font-medium">Tom Russo</div>
              <div className="text-xs">1 D</div>
            </div>
          </div>
          <MenuOutlined className="text-gray-600 text-lg" />
        </div>
        <div className="mt-4 mb-2">The road to the mountains</div>
      </div>
      <img
        src="/copy_of_facebook/src/pictures/326995353_509061071377722_729185756424895552_n.jpg"
        alt=" "
      />
    </div>
  );
};

export default Post;
