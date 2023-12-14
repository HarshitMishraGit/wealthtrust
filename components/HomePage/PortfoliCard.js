import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { HiCurrencyRupee } from "react-icons/hi2";
import { Button } from "@nextui-org/button";
import { Fade } from "react-awesome-reveal";
function PortfoliCard() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:py-20 lg:px-10 px-4 py-4 gap-10 p-5">
      <div className="lg:grid lg:grid-cols-2 gap-5 lg:grid-rows-2 flex flex-wrap lg:w-1/2 w-full">
        <Fade className="w-full">
          <div className="w-full  cursor-pointer bg-white rounded-lg flex flex-col gap-5  lg:col-start-1 lg:row-start-1 hover:bg-primary p-10 hover:text-white group items-start justify-center h-full">
            {/* <HiCurrencyRupee size={30} className="" /> */}
            <p className="text-4xl font-bold text-blue-700 group-hover:text-white">
              8%
            </p>
            <p className="text-xl font-semibold">
              Indians invest in the markets.{" "}
            </p>
          </div>
        </Fade>
        <Fade className="w-full">
          <div className="w-full  bg-primary rounded-lg flex flex-col gap-5 lg:col-start-2 lg:row-start-1 cursor-pointerhover:bg-primary p-10 text-white transition-all duration-300 group items-start justify-center cursor-pointer  h-full">
            {" "}
            <p className="text-4xl font-bold">14%</p>
            <p className="text-xl font-semibold">
              is what the equity markets returned on average in the past 20
              years.
            </p>
          </div>
        </Fade>
        <Fade className="w-full">
          <div className="w-full  bg-white rounded-lg flex flex-col gap-5 lg:col-start-1 lg:row-start-2 cursor-pointer hover:bg-primary p-10 hover:text-white transition-all duration-300 group items-start justify-center h-full">
            {" "}
            {/* <HiCurrencyRupee size={30} className="" /> */}
            <p className="text-xl font-semibold ">
              Delay and lack of knowledge can cost you <s>thousands</s> crores.
              Start today, safe tomorrow.
            </p>
          </div>
        </Fade>
        <Fade className="w-full">
          <div className="w-full  bg-white rounded-lg flex flex-col gap-5 lg:col-start-2 lg:row-start-2 cursor-pointer hover:bg-primary p-10 hover:text-white transition-all duration-300 group items-start justify-center h-full">
            {" "}
            <p className="text-xl font-semibold ">
              Financial markets can seem complicated, so you might delay your
              purchase and stick to bank savings.
            </p>
          </div>
        </Fade>
      </div>
      <div className="flex flex-col gap-5 lg:w-1/2 p-4">
        <p>About WealthTrust</p>
        <p className="text-4xl font-bold">
          More than 500+ families Trusted Our Financial & Consultation
          Institution{" "}
        </p>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p>
        <Button className="w-fit bg-primary text-white">LEARN MORE</Button>
      </div>
    </div>
  );
}

export default PortfoliCard;
