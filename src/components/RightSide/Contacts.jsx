import React from "react";

import { MenuOutlined } from "@ant-design/icons";

const menu = [
  { img: "/copy_of_facebook/src/pictures/Maria Mann.jpg", title: "Maria Mann" },
  {
    img: "/copy_of_facebook/src/pictures/John Carter.jpg",
    title: "John Carter",
  },
  {
    img: "/copy_of_facebook/src/pictures/Melinda Sally.jpg",
    title: "Melinda Sally",
  },
];

const Contacts = () => {
  return (
    <div className="shadow-lg p-4 w-1/4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold">Contacts</h2>
        <MenuOutlined className="text-gray-600 text-lg " />
      </div>
      <ul className="list-none">
        {menu.map((item, index) => (
          <li key={"menu " + index}>
            <a href="/" className="flex items-center py-2">
              <div className="h-9 w-9 mr-2 rounded-full overflow-hidden">
                <img src={item.img} alt="" />
              </div>
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
