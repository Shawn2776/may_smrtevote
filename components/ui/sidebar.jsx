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
import { MdSupervisedUserCircle } from "react-icons/md";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const itme = pathname.split("/").pop();
  console.log(itme);

  return (
    <div className="sticky top-0 w-full">
      <div className="flex items-center justify-center">
        <div className="ml-10 mr-5 flex">
          <MdSupervisedUserCircle size={60} />
        </div>
        <div className="flex flex-col w-full">
          <span className="text-sm">Shawn Harrington</span>
          <span className="text-xs text-textSoft">Administrator</span>
        </div>
      </div>
      <hr className="border mt-5" />
      <ul>
        {menuList.map((menu, index) => {
          return (
            <li key={index} className="mt-10">
              <div className="text-sm text-textSoft font-bold">
                {menu.title}
              </div>
              <ul className="flex flex-col gap-4 ml-4">
                {menu.list.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={item.path}
                        className={`hover:bg-white hover:rounded-md hover:text-black flex items-center px-2 py-1 w-full text-lg gap-1 ${
                          itme === item.title
                            ? "bg-white rounded-md text-black"
                            : ""
                        }`}
                      >
                        <div className="">{item.icon}</div>
                        <div className="capitalize">{item.title}</div>
                      </Link>
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
