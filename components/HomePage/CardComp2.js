import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import Link from "next/link";
function CardComp2() {
  return (
    <div className="flex justify-center items-center lg:py-20 lg:px-10 px-4 py-4">
      <div className="bg-gray-900 flex flex-col-reverse lg:flex-row-reverse lg:w-9/12 w-full rounded-lg">
        <div className="flex flex-col justify-center w-full lg:w-3/5 gap-4 p-4 text-white">
          <h2 className="text-xl font-semibold">
            Stay On top of your trading game with out experts calls
          </h2>
          <p className="font-thin text-gray-300">
            subscribe to wealthTrust Capital trading advisory services and get{" "}
          </p>
          <Link href={"#"} className="text-accent">
            View Trading Packs
          </Link>
        </div>
        <div className="w-full lg:w-2/5 h-48">
          <div className="w-full h-full bg-[#2b2e35] rounded-l-lg">
            <img
              src="/HomePage/card_img.png"
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComp2;
