"use client";
import React from "react";

function Hero() {
  return (
    <section className="h-screen ">
      <div className="hero h-[85%] bg-primary relative">
        <div className="text-center hero-content">
          <div className="max-w-[40rem]">
            <h1 className="mb-5 text-5xl font-bold">
              Achieve your financial goals with WealthTrust
            </h1>
            <div className="-mb-48 mx-auto max-w-6xl  rounded-xl overflow-hidden shadow-lg ">
              <video
                width="750"
                height="500"
                controls
                loop
                autoPlay
                className="object-contain w-full h-full"
              >
                <source src={"/video.mp4"} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Hero;
