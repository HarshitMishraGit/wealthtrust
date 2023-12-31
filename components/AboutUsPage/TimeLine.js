import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Fade from "react-awesome-reveal";
function TimeLine() {
  const data = [
    {
      year: "2019",
      title: "Wealth Trust Cap founded",
    },
    {
      year: "2019",
      title: "Wealth Trust Cap founded",
    },
    {
      year: "2019",
      title: "Wealth Trust Cap founded",
    },
    {
      year: "2019",
      title: "Wealth Trust Cap founded",
    },
  ];

  return (
    <div>
      <h1 className="text-center sm:text-5xl text-xl font-bold py-10">
        Our History
      </h1>
      <div className="sm:grid sm:grid-cols-7 gap-6 flex flex-col items-center justify-center px-4">
        {data.map((item, index) => {
          return (
            <>
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
            </>
          );
        })}
      </div>
    </div>
  );
}

export default TimeLine;
