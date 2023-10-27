import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-primary w-full h-[10vh] flex justify-center">
      <a href={"https://github.com/inamnurulf"}>
        <AiOutlineGithub className="mx-1 hover:text-white text-2xl text-slate-300 pointer" />
      </a>
      <a href={"https://www.instagram.com/inamnurul/"}>
        <AiOutlineInstagram className="mx-1 hover:text-white text-2xl text-slate-300 pointer" />
      </a>
      <a href={"https://www.linkedin.com/in/inamnurul/"}>
        <AiOutlineLinkedin className="mx-1 hover:text-white text-2xl text-slate-300 pointer" />
      </a>
    </div>
  );
};

export default Footer;
