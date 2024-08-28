"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import logo from "../app/icons/logo.svg";
import bookIcon from "../app/icons/book_4.svg";
import dashboardIcon from "../app/icons/dashboard.svg";
import copyIcon from "../app/icons/file_copy.svg";
import quizIcon from "../app/icons/quiz.svg";
import userIcon from "../app/icons/user.svg";
import menu from "../app/icons/menu.svg";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const notify = () => toast('Here is your toast.');


/**
 * Sidebar navLinks interface
 */
interface NavLink {
  id: number;
  title: string;
  icon: StaticImageData;
}

/**
 * Sidebar Navlinks
 */
const navLinks: NavLink[] = [
  { id: 1, title: "Dashboard", icon: dashboardIcon },
  { id: 2, title: "Book", icon: bookIcon },
  { id: 3, title: "Copy", icon: copyIcon },
  { id: 4, title: "Quiz", icon: quizIcon },
];

const Sidebar: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:w-14 size-full  rounded-none  sm:rounded-xl bg-white sm:h-[98vh] h-10 m-0 sm:m-2">
      {/* Logo */}
      <div className=" flex  flex-row justify-between p-2 w-full sm:flex-col gap-4">
        <Image
          priority
          src={logo}
          alt="logo"
          width={30}
          height={30}
          className="h-7sm:w-full w-12"
          onClick={() => router.push("/")}
        />
        <Image
          priority
          src={menu}
          alt="menu"
          width={25}
          height={25}
          className="flex sm:hidden"
        />

        {/* Navigation Links */}
        <nav className="sm:flex flex-col hidden items-center space-y-5  w-full ">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.title.toLowerCase()}`}
              className="flex items-center space-x-2 text-white hover:text-blue-500 transition duration-300"
            >
              <Image
                src={link.icon}
                alt={`${link.title} icon`}
                width={24}
                height={24}
              />
            </a>
          ))}
        </nav>
      </div>

      {/* user icon */}
      <div className="mb-8 sm:flex hidden">
        <Image priority src={userIcon} alt="userIcon" width={48} height={48} onClick={notify} />
      </div>
    </div>
  );
};

export default Sidebar;
