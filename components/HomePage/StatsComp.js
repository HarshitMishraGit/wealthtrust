import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false } // This will load the component client side only
);

// rest of your code
function StatsComp() {
  return (
    <section className="stats flex flex-col space-y-7 bg-lightColor rounded-none py-14 p-4 justify-center items-center ">
      <h2 className="text-md font-semibold bg-primary text-white px-5 py-2 rounded-full">
        In Numbers
      </h2>
      <h3 className="text-4xl font-semibold">WealthTrust Capital Services</h3>
      <div className="stats w-full shadow-none  bg-lightColor border-none flex flex-col md:flex-row ">
        <div className="stat place-items-center">
          {/* <div className="stat-title">Assets Under Management</div> */}
          <div className="stat-value text-primary inline-flex">
            <p>&#8377;</p>
            <AnimatedNumbers
              includeComma
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.3,
              })}
              animateToNumber={1.04}
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
          {/* <div className="stat-title">Users</div> */}
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
          {/* <div className="stat-title">Years Of Experience</div> */}
          <div className="stat-value text-primary inline-flex">
            {" "}
            <AnimatedNumbers
              includeComma
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.3,
              })}
              animateToNumber={22}
              fontStyle={{
                fontSize: 40,
              }}
            />
            <p>%</p>
          </div>
          <div className="stat-desc font-extralight text-xl mt-3 text-black">
            Average Returnt
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsComp;
