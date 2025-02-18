import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";

const SearchHeader = () => {
  return (
    <div className="flex justify-between items-center gap-[10vw] border-b-1 w-full h-24 border-[#ECEDF1] px-11 py-7">
      <div className="flex items-center gap-5">
        <div className="relative search-box">
          <span className="absolute top-[1.3vw] left-4">
            <FiSearch />
          </span>
          <input
            className="rounded-full bg-white text-black text-sm min-w-2xl px-10 py-4.5 outline-none font-roboto-regular placeholder: tracking-wide placeholder:text-gray-300"
            placeholder="Search article"
          />
        </div>
        <div className="notification rounded-full bg-white p-4 cursor-pointer">
          <IoNotificationsOutline size={"1.2em"} />
        </div>
      </div>
      <div className="profile flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-12 h-12 rounded-full object-cover object-top-center"
        />
        <h3 className="font-roboto-medium">Yana Ollinuk</h3>
      </div>
    </div>
  );
};

export default SearchHeader;
