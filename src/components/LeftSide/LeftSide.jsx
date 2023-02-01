import React from "react";
import Copyrights from "./Copyright";

const menu = [
  {
    img: "/copy_of_facebook/src/pictures/icons/findFriends.png",
    title: "Find friends",
  },
  {
    img: "/copy_of_facebook/src/pictures/icons/mostRecent.png",
    title: "Most Recent",
  },
  {
    img: "/copy_of_facebook/src/pictures/icons/groups.png",
    title: "Groups",
  },
  {
    img: "/copy_of_facebook/src/pictures/icons/marketplace.png",
    title: "Marketplace",
  },
  {
    img: "/copy_of_facebook/src/pictures/icons/watch.png",
    title: "Watch",
  },
  {
    img: "/copy_of_facebook/src/pictures/icons/memories.png",
    title: "Memories",
  },
  {
    img: "/copy_of_facebook/src/pictures/icons/saved.png",
    title: "Saved",
  },
  {
    img: "/copy_of_facebook/src/pictures/icons/reels.png",
    title: "Reels",
  },
  {
    img: "/copy_of_facebook/src/pictures/icons/events.png",
    title: "Events",
  },
];

const LeftSide = () => {
  return (
    <div className="shadow-lg p-4 w-1/4 h-screen">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold">Home</h2>
        <a href="/" className="text-blue-400">
          Create
        </a>
      </div>
      <ul className="list-none">
        {menu.map((item, index) => (
          <li key={"menu " + index}>
            <a href="/" className="flex items-center py-2">
              <img src={item.img} alt="" className="h-9 w-9 mr-2" />
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
      <Copyrights />
    </div>
  );
};

export default LeftSide;
