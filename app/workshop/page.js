"use client";
import ProfileCard from "@/components/AboutUsPage/ProfileCard";
import React, { useState } from "react";
import Link from "next/link";
import { ImLinkedin } from "react-icons/im";
import CardComp from "@/components/Resources/CardComp";
import VideoWrapper from "@/components/Resources/VideoWrapper";
// import { Button } from "@nextui-org/button";
import ContactFormModal from "@/components/Modals/ContactFormModal";
import GalleryComp from "@/components/Workshop/GalleryComp";
import { HiLightBulb } from "react-icons/hi";
import { Button, Input, Textarea } from "@nextui-org/react";
function page() {
  const avatar = "/AboutUsPage/user.jpg";
  const username = "John Doe";
  const description = `Attending the Wealth Trust Cap workshop was a game-changer! The interactive sessions demystified complex financial concepts, and the personalized strategies gave me a clear roadmap for my financial goals. Connecting with like-minded individuals and learning from real success stories made the experience invaluable. Thanks to this workshop, I feel empowered and equipped to take charge of my financial future!`;
  const rating = 5;
  const keyPoints = [
    { label: "Easy to Use", value: "Yes" },
    { label: "Performance", value: "Excellent" },
  ];

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
  const why_to_Attend = [
    { title: "Gain valuable knowledge from industry experts." },
    { title: "Network with like-minded individuals." },
    { title: "Receive personalized advice from our team." },
    // { title: "Take the first step towards financial success." },
  ];
  const what_to_expect = [
    { title: "Wealth Management Strategies" },
    { title: "Investment Planning" },
    { title: "Retirement Planning" },
    { title: "Financial Goal Setting" },
    { title: "Risk Management" },
  ];
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="min-h-screen ">
      <div className="h-[50rem] py-10 relative ">
        <div className="w-full h-full ">
          <img
            src="/AboutUsPage/bg.jpg"
            alt=""
            className="object-cover w-full h-full absolute top-0 z-10"
          />
        </div>
        <div className="absolute top-0 z-20 bg-black bg-opacity-50 w-full h-full pt-24 flex flex-col gap-3 justify-center">
          <h1 className="text-center text-blue-400 font-bold sm:text-7xl text-3xl">
            Investor Awareness <br />
            Programs
          </h1>
          <p className="sm:text-2xl text-white text-lg sm:px-24 pt-10 p-4 text-center">
            Welcome to our Investor Awareness Programs, where financial
            empowerment meets practical knowledge. Our workshops are designed to
            provide valuable insights into wealth management, investment
            strategies, and financial planning. We believe in equipping you with
            the tools and knowledge to make informed decisions about your
            financial future.
          </p>
        </div>
      </div>

      <section className="sm:p-10 p-4 py-10 h-[32rem] flex flex-col gap-10 justify-center items-center bg-primary text-white">
        <h2 className="sm:text-6xl text-4xl text-center font-bold">
          How To Participate ?
        </h2>
        <p className="sm:text-2xl text-lg text-center  lg:px-48 p-0">
          If you're interested in attending our workshops, simply fill out the
          form below with your details, including your name, email address, and
          preferred workshop location. Our team will get in touch with you when
          the workshop is scheduled in your city.
        </p>
        <div className="flex flex-row justify-center items-center pt-10">
          <ContactFormModal openModal={openModal} setOpenModal={setOpenModal} />
          <Button
            onClick={() => setOpenModal(true)}
            className="inline-flex items-center text-primary bg-white font-semibold rounded-lg  text-lg px-10 py-7 text-center "
          >
            LET'S TALK
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
      </section>
      <section className="sm:p-10 p-4 py-10 flex flex-col gap-5 justify-center ">
        <h2 className="sm:text-6xl text-4xl text-center font-bold">
          What To Expect
        </h2>
        <div className="sm:text-2xl text-lg  p-4 text-center">
          Our workshops cover a range of topics, including
          <GalleryComp data={what_to_expect} />
        </div>
      </section>
      <section className="flex flex-col  px-10 py-10 bg-primary rounded-lg justify-center items-center">
        <HiLightBulb size={50} className="text-yellow-500" />
        <p className="sm:text-4xl text-lg text-center sm:p-16 lg:px-48 p-0 text-white">
          Each workshop is led by experienced professionals in the financial
          industry, ensuring you receive valuable insights and practical advice.
        </p>
      </section>
      <section className="sm:p-10 p-4 py-10 flex flex-col gap-5 justify-center ">
        <h2 className="sm:text-6xl text-4xl text-center font-bold">
          Why To Attend ?
        </h2>
        <div className="sm:text-2xl text-lg  p-4">
          <GalleryComp data={why_to_Attend} />
        </div>
      </section>
      <section className="sm:p-10 p-2 w-full bg-primary text-white">
        <div className=" p-6  max-w-3xl mx-auto mb-4">
          <div className="flex flex-col justify-center items-center mb-4">
            <img
              src={avatar}
              alt="User Avatar"
              className="w-20 h-20 rounded-full mr-4"
            />

            {/* <p className="">
              Rating: {rating}{" "}
              <span className="inline-flex items-center ">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </span>
            </p> */}
            <p className="text-lg font-bold">Exceptional Financial Guidance</p>
          </div>

          <p className=" mb-4">
            " Attending the Wealth Trust Cap workshop was a game-changer! The
            interactive sessions demystified complex financial concepts, and the
            personalized strategies gave me a clear roadmap for my financial
            goals. Connecting with like-minded individuals and learning from
            real success stories made the experience invaluable. Thanks to this
            workshop, I feel empowered and equipped to take charge of my
            financial future! "
          </p>

          {/* <div className="grid grid-cols-2 gap-4">
            {keyPoints.map((point, index) => (
              <div key={index}>
                <span className="font-semibold">{point.label}:</span>{" "}
                {point.value}
              </div>
            ))}
          </div> */}

          <div className="flex flex-row gap-2 justify-center uppercase py-4 w-full">
            <h3 className="text-lg sm:text-xl  font-semibold   w-fit">
              - {username},
            </h3>
            <h3 className=" text-lg sm:text-xl  font-semibold  w-fit">
              MarketOnEarth
            </h3>
          </div>
        </div>
      </section>
      <section className="sm:p-10 p-4 sm:py-16 pt-5 flex flex-col gap-5 justify-center ">
        <h2 className="sm:text-5xl text-4xl text-center  font-bold pb-10">
          Workshops for Corporates
        </h2>

        <div className=" flex flex-col gap-5  justify-center items-center  ">
          <div className=" text-left px-10  w-full flex flex-col gap-5">
            <p className="text-xl">
              At Wealth Trust Capital, we understand the pivotal role financial
              well-being plays in corporate success. Our tailored workshops are
              designed to empower your team with the knowledge and skills needed
              to navigate the complex world of finance.
            </p>
            <h2 className="sm:text-5xl text-4xl font-semibold text-center py-10">
              What Sets Us Apart ?
            </h2>

            <div className="sm:grid sm:grid-cols-4 gap-6 flex flex-col items-center justify-center">
              <div className="w-full flex flex-col justify-center items-center">
                <div className="w-56 h-56 rounded-full bg-primary"></div>
                <div className="flex flex-col justify-center items-center py-3">
                  <p className="text-2xl font-bold">Expert Guidance</p>
                  <p className="text-center">
                    Learn from seasoned financial professionals with a wealth of
                    industry experience.
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <div className="w-56 h-56 rounded-full bg-primary"></div>
                <div className="flex flex-col justify-center items-center py-3">
                  <p className="text-2xl font-bold">Customized Content</p>
                  <p className="text-center">
                    Our workshops are crafted to address the specific financial
                    challenges faced by your organization.
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <div className="w-56 h-56 rounded-full bg-primary"></div>
                <div className="flex flex-col justify-center items-center py-3">
                  <p className="text-2xl font-bold">Interactive Sessions</p>
                  <p className="text-center">
                    Engage in hands-on activities and discussions to enhance
                    practical understanding.
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <div className="w-56 h-56 rounded-full bg-primary"></div>
                <div className="flex flex-col justify-center items-center py-3">
                  <p className="text-2xl font-bold">Timely Updates</p>
                  <p className="text-center">
                    Stay informed about the latest market trends, regulations,
                    and investment strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form
            action="#"
            className="flex flex-col gap-4 rounded-lg bg-black w-full  lg:w-10/12 
shadow-xl md:px-24 p-4 sm:pb-24 pt-14 md:mt-24 mt-10 "
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
              label="Company Name"
              placeholder="Enter the company name"
              isRequired
            />
            <Input
              type="number"
              label="Company Size"
              placeholder="Enter the company size"
              min={0}
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
        </div>
      </section>
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

      {/* <section className="research_team">
        <p className="text-4xl text-center font-semibold lg:px-10 pt-10 p-4">
          Youtube Videos
        </p>
        <hr />
        <div className="lg:grid lg:grid-cols-3 gap-3 sm:grid-cols-2 flex flex-col items-center  lg:px-10 p-4 w-full">
          {research_team.map((item, index) => {
            return <VideoWrapper user={item} key={index} />;
          })}
        </div>
      </section> */}
    </div>
  );
}

export default page;
