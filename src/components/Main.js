import React from "react";
import { Link } from "react-router-dom";
import mainStyles from "./main.module.css";
import { ReactComponent as BangSvg } from "../svg/bang.svg";
import NoteSvg from "../svg/note.svg";

export default function Main() {
  return (
    <div className={mainStyles.mainBox}>
      <BangSvg className={mainStyles.bangSvg} />
      <img alt="notesvg" src={NoteSvg} className={mainStyles.noteSvg} />
      <h2 className={mainStyles.header}>Welcome to Birthday notes!</h2>
      <button className={mainStyles.viewBtn}>
        <Link to="/read">View All </Link>
      </button>
      <button className={mainStyles.addBtn}>
        <Link to="/create">Add New </Link>
      </button>{" "}
    </div>
  );
}
