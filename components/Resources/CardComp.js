"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { IoIosStar } from "react-icons/io";
import { image } from "@nextui-org/react";
function CardComp(props) {
  const { title, description, link, vidUrl } = props.data;
  const { keyval } = props;
  const data = [
    {
      badgeTitle: "Popular",
      badgeType: "popular",
      title: "Growth",
      desc: `STAYVAN introduces (1st time in India),
            Upfront + Sip strategy for investing
            directly in stocks.`,
      cagr: "15.5%",
      Min_investment: "₹ 5000",
      Ratings: "4.5",
      Rating_count: "1000",
      imageUrl: "/HomePage/invest_1.webp",
    },
    {
      badgeTitle: "New",
      badgeType: "New",
      title: "Growth",
      desc: `STAYVAN introduces (1st time in India),
            Upfront + Sip strategy for investing
            directly in stocks.`,
      cagr: "15.5%",
      Min_investment: "₹ 5000",
      Ratings: "4.5",
      Rating_count: "1000",
      imageUrl: "/HomePage/invest_1.webp",
    },
    {
      badgeTitle: "New",
      badgeType: "New",
      title: "Growth",
      desc: `STAYVAN introduces (1st time in India),
            Upfront + Sip strategy for investing
            directly in stocks.`,
      cagr: "15.5%",
      Min_investment: "₹ 5000",
      Ratings: "4.5",
      Rating_count: "1000",
      imageUrl: "/HomePage/invest_1.webp",
    },
    {
      badgeTitle: "New",
      badgeType: "New",
      title: "Growth",
      desc: `STAYVAN introduces (1st time in India),
            Upfront + Sip strategy for investing
            directly in stocks.`,
      cagr: "15.5%",
      Min_investment: "₹ 5000",
      Ratings: "4.5",
      Rating_count: "1000",
      imageUrl: "/HomePage/invest_1.webp",
    },
    {
      badgeTitle: "New",
      badgeType: "New",
      title: "Growth",
      desc: `STAYVAN introduces (1st time in India),
            Upfront + Sip strategy for investing
            directly in stocks.`,
      cagr: "15.5%",
      Min_investment: "₹ 5000",
      Ratings: "4.5",
      Rating_count: "1000",
      imageUrl: "/HomePage/invest_1.webp",
    },
    {
      badgeTitle: "New",
      badgeType: "New",
      title: "Growth",
      desc: `STAYVAN introduces (1st time in India),
            Upfront + Sip strategy for investing
            directly in stocks.`,
      cagr: "15.5%",
      Min_investment: "₹ 5000",
      Ratings: "4.5",
      Rating_count: "1000",
      imageUrl: "/HomePage/invest_1.webp",
    },
  ];
  return (
    <>
      <div
        className="mx-auto h-full   border   shadow bg-gray-900 border-gray-700"
        key={keyval}
      >
        <div className="object-cover sm:h-[20rem] lg:h-[15rem]">
          <video
            controls
            muted
            playsInline
            className="object-cover w-full h-full"
          >
            <source src={vidUrl} type="video/mp4" />
          </video>
        </div>

        <div className="p-5">
          <a href={link} target="_blank">
            <h5 className="mb-2 text-2xl font-bold tracking-tight hover:underline  text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-400">{description}</p>
          {/* <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get Recoding
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a> */}
        </div>
      </div>
    </>
  );
}

export default CardComp;
