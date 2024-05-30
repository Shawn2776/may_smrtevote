import React from "react";
import { MdFacebook, MdOutlineLegendToggle } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="flex justify-between w-full md:flex-row flex-col">
      <div className="md:ml-20 text-xs text-textSoft flex-wrap">
        Copyright 2024 SMRTeVote All Rights Reserved
      </div>
      <div className="md:mr-20 flex items-center justify-center gap-4 pt:4 md:pt-0">
        <MdFacebook />
        <RiTwitterXLine />
        <IoLogoInstagram />
      </div>
    </div>
  );
};

export default Footer;
