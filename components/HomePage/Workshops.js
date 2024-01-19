import React from "react";
import Link from "next/link";
function Workshops() {
  return (
    <section className="lg:h-screen lg:p-12 p-5 bg-lightColor">
      <div className="  flex flex-col lg:flex-row gap-10  items-center lg:p-6  lg:pt-24 pt-10 ">
        <div className=" w-full lg:w-1/2 lg:h-full  shadow-lg object-contain ">
          <video
            width="750"
            height="500"
            controls
            loop
            className="object-contain w-full h-full rounded-xl"
            poster="/poster.jpg"
          >
            <source src={"/video.mp4"} type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col w-full lg:w-1/2 gap-4   ">
          <h1 className="mb-5 text-5xl  font-medium text-base-content select-none cursor-pointer text-left">
            Achieve your <span className="text-primary">financial goals</span>{" "}
            with WealthTrust Capital Services
          </h1>

          <p className=" sm:text-md text-base-content text-left">
            In the dynamic landscape of financial services,
            <strong> WealthTrust </strong>
            emerges as a distinguished player, excelling in digital marketing
            strategies tailored for the finance sector. As a premier Digital
            Marketing and Financial Consulting firm based in India, our
            professionals at InvestWisely Capital possess a deep understanding
            of financial intricacies, specializing in equity, investments, and
            wealth management. Our success is not only attributed to our
            marketing prowess but also to our in-depth knowledge of the finance
            industry, making us a trusted partner for businesses seeking
            strategic growth in the financial sector.
          </p>
          <div className="flex flex-row items-center gap-4">
            <Link
              href="/aboutus"
              className={`btn text-primary border-primary hover:bg-primary hover:text-white bg-transparent`}
            >
              Explore More
            </Link>
            <Link href="#" className={`btn btn-primary text-white`}>
              Invest Now!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Workshops;
