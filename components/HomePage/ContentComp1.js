"use client";
import React, { useState } from "react";
import { Fade, Bounce, Slide } from "react-awesome-reveal";
// import confetti from "canvas-confetti";
function ContentComp1(props) {
  const { badgeTitle, title, content, imageUrl, reverse, blogUrl, keyval } =
    props;
  const handleRedirect = () => {
    window.open(blogUrl, "_blank");
  };
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section
      className="min-h-fit lg:p-12 p-4 text-gray-900   overflow-x-hidden "
      key={keyval}
    >
      <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:max-w-7xl lg:gap-10 flex flex-col space-y-5 items-center justify-center">
        <div
          className={`${
            reverse ? "lg:col-start-1" : "lg:col-start-2"
          } "lg:col-span-1 lg:row-span-1 lg:row-start-1 "`}
        >
          <div className="object-contain h-[25rem] w-[25rem] rounded-full bg-gray-300 mx-auto">
            <img
              height={700}
              width={700}
              src={imageUrl}
              className="w-full h-full object-center  object-contain"
            />
          </div>
        </div>
        <div className="space-y-2 ">
          {/* <div className="badge badge-accent md:p-3">{badgeTitle}</div> */}
          <h2 className="text-3xl font-bold text-base-content">{title}</h2>
          <p className="py-6 text-normal ">
            {isExpanded ? content : `${content.substring(0, 400)}...`}
          </p>
          <p
            className="btn btn-primary text-white rounded-lg"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContentComp1;
