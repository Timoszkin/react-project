import React from "react";
import { useContext } from "react";
import "./Developer.css";
import telegramIcon from "../../images/TelegramLogo.png"
import { ThemeContext } from "../../context/ThemeProvider";

type DeveloperProp = {
  fullname: string;
  link: string;
};

function Developer({ fullname, link }: DeveloperProp) {
  const { theme } = useContext(ThemeContext);
  return (
    <li className="dev-list__item">
      <img
        className="developer_telegramLogo"
        src={telegramIcon}
        alt="telegramLogo"
      />
      <a
        target="_blank"
        className={theme === "light" ? "dev-list__link" : "dev-list__link_dark"}
        href={link}
        rel="noreferrer"
      >
        {fullname}
      </a>
    </li>
  );
}

export default Developer;
