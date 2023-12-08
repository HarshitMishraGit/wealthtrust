"use client";
import React from "react";
function Hero() {
 
  return (
    <section className="lg:h-screen h-fit bg-base-100">
      <div className=" lg:h-[85%] h-[40vh] bg-primary  flex flex-col justify-start items-center p-1  lg:pt-24 pt-10">
        <div className="flex flex-row justify-center items-center max-w-xl text-center    ">
          <h1 className="mb-5 text-5xl  font-medium text-base-content select-none cursor-pointer">
            Achieve your{" "}
            <span className="text-accent" >
              financial goals
            </span>{" "}
            with WealthTrust
          </h1>
        </div>
        <div className="lg:-mb-48 -mb-96 mx-auto max-w-3xl  rounded-xl overflow-hidden shadow-lg ">
          <video
            width="750"
            height="500"
            controls
            loop
            className="object-contain w-full h-full"
            poster="/poster.webp"
          >
            <source src={"/video.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default Hero;
