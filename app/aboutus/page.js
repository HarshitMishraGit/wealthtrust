"use client";
import ProfileCard from "@/components/AboutUsPage/ProfileCard";
import React from "react";
import Link from "next/link";
import { ImLinkedin } from "react-icons/im";
function page() {
  const research_team = [
    {
      name: "Shubham J, CFP",
      designation: "Senior Research Analyst",
      imageUrl: "/AboutUsPage/user.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cupiditate?`,
      social: {
        linkedIn: "#",
      },
    },
    {
      name: "Aman V",
      designation: "Equity & Product Research Analyst",
      imageUrl: "/AboutUsPage/user.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, pariatur.`,
      social: {
        linkedIn: "#",
      },
    },
    {
      name: "Vedant S",
      designation: "Equity Associate",
      imageUrl: "/AboutUsPage/user.jpg",
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
      imageUrl: "/AboutUsPage/user.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cupiditate?`,
      social: {
        linkedIn: "#",
      },
    },
    {
      name: "Purvi D",
      designation: "Wealth Manager & Insurance Expert",
      imageUrl: "/AboutUsPage/user.jpg",
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
      imageUrl: "/AboutUsPage/user.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cupiditate?`,
      social: {
        linkedIn: "#",
      },
    },
    {
      name: "Gyaan T",
      designation: "Operations Associate",
      imageUrl: "/AboutUsPage/user.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cupiditate?`,
      social: {
        linkedIn: "#",
      },
    },
  ];

  return (
    <div className="min-h-screen pt-24 p-4">
      <div className="py-10 border-b border-gray-300 space-y-4">
        <p className="text-center text-blue-400 font-bold text-3xl">About Us</p>
        <p className="text-xl text-center ">
          {" "}
          Empowering Your Financial Future,One Investment at a Time.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row w-full  gap-5 lg:px-10 p-4 py-10">
        <div className="sm:w-1/3 sm:min-w-96   object-cover w-full h-96 sm:h-[23rem] object-top">
          <img
            src="/AboutUsPage/user.jpg"
            alt=""
            height={100}
            className="object-cover sm:rounded-l-lg rounded-t-lg sm:rounded-tr-none object-top w-full h-full"
          />
        </div>
        <div className="sm:w-2/3 p-2">
          <div className="flex flex-col gap-4 ">
            <p className="font-bold text-3xl">Sneha Jain</p>
            <p className="text-blue-500 font-semibold">CEO & Founding Partne</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
              laudantium?
            </p>
          </div>
          <div className="social py-2">
            <Link href={"#"}>
              <ImLinkedin className="text-[#0277b5]" size={25} />
            </Link>
          </div>
        </div>
      </div>
      <section className="research_team">
        <p className="text-3xl font-semibold lg:px-10 pt-10 p-4">
          Research Team |{" "}
          <span className="text-gray-400">
            People who enable informed decision making.
          </span>
        </p>
        <div className="lg:grid lg:grid-cols-3 gap-3 sm:grid-cols-2 flex flex-col lg:px-10 p-4 w-full">
          {research_team.map((item, index) => {
            return <ProfileCard user={item} key={index} />;
          })}
        </div>
      </section>
      <section className="wealth_management_team">
        <p className="text-3xl font-semibold lg:px-10 pt-10 p-4">
          Wealth Management Team|{" "}
          <span className="text-gray-400">
            People who plan your goals and take decisions.
          </span>
        </p>
        <div className="lg:grid lg:grid-cols-3 gap-3 sm:grid-cols-2 flex flex-col lg:px-10 p-4 w-full">
          {wealth_management_team.map((item, index) => {
            return <ProfileCard user={item} key={index} />;
          })}
        </div>
      </section>
      <section className="operation_team">
        <p className="text-3xl font-semibold lg:px-10 pt-10 p-4">
          Operations Team |{" "}
          <span className="text-gray-400">People who execute decisions.</span>
        </p>
        <div className="lg:grid lg:grid-cols-3 gap-3 sm:grid-cols-2 flex flex-col lg:px-10 p-4 w-full">
          {operation_team.map((item, index) => {
            return <ProfileCard user={item} key={index} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default page;
