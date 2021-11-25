import React from "react";

type DeveloperProp = {
  fullname: string;
  link: string;
};

function Developer({ fullname, link }: DeveloperProp) {
  return (
    <li>
      <span>{fullname}</span>
      <a href={link}>Telegram</a>
    </li>
  );
}

export default Developer;
