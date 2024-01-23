import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Fade from "react-awesome-reveal";
import { AiOutlineStock } from "react-icons/ai";
function TimeLine() {
  const data = [
    {
      year: "2015",
      title: "WealthTrust Capital Services founded",
    },
    {
      year: "2016",
      title: "Developed proprietary financial planning model",
    },
    {
      year: "2017",
      title: "Recognized as most asset classes boutique wealth management firm",
    },
    {
      year: "2020",
      title: "Organized more than 80 workshops and going stronger",
    },
    {
      year: "2021",
      title: "Got SEBI Research analyst license",
    },
    {
      year: "2023",
      title:
        "Managing more than 500+ families and managing more than 200+crore in assets",
    },
  ];

  return (
    <div>
      <h2 className="text-center text-4xl  font-bold lg:py-10">Our History</h2>
      {/* <div className="sm:grid sm:grid-cols-7 gap-6 flex flex-col items-center justify-center px-4">
        {data.map((item, index) => {
          return (
            <div key={index}>
              {index !== 0 && (
                <Fade
                  direction="right"
                  duration={index * 1000 + 1000}
                  triggerOnce
                >
                  <div className="w-full flex flex-col justify-center items-center">
                    <FaArrowRightLong
                      size={25}
                      className="w-full sm:rotate-0 rotate-90"
                    />
                  </div>
                </Fade>
              )}

              <Fade
                direction="right"
                duration={index * 1000 + 1200}
                triggerOnce
              >
                <div className=" flex flex-col justify-center items-center bg-black w-48 h-48 shadow-xl hover:scale-105 rounded-full text-white">
                  <div className="flex flex-col justify-center items-center py-3">
                    <p className="text-2xl font-bold">{item.year}</p>
                    <p className="text-center">{item.title}</p>
                  </div>
                </div>
              </Fade>
            </div>
          );
        })}
      </div> */}
      <ol className="items-center lg:flex sm:p-10 p-4">
        {data.map((item, index) => {
          return (
            <li className="relative mb-6 lg:mb-0" key={index}>
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full  shrink-0">
                  <AiOutlineStock className="text-white" size={25} />
                </div>
                <div className="hidden lg:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
              </div>
              <div className="mt-3 lg:pe-8">
                {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Flowbite Library v1.0.0
                </h3> */}
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {item.year}
                </time>
                <p className="text-base font-bold text-black">{item.title}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default TimeLine;
