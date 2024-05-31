// Desc: Sidebar component for the protected layout
// Usage: <Sidebar />

"use client";

import { RiDashboard2Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { TbChecklist } from "react-icons/tb";
import { AiOutlineCheck } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";
import Link from "next/link";
import Footer from "./footer";
import {
  MdArrowCircleLeft,
  MdArrowCircleRight,
  MdSupervisedUserCircle,
} from "react-icons/md";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const menuList = [
  {
    title: "Pages",
    list: [
      {
        title: "dashboard",
        icon: <RiDashboard2Line />,
        path: "/dashboard",
      },
      {
        title: "elections",
        icon: <TbChecklist />,
        path: "/elections",
      },
      {
        title: "voters",
        icon: <AiOutlineUser />,
        path: "/voters",
      },
      {
        title: "ballots",
        icon: <TbChecklist />,
        path: "/ballots",
      },
      {
        title: "candidates",
        icon: <FaUsers />,
        path: "/candidates",
      },
      {
        title: "questions",
        icon: <BsFillQuestionSquareFill />,
        path: "/questions",
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "results",
        icon: <AiOutlineCheck />,
        path: "/results",
      },
      {
        title: "reports",
        icon: <AiOutlineFileText />,
        path: "/reports",
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "profile",
        icon: <AiOutlineUser />,
        path: "/profile",
      },
      {
        title: "settings",
        icon: <AiOutlineSetting />,
        path: "/settings",
      },
      {
        title: "logout",
        icon: <AiOutlineLogout className="rotate-180" />,
        path: "/logout",
      },
    ],
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const pathname = usePathname();
  const itme = pathname.split("/").pop();

  return (
    <div className="sticky top-0 h-screen">
      <div className="flex items-center justify-center">
        <div className={isOpen ? "flex ml-10 mr-5" : ""}>
          <MdSupervisedUserCircle size={isOpen ? 60 : 40} />
        </div>
        <div className={isOpen ? "flex flex-col" : "hidden"}>
          <span className="text-sm">Shawn Harrington</span>
          <span className="text-xs text-textSoft">Administrator</span>
        </div>
      </div>
      <hr className={`${isOpen ? "mt-5" : "mt-10"} border`} />
      <div
        className="flex items-center justify-center mt-5 cursor-pointer hover:bg-white hover:rounded-md hover:text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-lg">
          <span>{isOpen ? <MdArrowCircleLeft /> : <MdArrowCircleRight />}</span>
        </div>
      </div>
      <ul>
        {menuList.map((menu, index) => {
          return (
            <li key={index} className="mt-10">
              <div
                className={
                  isOpen
                    ? "mb-2 text-sm font-bold text-textSoft"
                    : "mb-2 text-sm font-bold text-textSoft"
                }
              >
                {isOpen ? menu.title : menu.title}
              </div>
              <ul
                className={`${
                  isOpen ? "" : "items-center gap-4"
                } flex flex-col gap-4 transition-all duration-300`}
              >
                {menu.list.map((item, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="w-full">
                            <Link
                              href={item.path}
                              className={`hover:bg-white hover:rounded-md hover:text-black flex gap-4 items-center px-2 py-1 w-full text-lg ${
                                itme === item.title
                                  ? "bg-white rounded-md text-black"
                                  : ""
                              }`}
                            >
                              <div className="">{item.icon}</div>
                              <div className={isOpen ? "capitalize" : "hidden"}>
                                {item.title}
                              </div>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{item.title}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
      <div className="md:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Sidebar;
