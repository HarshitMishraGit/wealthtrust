import React, { useState, useEffect } from "react";
import ServicesComp from "./ServicesComp";
import Link from "next/link";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
function ServiceCompParent() {
  const [itemNumber, setItemNumber] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(0);

  return (
    <div className=" py-10 relative bg-lightGreen px-3 " id="Services">
      <div className="Content mx-auto overflow-x-hidden lg:px-36  lg:py-0">
        <div className="max-w-screen-xl mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-center ">
            What We Offer
          </h2>
          <div className="w-full mx-auto">
            <p className=" sm:text-md text-center">
              At WealthTrust Capital Services, we provide a comprehensive suite
              of financial services tailored to meet your unique needs. From
              strategic investment planning and portfolio management to wealth
              preservation strategies, our experienced team is dedicated to
              optimizing your financial success. Explore a partnership with us
              for personalized solutions that pave the way for your financial
              growth and security.
            </p>
          </div>
        </div>
        {/* <div className="flex flex-row gap-4 ">
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
              <div className="flex gap-2">Investment Research</div>
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
              <div className="flex gap-2">Equity Solutions</div>
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
          <div className="w-2/3 text-center lg:block hidden overflow-hidden ">
            <ServicesComp itemNumber={itemNumber} />
          </div>
        </div> */}
        <div className="sm:grid  sm:grid-cols-2 flex flex-col gap-6 justify-center items-center overflow-hidden lg:p-5  ">
          <div className="card flex  flex-col gap-2  p-4 hover:scale-105 shadow-lightGreen h-full items-center">
            <div className="w-56 h-56 flex flex-row justify-center items-center object-contain">
              <img
                loading="lazy"
                src="/HomePage/Services/ir.png"
                alt="investment research"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="lg-w-1/2 w-full flex flex-col gap-1 justify-center items-start">
              <h2 className="font-bold text-xl">Investment Research</h2>
              <p>
                Investment research is the systematic analysis of stocks and
                financial instruments to provide valuable insights for
                investment decisions. At Wealth Trust Capital, our experienced
                team conducts thorough equity research, offering in-depth
                analyses and recommendations to empower you with the knowledge
                needed to make informed investment choices and navigate the
                dynamic stock market landscape effectively.{" "}
                <Link href={"/equity"} className="underline text-blue-600">
                  Read more...
                </Link>
              </p>
            </div>
          </div>
          <div className="card flex  flex-col gap-2  p-4 hover:scale-105 shadow-lightGreen h-full items-center">
            <div className="w-56 h-56 flex flex-row justify-center items-center object-contain">
              <img
                loading="lazy"
                src="/HomePage/Services/eq.png"
                alt="investment research"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="lg-w-1/2 w-full flex flex-col gap-1 justify-center items-start">
              <h2 className="font-bold text-xl">Equity Solutions</h2>
              <p>
                Equity solutions play a vital role in optimizing financial
                structures. Equity financing involves raising capital by selling
                shares of ownership in a business. This approach is common in
                startups and growth-stage companies. One advantage is shared
                risk, as investors bear the ups and downs. As an IT student,
                consider incorporating equity solutions when developing tools or
                ventures, fostering collaboration and shared success. Remember,
                understanding the dynamics of equity is essential for effective
                financial management in the tech industry.{" "}
                <Link
                  href={"https://wealthtrustcap.com/equity/wealth-trust"}
                  className="underline text-blue-600"
                >
                  Read more...
                </Link>
              </p>
            </div>
          </div>
          <div className="card flex  flex-col gap-2  p-4 hover:scale-105 shadow-lightGreen h-full items-center">
            <div className="w-56 h-56 flex flex-row justify-center items-center object-contain">
              <img
                loading="lazy"
                src="/HomePage/Services/mf.png"
                alt="investment research"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="lg-w-1/2 w-full flex flex-col gap-1 justify-center items-start">
              <h2 className="font-bold text-xl">Mutual funds</h2>
              <p>
                Mutual funds are diversified investment vehicles pooling money
                from various investors to collectively invest in a portfolio of
                stocks, bonds, or other securities. At Wealth Trust Capital, we
                guide you through the diverse world of mutual funds, helping you
                select and manage a portfolio that aligns with your financial
                goals, providing a pathway to long-term wealth creation.{" "}
                <Link
                  href={"https://www.wealthtrustcap.com/mutualfund.php"}
                  className="underline text-blue-600"
                >
                  Read more...
                </Link>
              </p>
            </div>
          </div>
          <div className="card flex  flex-col gap-2  p-4 hover:scale-105 shadow-lightGreen h-full items-center">
            <div className="w-56 h-56 flex flex-row justify-center items-center object-contain">
              <img
                loading="lazy"
                src="/HomePage/Services/tp.png"
                alt="investment research"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="lg-w-1/2 w-full flex flex-col gap-1 justify-center items-start">
              <h2 className="font-bold text-xl inline-flex">
                <Link
                  href={"https://www.wealthtrustcap.com/taxplan.php"}
                  className="hover:underline"
                >
                  Tax planning
                </Link>
                <Link
                  href={"https://www.wealthtrustcap.com/insurance.php"}
                  className="hover:underline"
                >
                  / Insurance planning
                </Link>
              </h2>
              <p>
                WealthTrust Capital Services excels in strategic tax planning,
                customizing innovative strategies to minimize tax liabilities
                while ensuring compliance. Their expertise extends to
                personalized insurance planning, guiding clients to choose
                optimal coverage for protection against uncertainties. With a
                focus on optimizing financial positions, they help clients
                retain more of their hard-earned wealth.{" "}
                <Link
                  href={"https://www.wealthtrustcap.com/taxplan.php"}
                  className="underline text-blue-600"
                >
                  Read more...
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCompParent;
