import React from "react";
import styles from "./LeftSide.module.css";

const copy = [
  "Privacy",
  "Terms",
  "Advertising",
  "Ad Choices",
  "Cookies",
  "More",
  "Facebook © 2023",
];

const Copyrights = () => {
  return (
    <div className={styles.copy}>
      <ul className="list-none">
        {copy.map((text) => (
          <li key={`copy ${text}`} className="inline-block mr-3">
            <a href="/" className="text-gray-500 text-xs">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Copyrights;
