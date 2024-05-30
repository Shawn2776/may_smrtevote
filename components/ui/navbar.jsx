import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  MdClose,
  MdMenu,
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();
  return (
    <nav className="flex flex-col w-full bg-bgSoft">
      <div className="p-3 rounded-lg flex justify-between items-center w-full">
        <div className="text-textSoft font-bold capitalize flex gap-2 items-center">
          <div className="md:hidden" onClick={handleClick}>
            {isOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
          </div>{" "}
          <div>{pathname.split("/").pop()}</div>
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-3 bg-bgHover p-1 rounded-lg">
            <MdSearch />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-text"
            />
          </div>
          <div className="flex gap-5">
            <MdOutlineChat size={20} />
            <MdNotifications size={20} />
            <MdPublic size={20} />
          </div>
        </div>
      </div>
      <div className={isOpen ? "relative" : "hidden"}>
        <MobileSidebar />
      </div>
    </nav>
  );
};

export default Navbar;
