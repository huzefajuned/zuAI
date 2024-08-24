import React from "react";
import zuIcon from "../app/icons/zuIcon.svg";
import fireIcon from "../app/icons/fireIcon.svg";
import calenderIcon from "../app/icons/calenderIcon.svg";
import noteIcon from "../app/icons/noteIcon.svg";
import Image, { StaticImageData } from "next/image";

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
  { id: 1, title: "120", icon: zuIcon },
  { id: 2, title: "24", icon: fireIcon },
  { id: 3, title: "", icon: calenderIcon },
  { id: 4, title: "", icon: noteIcon },
];

const RightBar = () => {
  return (
    <div className="flex flex-col items-center space-y-5  w-full ">
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={`#${link.title.toLowerCase()}`}
          className="flex flex-row items-center  text-white hover:text-blue-500 transition duration-300 bg-white  rounded-full p-3 justify-center"
        >
          <Image
            src={link.icon}
            alt={`${link.title} icon`}
            width={20}
            height={20}
          />
          <span className="text-black text-sm font-bold">{link.title}</span>
        </a>
      ))}
    </div>
  );
};

export default RightBar;
