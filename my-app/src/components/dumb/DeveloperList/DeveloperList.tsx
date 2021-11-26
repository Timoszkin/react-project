import React from "react";
import "./DeveloperList.css";
import Developer from "../Developer/Developer";

type DeveloperType = { fullname: string; link: string };

type DeveloperListProp = {
  developers: Array<DeveloperType>;
};

function DeveloperList({ developers }: DeveloperListProp) {
  const devs = developers.map((dev) => (
    <Developer key={dev.fullname} fullname={dev.fullname} link={dev.link} />
  ));

  return <ul className="dev-list">{devs}</ul>;
}

export default DeveloperList;