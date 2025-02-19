import React from "react";
import { GrAppsRounded } from "react-icons/gr";
import { FaBarsProgress } from "react-icons/fa6";
import { BsWindowStack } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavComponents = () => {
  const iconsDiv = [
    {
      title: "Dashboard",
      icon: <GrAppsRounded size={"1.2em"} />,
      to: "dashboard",
    },
    {
      title: "Catalogues",
      icon: <FaBarsProgress size={"1.2em"} />,
      to: "catalogue",
    },
    {
      title: "Articles",
      icon: <BsWindowStack size={"1.2em"} />,
      to: "articles",
    },
    {
      title: "My favourites",
      icon: <FaRegHeart size={"1.2em"} />,
      to: "favourites",
    },
  ];
  return (
    <div className="mt-14 flex flex-col gap-5">
      {iconsDiv.map((item, index) => (
        <Link
          to={item?.to}
          key={index}
          className="flex gap-5 items-center bg-transparent hover:bg-[#F5F6FB] font-roboto-regular text-black text-sm min-w-[170px] px-5 py-4 rounded-lg tracking-wide cursor-pointer"
        >
          {item.icon} {item.title}
        </Link>
      ))}
    </div>
  );
};

export default NavComponents;
