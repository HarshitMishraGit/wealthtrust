import React from "react";
import { FaSuitcase, FaPhoneVolume, FaTools } from "react-icons/fa";
import { AiFillSetting, AiFillFund } from "react-icons/ai";
function CardComp(props) {
  const { title, IconComponentNo, className } = props;
  return (
    <div
      className={`md:w-48 h-48 bg-white  relative shadow-sm shadow-gray-400 flex flex-col duration-500 transition-all justify-center items-center text-action-900 cursor-pointer group z-10 -mt-24 overflow-hidden ${className}`}
    >
      <div className="bg-action-900 absolute top-0 w-full h-full -z-10 -translate-x-96 group-hover:translate-x-0 duration-500 "></div>
      <div className="h-1/2 flex flex-row justify-center items-center">
        {IconComponentNo === "1" && (
          <FaPhoneVolume
            className="text-9xl  duration-500 group-hover:text-main  transition-all group-hover:[transform:rotateY(360deg)]"
            size={35}
          />
        )}
        {IconComponentNo === "2" && (
          <FaSuitcase
            className="text-9xl  duration-500 group-hover:text-main  transition-all group-hover:[transform:rotateY(360deg)]"
            size={35}
          />
        )}
        {IconComponentNo === "3" && (
          <FaTools
            className="text-9xl  duration-500 group-hover:text-main  transition-all group-hover:[transform:rotateY(360deg)]"
            size={35}
          />
        )}
        {IconComponentNo === "4" && (
          <AiFillSetting
            className="text-9xl  duration-500 group-hover:text-main  transition-all group-hover:[transform:rotateY(360deg)]"
            size={35}
          />
        )}
        {IconComponentNo === "5" && (
          <AiFillFund
            className="text-9xl  duration-500 group-hover:text-main  transition-all group-hover:[transform:rotateY(360deg)]"
            size={35}
          />
        )}
      </div>

      <div className="h-1/2 flex flex-row justify-center ">
        <span className="transition-colors duration-500 group-hover:text-main text-xl font-semibold text-center p-3">
          {title}
        </span>
      </div>
    </div>
  );
}

export default CardComp;
