import React, { useState, useEffect } from "react";
import ServicesComp from "./ServicesComp";
import Link from "next/link";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
function ServiceCompParent() {
  const [itemNumber, setItemNumber] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(0);

  return (
    <div className=" py-10 relative bg-primary px-3 " id="Services">
      <div className="Content mx-auto overflow-x-hidden lg:px-36  lg:py-0">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-bold  text-white">
            What We Offer:
          </h2>
          <p className="text-gray-200 sm:text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            ullam dolorum non libero eius, molestias accusantium alias dicta
            veniam delectus?
          </p>
        </div>
        <div className="flex flex-row gap-4 ">
          <div className="flex flex-col lg:w-1/3 w-full gap-2">
            <div
              className={`menuItems select-none   cursor-pointer flex justify-between ${
                itemNumber === 0
                  ? "     bg-secondary text-white"
                  : " text-white "
              } p-5 hover:bg-secondary hover:text-white`}
              onClick={() => {
                setItemNumber(0);
              }}
            >
              <div className="flex gap-2">Equity Research</div>
              <span
                onClick={() =>
                  setShowMobileMenu((prevState) => (prevState === 0 ? 1 : 0))
                }
                className="cursor-pointer lg:hidden block select-none"
              >
                {showMobileMenu === 1 ? "-" : "+"}
              </span>
            </div>
            <div
              className={`itemMenu1 sele lg:hidden overflow-hidden transition-all duration-700 ease-in-out ${
                showMobileMenu === 1 ? "max-h-full py-10 px-2" : "max-h-0"
              }`}
            >
              {showMobileMenu != 0 && (
                <ServicesComp itemNumber={showMobileMenu - 1} />
              )}
            </div>
            <div
              className={`menuItems select-none   cursor-pointer flex justify-between ${
                itemNumber === 1
                  ? "     bg-secondary text-white"
                  : " text-white "
              } p-5 hover:bg-secondary hover:text-white`}
              onClick={() => {
                setItemNumber(1);
              }}
            >
              <div className="flex gap-2">Portfolio Management</div>
              <span
                onClick={() =>
                  setShowMobileMenu((prevState) => (prevState === 0 ? 2 : 0))
                }
                className="cursor-pointer lg:hidden block select-none"
              >
                {showMobileMenu === 2 ? "-" : "+"}
              </span>
            </div>
            <div
              className={`itemMenu1 sele lg:hidden overflow-hidden transition-all duration-700 ease-in-out ${
                showMobileMenu === 2 ? "max-h-full py-10 px-2" : "max-h-0"
              }`}
            >
              {showMobileMenu != 0 && (
                <ServicesComp itemNumber={showMobileMenu - 1} />
              )}
            </div>
            <div
              className={`menuItems select-none   cursor-pointer flex justify-between  ${
                itemNumber === 2
                  ? "     bg-secondary text-white"
                  : " text-white "
              } p-5 hover:bg-secondary hover:text-white`}
              onClick={() => {
                setItemNumber(2);
              }}
            >
              <div className="flex gap-2">Mutual Funds</div>
              <span
                onClick={() =>
                  setShowMobileMenu((prevState) => (prevState === 0 ? 3 : 0))
                }
                className="cursor-pointer lg:hidden block select-none"
              >
                {showMobileMenu === 3 ? "-" : "+"}
              </span>
            </div>
            <div
              className={`itemMenu1 sele lg:hidden overflow-hidden transition-all duration-700 ease-in-out ${
                showMobileMenu === 3 ? "max-h-full py-10 px-2" : "max-h-0"
              }`}
            >
              {showMobileMenu != 0 && (
                <ServicesComp itemNumber={showMobileMenu - 1} />
              )}
            </div>
            <div
              className={`menuItems select-none   cursor-pointer flex justify-between  ${
                itemNumber === 3
                  ? "     bg-secondary text-white"
                  : " text-white "
              } p-5 hover:bg-secondary hover:text-white`}
              onClick={() => {
                setItemNumber(3);
              }}
            >
              <div className="flex gap-2">
                Tax planning / insurance planning
              </div>
              <span
                onClick={() =>
                  setShowMobileMenu((prevState) => (prevState === 0 ? 4 : 0))
                }
                className="cursor-pointer lg:hidden block select-none"
              >
                {showMobileMenu === 4 ? "-" : "+"}
              </span>
            </div>
            <div
              className={`itemMenu1 sele lg:hidden overflow-hidden transition-all duration-700 ease-in-out ${
                showMobileMenu === 4 ? "max-h-full py-10 px-2" : "max-h-0"
              }`}
            >
              {showMobileMenu != 0 && (
                <ServicesComp itemNumber={showMobileMenu - 1} />
              )}
            </div>
          </div>
          <div className="w-2/3 text-center lg:block hidden overflow-hidden p-6">
            <ServicesComp itemNumber={itemNumber} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCompParent;
