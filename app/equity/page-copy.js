"use client";
import React from "react";
import ContentComp1 from "@/components/HomePage/ContentComp1";
import { Button, Input, Textarea } from "@nextui-org/react";
import Link from "next/link";
function page() {
  const content = [
    {
      badgeTitle: "Your Trust",
      title: "Expert Analysis",
      content:
        "Our seasoned team of financial analysts combines industry knowledge, market research, and cutting-edge technology to deliver expert analysis that goes beyond the numbers. We aim to provide you with a clear understanding of market trends, potential risks, and lucrative opportunities.",
      imageUrl: "/Equity/expert.png",
      reverse: false,
    },
    {
      badgeTitle: "Your Trust",
      title: "In-Depth Research",
      content:
        "Our commitment to in-depth research sets us apart. Whether you're a seasoned investor or just starting, our research covers a spectrum of industries and companies, ensuring you have the information needed to make well-informed investment choices.",
      imageUrl: "/Equity/research.png",
      reverse: true,
    },
    {
      badgeTitle: "Your Trust",
      title: "Tailored Investment Strategies",
      content:
        "We recognize that every investor is unique. That's why our equity research services extend beyond generic advice. We tailor investment strategies to align with your financial goals, risk tolerance, and market preferences.",
      imageUrl: "/Equity/strategy.png",
      reverse: false,
    },
    {
      badgeTitle: "Your Trust",
      title: "Timely Market Updates",
      content:
        "In the fast-paced world of finance, staying ahead is key. Our timely market updates keep you informed about significant events, economic indicators, and emerging trends, enabling you to adapt your investment strategy proactively.",
      imageUrl: "/Equity/update.png",
      reverse: true,
    },
    {
      badgeTitle: "Your Trust",
      title: "Transparent Communication",
      content:
        "Transparent communication is the cornerstone of our client relationships. We provide clear, jargon-free reports and insights, ensuring you understand the rationale behind our recommendations.",
      imageUrl: "/Equity/comm.png",
      reverse: false,
    },
  ];
  const data = [
    {
      title: "Company Analysis",
      description:
        "In-depth evaluations of individual companies, assessing financial health, growth potential, and competitive positioning.",
    },
    {
      title: "Sector Reports",
      description:
        "Comprehensive reports on industry sectors, identifying key trends and factors influencing market dynamics.",
    },
    {
      title: "Market Outlook:",
      description:
        "Regular insights into the broader market conditions, helping you navigate changing landscapes with confidence.",
    },
    {
      title: "IPO Analysis",
      description:
        "Thorough analysis of Initial Public Offerings, providing you with insights to make informed investment decisions in the primary market.",
    },
  ];
  return (
    <div className="">
      <div className="h-[50rem]  relative ">
        <div className="w-full h-full ">
          <img
            src="/AboutUsPage/bg.jpg"
            alt=""
            className="object-cover w-full h-full absolute top-0 z-10"
          />
        </div>
        <div className="absolute top-0 z-20 bg-black bg-opacity-50 w-full h-full flex flex-col justify-center gap-3 pt-24">
          <h1 className="text-center text-blue-400 font-bold sm:text-6xl text-3xl">
            Equity
          </h1>

          <p className="sm:text-2xl text-white text-lg sm:px-24 pt-10 p-4 text-center">
            At Wealth Trust Cap, we are committed to empowering your financial
            journey through comprehensive Equity Research services. Our
            expertise lies in unraveling the complexities of the financial
            markets, providing you with actionable insights, and guiding you
            towards sound investment decisions.
          </p>
        </div>
      </div>
      <div>
        {content.map((item, index) => (
          <ContentComp1
            key={index}
            keyval={index}
            badgeTitle={item.badgeTitle}
            title={item.title}
            content={item.content}
            imageUrl={item.imageUrl}
            reverse={item.reverse}
            blogUrl={item.blogUrl}
          />
        ))}
      </div>

      <section>
        <h2 className="text-3xl  font-semibold py-5 text-center">
          Our Equity Research Services Include
        </h2>
        <div className="sm:grid sm:grid-cols-4 gap-6 flex flex-col items-center justify-center sm:px-10 p-4">
          {data.map((item, index) => {
            return (
              <div className="w-full flex flex-col justify-center items-center">
                <div className="w-56 h-56 text-xl text-white font-semibold rounded-full bg-primary flex justify-center items-center">
                  {item.title}
                </div>
                <div className="flex flex-col justify-center items-center py-3">
                  <p className="text-center">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="flex justify-center items-center py-10">
        <form
          action="#"
          className="flex flex-col gap-4 rounded-lg bg-black w-full  lg:w-10/12 
shadow-xl md:px-24 p-4 "
        >
          <h2 className="text-white md:text-5xl text-2xl text-center font-semibold">
            Get In Touch !
          </h2>
          <Input
            type="text"
            label="Name"
            placeholder="Enter Your name"
            isRequired
          />

          <Input
            type="text"
            label="Phone No"
            placeholder="Enter Your Mobile"
            pattern="[0-9]{10}"
            isRequired
          />
          <Input
            type="email"
            label="Email"
            placeholder="Enter Your email"
            isRequired
          />
          <Input
            type="text"
            label="Location"
            placeholder="Enter Your city name"
            isRequired
          />

          <Textarea
            label="Description"
            placeholder="Enter your description"
            className=""
            isRequired
            // labelPlacement="outside"
          />
          <Button
            type="submit"
            // onClick={() => setOpenModal(true)}
            className="inline-flex items-center text-white bg-primary font-semibold rounded-lg  text-lg px-10 py-7 text-center "
          >
            Submit Now
          </Button>
        </form>
      </section>
      <section className="sm:py-10 p-4 sm:px-24 bg-lightGreen">
        <div className="flex sm:flex-row flex-col justify-center items-center ">
          <div className="sm:w-1/2 w-full">
            <p className="text-2xl font-bold">WealthTrust Capital Services</p>
            {/* <p>
              213,2ND FLOOR, Truf Estate, Shakti Mill Lane, Mahalaxmi, 400011,
              Mumbai, Maharashtra, 400011
            </p> */}
          </div>
          <div className="flex flex-row gap-10 justify-end sm:w-1/2 w-full ">
            <Link
              href="https://pickright-server.s3.amazonaws.com/prod/disclosure//1703053105471_disclosure.pdf"
              className="text-xl font-bold text-primary"
            >
              Disclosures
            </Link>
            <Link
              href="https://pickright-server.s3.amazonaws.com/prod/disclosure//1695207184046_investorCharter.pdf"
              className="text-xl font-bold text-primary"
            >
              Investor Charter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
