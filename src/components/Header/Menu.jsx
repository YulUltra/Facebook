import React from "react";

import {
  HomeOutlined,
  TeamOutlined,
  PlaySquareOutlined,
  ShopOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

import styles from "./Header.module.css";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <ul className="list-none grid grid-cols-7 gap-2 text-center">
        <li className={styles["active"]}>
          <a className="pb-2" href="/">
            <HomeOutlined className="text-3xl" />
          </a>
        </li>
        <li>
          <a className="pb-2" href="/">
            <TeamOutlined className="text-3xl" />
          </a>
        </li>
        <li>
          <a className="pb-2" href="/">
            <PlaySquareOutlined className="text-3xl" />
          </a>
        </li>
        <li>
          <a className="pb-2" href="/">
            <ShopOutlined className="text-3xl" />
          </a>
        </li>
        <li>
          <a className="pb-2" href="/">
            <TrophyOutlined className="text-3xl" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
