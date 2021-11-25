import React from "react";
import "./DeveloperList.css";
import Developer from "../Developer/Developer";

type DeveloperListProp = {
  developers: Array<any>;
};

function DeveloperList({ developers }: DeveloperListProp) {
  const devs = developers.map((dev) => (
    <Developer fullname={dev.fullname} link={dev.link} />
  ));

  return <ul className="dev-list">{devs}</ul>;
}

export default DeveloperList;
