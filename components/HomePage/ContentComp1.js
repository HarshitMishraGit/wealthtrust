"use client";
import React from "react";
import { Fade, Bounce, Slide } from "react-awesome-reveal";
// import confetti from "canvas-confetti";
function ContentComp1(props) {
  const { badgeTitle, title, content, imageUrl, reverse } = props;
  // const handleConfetti = () => {
  //   confetti({
  //     particleCount: 500,
  //     spread: 160,
  //     origin: { y: 0.6 },
  //   });
  // };
  return (
    <section className="min-h-fit lg:p-12 p-4  hero  bg-base-100 overflow-x-hidden">
      <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:max-w-6xl lg:gap-10 flex flex-col space-y-5">
        <Slide
          className={`${
            reverse ? "lg:col-start-1" : "lg:col-start-2"
          } "lg:col-span-1 lg:row-span-1 lg:row-start-1 "`}
          direction={reverse ? "left" : "right"}
          triggerOnce
        >
          <img
            height={700}
            width={700}
            src={imageUrl}
            className="w-full h-full object-top rounded-lg shadow-2xl object-cover"
          />
        </Slide>
        <Slide direction={reverse ? "right" : "left"} triggerOnce>
          <div className="space-y-2">
            <div className="badge badge-accent md:p-3">{badgeTitle}</div>
            <h1 className="text-5xl font-bold text-base-content">{title}</h1>
            <p
              className="py-6 text-base-content "
              dangerouslySetInnerHTML={{ __html: content }}
            ></p>
            <button
              className="btn btn-primary text-white rounded-lg"
              // onClick={handleConfetti}
            >
              Get Started
            </button>
          </div>
        </Slide>
      </div>
    </section>
  );
}

export default ContentComp1;
