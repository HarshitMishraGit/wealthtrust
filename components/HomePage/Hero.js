"use client";
import React, { useState } from "react";
import Link from "next/link";
import CarouselComp from "./CarouselComp";
import ScheduleCall from "../Modals/ScheduleCall";
function Hero() {
  const OPTIONS = { loop: true };
  const [openModal, setOpenModal] = useState(false);
  const handleScroll = () => {
    document.getElementById("Services").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className=" lg:p-12 p-5 ">
      <ScheduleCall
        openModal={openModal}
        setOpenModal={setOpenModal}
        title={"Schedule A Call With Our Experts"}
      />
      <div className="  bg-base-100  flex flex-col-reverse lg:flex-row gap-10  items-center lg:p-6  lg:pt-32 pt-10 ">
        <div className="flex flex-col w-full lg:w-1/2 gap-4   ">
          <h1 className="mb-5 text-5xl  font-medium text-base-content select-none cursor-pointer text-left">
            Achieve your <span className="text-primary">financial goals</span>{" "}
            with WealthTrust Capital Services
          </h1>

          <p className=" sm:text-md text-base-content text-left">
            Our comprehensive suite of services, including equity investment,
            equity research, mutual funds, tax planning, and more, is tailored
            to guide you towards your financial aspirations. Whether you're
            looking to build wealth through strategic investments or seeking
            expert advice on tax planning,{" "}
            <strong>WealthTrust Capital Services</strong> is your trusted
            partner on the journey to financial success. Explore our range of
            services and unlock a path to a secure and prosperous tomorrow.
          </p>
          <div className="flex flex-row items-center gap-4">
            <p
              // href="/aboutus"
              onClick={handleScroll}
              className={`btn text-primary border-primary hover:bg-primary hover:text-white bg-transparent`}
            >
              Explore More
            </p>
            <div
              href="#"
              className={`btn btn-primary text-white`}
              onClick={() => setOpenModal(true)}
            >
              Schedule a Call
            </div>
          </div>
        </div>
        <div className=" w-full lg:w-1/2 lg:h-full   ">
          {/* <video
            width="750"
            height="500"
            controls
            loop
            className="object-contain w-full h-full rounded-xl"
            poster="/poster.jpg"
          >
            <source src={"/video.mp4"} type="video/mp4" />
          </video> */}
          <CarouselComp options={OPTIONS} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
