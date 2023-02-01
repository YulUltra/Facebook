import React from "react";

import Search from "./Search";
import Menu from "./Menu";
import Profile from "./Profile";

const Header = () => {
  return (
    <div className="px-4 py-2 flex items-center justify-between shadow ">
      <div className="w-1/4 flex items-center">
        <div className="mr-2">
          <img
            className="h-8 rounded-full"
            src="/copy_of_facebook/src/pictures/icons8-facebook.svg"
            alt="logo"
          />
        </div>
        <Search />
      </div>

      <div className="w-1/2">
        <Menu />
      </div>
      <div className="w-1/4">
        <Profile />
      </div>
    </div>
  );
};

export default Header;
