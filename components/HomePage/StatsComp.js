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
      <section className="flex flex-col  px-10 py-10 bg-primary  justify-center items-center">
        <figure className="max-w-screen-md mx-auto text-center">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
              "Wealth isn't reserved for the few. Let's demystify investing and
              make your money work for you, no matter your starting point."
            </p>
          </blockquote>
          {/* <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <img loading="lazy"
              className="w-6 h-6 rounded-full"
              src="/Workshop/benj.jpg"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                Benjamin Franklin
              </cite>
              <cite className="ps-3 text-sm text-gray-300">
                Founding Fathers of the United States
              </cite>
            </div>
          </figcaption> */}
        </figure>
      </section>
      {/* <section className="sm:p-10 p-2 w-full">
        <div className=" p-6  max-w-3xl mx-auto mb-4">
          <div className="flex flex-col justify-center items-center mb-4">
            <img loading="lazy"
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
        <div className="stats w-full shadow-none rounded-none  bg-lightGreen py-20 border-none flex flex-col md:flex-row ">
          <div className="stat place-items-center">
            <div className="stat-title py-3">
              <img
                loading="lazy"
                src="/HomePage/asset.png"
                alt="Assets"
                className="w-20 h-20 "
              />
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
              <p>Cr+</p>
            </div>
            <div className="stat-desc font-extralight text-xl mt-3 text-black">
              Assets Under Management
            </div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title py-3">
              <img
                loading="lazy"
                src="/HomePage/experience.png"
                alt="Experience"
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
                animateToNumber={16}
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
                loading="lazy"
                src="/HomePage/certificate.webp"
                alt="Years Of Experience"
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
