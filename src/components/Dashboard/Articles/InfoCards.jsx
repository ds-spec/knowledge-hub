import React from "react";
import { FiBookmark } from "react-icons/fi";
import { FaRegFaceGrinBeam } from "react-icons/fa6";
import { BiMessageSquareDetail } from "react-icons/bi";

const InfoCards = ({ card }) => {
  return (
    <div className="w-92 h-92 flex flex-col bg-white rounded-xl p-3">
      <img src={card.image} className="w-full h-42 object-cover rounded-xl" />
      <div className="flex justify-between items-center mt-3">
        <div className="bg-[#F8E8FB] px-4 py-1 rounded-full">
          <h3 className="uppercase font-roboto-bold text-[#E355CC]">
            {card.tag}
          </h3>
        </div>
        <FiBookmark size={"1.6em"} />
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <h1 className="font-roboto-bold text-xl leading-none">{card.title}</h1>
        <h2 className="font-roboto-medium text-base leading-none text-[#C2C4CA]">
          {card.description}
        </h2>
        <div className="flex justify-between items-center">
          <h3 className="font-roboto-medium text-[#C2C4CA]">
            by{" "}
            <span className="font-roboto-medium text-black">{card.author}</span>
          </h3>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              <FaRegFaceGrinBeam size={"1.2em"} />
              <h3 className="font-roboto-medium">19</h3>
            </div>
            <div className="flex items-center gap-1">
              <BiMessageSquareDetail size={"1.2em"} />
              <h3 className="font-roboto-medium">14</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
