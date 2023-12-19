"use client";
import ProfileCard from "@/components/AboutUsPage/ProfileCard";
import React from "react";
import Link from "next/link";
import { ImLinkedin } from "react-icons/im";
import CardComp from "@/components/Resources/CardComp";
import VideoWrapper from "@/components/Resources/VideoWrapper";
function page() {
  const research_team = [
    {
      name: "Shubham J, CFP",
      designation: "Senior Research Analyst",
      imageUrl: "/Resources/webinar.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cupiditate?`,
      social: {
        linkedIn: "#",
      },
    },
    {
      name: "Aman V",
      designation: "Equity & Product Research Analyst",
      imageUrl: "/Resources/webinar.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, pariatur.`,
      social: {
        linkedIn: "#",
      },
    },
    {
      name: "Vedant S",
      designation: "Equity Associate",
      imageUrl: "/Resources/webinar.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, pariatur.`,
      social: {
        linkedIn: "#",
      },
    },
  ];
  const wealth_management_team = [
    {
      name: "Nupur S, CFP",
      designation: "Wealth Manager",
      imageUrl: "/Resources/webinar.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cupiditate?`,
      social: {
        linkedIn: "#",
      },
    },
    {
      name: "Purvi D",
      designation: "Wealth Manager & Insurance Expert",
      imageUrl: "/Resources/webinar.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cupiditate?`,
      social: {
        linkedIn: "#",
      },
    },
  ];
  const operation_team = [
    {
      name: "Shivaji Shinde",
      designation: "Head of Operations",
      imageUrl: "/Resources/webinar.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cupiditate?`,
      social: {
        linkedIn: "#",
      },
    },
    {
      name: "Gyaan T",
      designation: "Operations Associate",
      imageUrl: "/Resources/webinar.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cupiditate?`,
      social: {
        linkedIn: "#",
      },
    },
  ];

  return (
    <div className="min-h-screen ">
      <div className="h-[20rem] relative ">
        <div className="w-full h-full ">
          <img
            src="/AboutUsPage/bg.jpg"
            alt=""
            className="object-cover w-full h-full absolute top-0 z-10"
          />
        </div>
        <div className="absolute top-0 z-20 bg-black bg-opacity-50 w-full h-full pt-24 flex flex-col gap-3">
          <p className="text-center text-blue-400 font-bold text-3xl">
            Resources
          </p>
          <p className="text-2xl font-semibold text-center text-white ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            facilis?
          </p>
        </div>
      </div>

      <section className="research_team">
        <p className="text-4xl text-center font-semibold lg:px-10 pt-10 p-4">
          Past Webinars
        </p>
        <hr />
        <div className="lg:grid lg:grid-cols-3 gap-3 sm:grid-cols-2 flex flex-col items-center lg:px-10 p-4 w-full">
          {research_team.map((item, index) => {
            return <CardComp user={item} key={index} />;
          })}
        </div>
      </section>

      <section className="research_team">
        <p className="text-4xl text-center font-semibold lg:px-10 pt-10 p-4">
          Youtube Videos
        </p>
        <hr />
        <div className="lg:grid lg:grid-cols-3 gap-3 sm:grid-cols-2 flex flex-col items-center  lg:px-10 p-4 w-full">
          {research_team.map((item, index) => {
            return <VideoWrapper user={item} key={index} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default page;
