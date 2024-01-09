import React from "react";
import dynamic from "next/dynamic";
import { FaStar } from "react-icons/fa6";
import { Avatar } from "@nextui-org/react";
const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false } // This will load the component client side only
);

const avatar = "/AboutUsPage/user.jpg";
const username = "John Doe";
const description =
  "Wealth Trust Cap has consistently exceeded my expectations with their personalized financial services, providing insightful guidance and helping me achieve my wealth goals. Their transparent and client-centric approach sets them apart in the financial industry.";
const rating = 5;
const keyPoints = [
  { label: "Easy to Use", value: "Yes" },
  { label: "Performance", value: "Excellent" },
];

// rest of your code
function StatsComp() {
  return (
    <>
      <section className="stats flex flex-col  bg-primary rounded-none py-32 p-4 justify-center items-center ">
        {/* <h2 className="text-md font-semibold bg-primary text-white px-5 py-2 rounded-full">
        In Numbers
      </h2> */}
        <h3 className="text-4xl text-white  font-bold  text-center">
          Delay and lack of knowledge can cost you{" "}
          <s className="text-red-500">thousands</s> crores.{" "}
          <span className="text-green-300">Start today, safe tomorrow. </span>
        </h3>
      </section>
      {/* <section className="sm:p-10 p-2 w-full">
        <div className=" p-6  max-w-3xl mx-auto mb-4">
          <div className="flex flex-col justify-center items-center mb-4">
            <img
              src={avatar}
              alt="User Avatar"
              className="w-20 h-20 rounded-full mr-4"
            />

            <p className="text-gray-600">
              Rating: {rating}{" "}
              <span className="inline-flex items-center ">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </span>
            </p>
            <p className="text-lg font-bold">Exceptional Financial Guidance</p>
          </div>

          <p className="text-gray-800 mb-4">{description}</p>

          <div className="grid grid-cols-2 gap-4">
            {keyPoints.map((point, index) => (
              <div key={index}>
                <span className="font-semibold">{point.label}:</span>{" "}
                {point.value}
              </div>
            ))}
          </div>

          <div className="flex flex-row gap-2 justify-center uppercase py-4 w-full">
            <h3 className="text-lg sm:text-xl  font-semibold   w-fit">
              - {username},
            </h3>
            <h3 className=" text-lg sm:text-xl  font-semibold  w-fit">
              CFO - MarketOnEarth
            </h3>
          </div>
        </div>
      </section> */}
      <section>
        <div className="stats w-full shadow-none rounded-none  bg-lightColor py-20 border-none flex flex-col md:flex-row ">
          <div className="stat place-items-center">
            <div className="stat-title py-3">
              <img src="/HomePage/asset.png" alt="" className="w-20 h-20 " />
            </div>
            <div className="stat-value text-primary inline-flex">
              <p>&#8377;</p>
              <AnimatedNumbers
                includeComma
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
                animateToNumber={200}
                fontStyle={{
                  fontSize: 40,
                }}
              />
              <p>Cr</p>
            </div>
            <div className="stat-desc font-extralight text-xl mt-3 text-black">
              Assets Under Management
            </div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title py-3">
              <img
                src="/HomePage/experience.png"
                alt=""
                className="w-20 h-20"
              />
            </div>
            <div className="stat-value text-primary inline-flex">
              {" "}
              <AnimatedNumbers
                includeComma
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
                animateToNumber={15}
                fontStyle={{
                  fontSize: 40,
                }}
              />
              <p>+</p>
            </div>
            <div className="stat-desc font-extralight text-xl mt-3 text-black ">
              Years of Experience
            </div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title py-3">
              <img
                src="/HomePage/certificate.webp"
                alt=""
                className="w-20 h-20"
              />
            </div>
            <div className="stat-value text-primary inline-flex">
              SEBI certified
            </div>
            <div className="stat-desc font-extralight text-xl mt-3 text-black">
              Certification
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StatsComp;
