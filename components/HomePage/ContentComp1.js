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
      <div
        className={`flex ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-5 flex-col`}
      >
        <div
          className={`${
            reverse ? "lg:col-start-1" : "lg:col-start-2"
          } "lg:col-span-1 lg:row-span-1 lg:row-start-1 "`}
        >
          <div className="object-cover h-[35rem] lg:h-[25rem] lg:w-[25rem]  mx-auto !rounded-lg shadow-xl">
            <img
              loading="lazy"
              height={700}
              width={700}
              src={imageUrl}
              className="w-full h-full object-center rounded-lg  object-cover"
            />
          </div>
        </div>
        <div className="space-y-2 ">
          {/* <div className="badge badge-accent md:p-3">{badgeTitle}</div> */}
          <h2 className="text-3xl font-bold text-base-content">{title}</h2>
          <p className="py-6 text-normal ">
            {isExpanded ? content : `${content.substring(0, 1000)}...`}
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
