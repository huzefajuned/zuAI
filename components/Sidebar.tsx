import Image, { StaticImageData } from "next/image";
import React from "react";
import logo from "../app/icons/logo.svg";
import bookIcon from "../app/icons/book_4.svg";
import dashboardIcon from "../app/icons/dashboard.svg";
import copyIcon from "../app/icons/file_copy.svg";
import quizIcon from "../app/icons/quiz.svg";
import userIcon from "../app/icons/user.svg";

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
  return (
    <div
      className="flex flex-col justify-between items-center w-14 size-full p-2  rounded-xl bg-white
    "
    >
      {/* Logo */}
      <div className=" flex  flex-col gap-4">
        <Image priority src={logo} alt="logo" width={60} height={60} />

        {/* Navigation Links */}
        <nav className="flex flex-col items-center space-y-5  w-full ">
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
      <div className="mb-8">
        <Image priority src={userIcon} alt="userIcon" width={48} height={48} />
      </div>
    </div>
  );
};

export default Sidebar;
