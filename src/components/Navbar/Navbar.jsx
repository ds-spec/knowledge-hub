import React from "react";
import NavComponents from "./NavComponents";
import { IoAddOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-52 bg-white h-screen px-5 py-8">
      <div className="flex flex-col gap-10">
        <h1 className="font-roboto-bold text-lg w-20">KNOWLEDGE CLOUD</h1>
        <button className="flex gap-5 items-center bg-black font-roboto-regular text-white text-sm px-6 py-3 rounded-lg tracking-wide cursor-pointer">
          <IoAddOutline size={"1.2em"} />
          Add article
        </button>
      </div>
      <NavComponents />
    </div>
  );
};

export default Navbar;
