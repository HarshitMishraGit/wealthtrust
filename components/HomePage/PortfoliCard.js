import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { HiCurrencyRupee } from "react-icons/hi2";
import { Button } from "@nextui-org/button";
import { Fade } from "react-awesome-reveal";
function PortfoliCard() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:py-20 lg:px-10 px-4 py-4 gap-10 p-5">
      {/* <div className="lg:grid lg:grid-cols-2 gap-5 lg:grid-rows-2 flex flex-wrap lg:w-1/2 w-full">
        <Fade className="w-full">
          <div className="w-full  cursor-pointer bg-white rounded-lg flex flex-col gap-5  lg:col-start-1 lg:row-start-1 hover:bg-primary p-10 hover:text-white group items-start justify-center h-full">
            <p className="text-4xl font-bold text-primary group-hover:text-white">
              8%
            </p>
            <p className="text-xl font-semibold">
              Indians invest in the markets.
            </p>
          </div>
        </Fade>
        <Fade className="w-full">
          <div className="w-full  bg-primary rounded-lg flex flex-col gap-5 lg:col-start-2 lg:row-start-1 cursor-pointerhover:bg-primary p-10 text-white transition-all duration-300 group items-start justify-center cursor-pointer  h-full">
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
      </div> */}

      <div className="object-cover flex flex-wrap lg:w-1/2 w-full">
        <img
          src="/HomePage/trust.jpg"
          alt="trust"
          className="object-cover w-full h-full object-center"
        />
      </div>
      <div className="flex flex-col gap-5 lg:w-1/2 p-4">
        <p>About WealthTrust Capital Services</p>
        <h2 className="text-4xl  font-bold">
          More than 500+ families Trusted Our Financial & Consultation
          Institution{" "}
        </h2>
        <p>
          At WealthTrust Capital Services, our commitment to excellence has
          earned the trust of over 500 families who rely on our services for
          their financial well-being. We take immense pride in being the trusted
          partner on the financial journey for a diverse community of
          individuals and families. Our holistic approach to wealth management,
          personalized strategies, and unwavering dedication to our clients'
          success have solidified our reputation as a reliable and transparent
          financial partner. Join the growing number of families who have
          entrusted their financial futures to us, and experience the difference
          that a dedicated and trustworthy financial ally can make in achieving
          your long-term goals.
        </p>
        {/* <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p> */}
        <Button
          as={"a"}
          className="w-fit bg-primary text-white"
          href="/aboutus"
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  );
}

export default PortfoliCard;
