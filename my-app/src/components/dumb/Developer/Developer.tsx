import React from "react";
import "./Developer.css";

type DeveloperProp = {
  fullname: string;
  link: string;
};

function Developer({ fullname, link }: DeveloperProp) {
  return (
    <li className="dev-list__item">
      <span>{fullname}</span>
      <a className="dev-list__link" href={link}>
        Telegram
      </a>
    </li>
  );
}

export default Developer;
