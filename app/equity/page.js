"use client";
import React from "react";
import ContentComp1 from "@/components/HomePage/ContentComp1";
import CTA from "@/components/CTA";
function page() {
  const content = [
    {
      badgeTitle: "Your Trust",
      title: "Expert Analysis",
      content:
        "Our seasoned team of financial analysts combines industry knowledge, market research, and cutting-edge technology to deliver expert analysis that goes beyond the numbers. We aim to provide you with a clear understanding of market trends, potential risks, and lucrative opportunities.",
      imageUrl: "/meet1.jpg",
      reverse: false,
    },
    {
      badgeTitle: "Your Trust",
      title: "In-Depth Research",
      content:
        "Our commitment to in-depth research sets us apart. Whether you're a seasoned investor or just starting, our research covers a spectrum of industries and companies, ensuring you have the information needed to make well-informed investment choices.",
      imageUrl: "/meet1.jpg",
      reverse: true,
    },
    {
      badgeTitle: "Your Trust",
      title: "Tailored Investment Strategies",
      content:
        "We recognize that every investor is unique. That's why our equity research services extend beyond generic advice. We tailor investment strategies to align with your financial goals, risk tolerance, and market preferences.",
      imageUrl: "/meet1.jpg",
      reverse: false,
    },
    {
      badgeTitle: "Your Trust",
      title: "Timely Market Updates",
      content:
        "In the fast-paced world of finance, staying ahead is key. Our timely market updates keep you informed about significant events, economic indicators, and emerging trends, enabling you to adapt your investment strategy proactively.",
      imageUrl: "/meet1.jpg",
      reverse: true,
    },
    {
      badgeTitle: "Your Trust",
      title: "Transparent Communication",
      content:
        "Transparent communication is the cornerstone of our client relationships. We provide clear, jargon-free reports and insights, ensuring you understand the rationale behind our recommendations.",
      imageUrl: "/meet1.jpg",
      reverse: false,
    },
  ];
  return (
    <div className="">
      <div className="h-[30rem] sm:h-[20rem] relative ">
        <div className="w-full h-full ">
          <img
            src="/AboutUsPage/bg.jpg"
            alt=""
            className="object-cover w-full h-full absolute top-0 z-10"
          />
        </div>
        <div className="absolute top-0 z-20 bg-black bg-opacity-50 w-full h-full flex flex-col gap-3 pt-24">
          <p className="text-center text-blue-400 font-bold text-3xl">Equity</p>
          <p className="text-2xl font-semibold text-center text-white ">
            {" "}
            Welcome to Wealth Trust Cap: Your Gateway to Informed Investments
          </p>
          <p className="text-sm text-white w-2/3 text-center mx-auto">
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
            badgeTitle={item.badgeTitle}
            title={item.title}
            content={item.content}
            imageUrl={item.imageUrl}
            reverse={item.reverse}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center items-start lg:px-24 p-5">
        <p className="text-3xl  font-semibold py-5">
          Our Equity Research Services Include:
        </p>
        <div className="flex flex-col gap-3 list-disc py-5">
          <li className="text-xl ">
            <span className="font-bold"> Company Analysis: </span>In-depth
            evaluations of individual companies, assessing financial health,
            growth potential, and competitive positioning.
          </li>
          <li className="text-xl ">
            <span className="font-bold">Sector Reports: </span>IComprehensive
            reports on industry sectors, identifying key trends and factors
            influencing market dynamics.
          </li>
          <li className="text-xl ">
            <span className="font-bold"> Market Outlook: </span>Regular insights
            into the broader market conditions, helping you navigate changing
            landscapes with confidence.
          </li>
          <li className="text-xl ">
            <span className="font-bold">IPO Analysis: </span>Thorough analysis
            of Initial Public Offerings, providing you with insights to make
            informed investment decisions in the primary market.
          </li>
        </div>
      </div>
      {/* <CTA /> */}
    </div>
  );
}

export default page;
