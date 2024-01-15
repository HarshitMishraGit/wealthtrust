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
import CompanyContactForm from "@/components/Modals/CompanyContactForm";
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
      title: "Spread Financial Awareness",
      description: `Conducted a series of workshops for leap.club members online, but now driving offline workshops to ensure a lot of intimate chats, more in-person candid conversations and taking back a lot of learnings and actionables for attendees has been a pleasure to host at Awfis Space Solutions Limited`,
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7056599967213195264/?originTrackingId=fkQNG%2F1bTTGolB8m28QFmw%3D%3D",
      vidUrl: "/Workshop/vid3.mp4",
    },
    {
      title: " Ladies Who Lead!",
      description: ` The dependence of having a male counterpart either deciding for you or doing it for you! However i have started to see that change and how!

      Doing the workshop for women led communities, some of the key challenges that the audience pointed out which were a hurdle in truly being independent in terms of money.`,
      link: "https://www.linkedin.com/posts/sneha-jain-59a3bb23_womeninvesting-financialplanning-wealthmanagement-activity-7067186607694508033-8wyX?utm_source=share&utm_medium=member_desktop",
      vidUrl: "/Workshop/vid2.mp4",
    },
    {
      title: "Financial planning for Samsung Electronics employees",
      description: `The session, mainly attended by women under their She-com initiative was an incredibly insightful and interactive one, with a lot of valuable takeaways. It was heartening to see the level of engagement and enthusiasm from our audience, as we discussed the importance of financial planning and the impact it can have on our lives. `,
      link: "https://www.linkedin.com/posts/sneha-jain-59a3bb23_financialplanning-investments-personalfinanceworkshops-activity-7040225013207023616-ikTW?utm_source=share&utm_medium=member_desktop",
      vidUrl: "/Workshop/vid1.mp4",
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
  const [openModal2, setOpenModal2] = useState(false);
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
        <div className="absolute top-0 z-20 bg-black bg-opacity-50 w-full h-full pt-24 flex flex-row items-center gap-3 justify-center">
          <div className="lg:w-2/3 w-full p-4">
            <h1 className="text-center text-white font-bold text-5xl ">
              Investor Awareness <br />
              Programs
            </h1>
            <p className="sm:text-xl text-lg text-white  sm:px-24 pt-10 p-4 text-center">
              Welcome to our Investor Awareness Programs, where financial
              empowerment meets practical knowledge. Our workshops are designed
              to provide valuable insights into wealth management, investment
              strategies, and financial planning. We believe in equipping you
              with the tools and knowledge to make informed decisions about your
              financial future.
            </p>
          </div>
        </div>
      </div>

      <section className="sm:p-10 p-4 flex flex-col gap-10 justify-center items-center bg-primary text-white">
        <h2 className="text-4xl  text-center font-bold">
          How To Participate ?
        </h2>
        <p className="sm:text-xl text-lg text-center lg:px-48">
          If you're interested in attending our workshops, simply fill out the
          form below. Our team will get in touch with you when the workshop is
          scheduled in your city.
        </p>
        <div className="flex flex-row justify-center items-center">
          <ContactFormModal openModal={openModal} setOpenModal={setOpenModal} />
          <Button
            onClick={() => setOpenModal(true)}
            className="inline-flex items-center text-primary bg-white font-semibold rounded-lg   px-4 py-2 text-center "
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
        <h2 className="text-4xl  text-center font-bold">What To Expect</h2>
        <div className="sm:text-xl text-lg  p-4 text-center">
          Our workshops cover a range of topics, including
          <GalleryComp data={what_to_expect} />
        </div>
      </section>
      <section className="flex flex-col  px-10 py-10 bg-primary  justify-center items-center">
        <figure className="max-w-screen-md mx-auto text-center">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
              "An investment in knowledge pays the best interest."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <img
              className="w-6 h-6 rounded-full"
              src="/Workshop/benj.jpg"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                Benjamin Franklin
              </cite>
              <cite className="ps-3 text-sm text-gray-300">
                Founding Fathers of the United States
              </cite>
            </div>
          </figcaption>
        </figure>
      </section>
      <section className="sm:p-10 p-4 py-10 flex flex-col gap-5 justify-center ">
        <h2 className="text-4xl  text-center font-bold">Why To Attend ?</h2>
        <div className="sm:text-2xl text-lg  p-4">
          <GalleryComp data={why_to_Attend} />
        </div>
      </section>
      <section className=" p-2 w-full bg-primary text-white">
        <div className=" p-6  max-w-3xl mx-auto ">
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
            <h3 className="text-lg font-bold">
              Exceptional Financial Guidance
            </h3>
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
          <div className="flex flex-row gap-2 justify-end uppercase py-4 w-full">
            <p className="text-lg   font-semibold   w-fit">- {username},</p>
            <p className=" text-lg   font-semibold  w-fit">MarketOnEarth</p>
          </div>
        </div>
      </section>
      <section className="p-4 sm:py-10 pt-5 flex flex-col gap-5 justify-center ">
        <h2 className="sm:text-4xl text-2xl text-center  font-bold sm:pb-10 pb-3">
          Workshops for Corporates
        </h2>

        <div className=" flex flex-col gap-6  justify-center items-center  ">
          <div className=" text-left sm:px-10  w-full flex flex-col gap-5">
            <p className="sm:text-xl text-lg">
              At Wealth Trust Capital, we understand the pivotal role financial
              well-being plays in corporate success. Our tailored workshops are
              designed to empower your team with the knowledge and skills needed
              to navigate the complex world of finance.
            </p>
            <div className="flex flex-row justify-center items-center">
              <CompanyContactForm
                openModal={openModal2}
                setOpenModal={setOpenModal2}
              />
              <Button
                onClick={() => setOpenModal2(true)}
                className="inline-flex items-center text-white bg-primary font-semibold rounded-lg   px-4 py-2 text-center "
              >
                Contact us
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
            <h2 className="sm:text-4xl text-2xl font-semibold text-center py-10">
              What Sets Us Apart ?
            </h2>

            <div className="sm:grid lg:grid-cols-4 sm:grid-cols-2 gap-6 flex flex-col items-center justify-center">
              <div className="w-full flex flex-col justify-center items-center">
                <div className="w-56 h-56 rounded-full bg-primary flex flex-row justify-center items-center text-white">
                  <h3 className="text-2xl font-bold text-center p-5">
                    Expert Guidance
                  </h3>
                </div>
                <div className="flex flex-col justify-center items-center py-3">
                  <p className="text-center">
                    Learn from seasoned financial professionals with a wealth of
                    industry experience.
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <div className="w-56 h-56 rounded-full bg-primary flex flex-row justify-center items-center text-white">
                  <h3 className="text-2xl font-bold text-center p-5">
                    Customized Content
                  </h3>
                </div>
                <div className="flex flex-col justify-center items-center py-3">
                  <p className="text-center">
                    Our workshops are crafted to address the specific financial
                    challenges faced by your organization.
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <div className="w-56 h-56 rounded-full bg-primary flex flex-row justify-center items-center text-white">
                  {" "}
                  <h3 className="text-2xl font-bold text-center p-5">
                    Interactive Sessions
                  </h3>
                </div>
                <div className="flex flex-col justify-center items-center py-3">
                  <p className="text-center">
                    Engage in hands-on activities and discussions to enhance
                    practical understanding.
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <div className="w-56 h-56 rounded-full bg-primary flex flex-row justify-center items-center text-white">
                  <h3 className="text-2xl font-bold text-center p5">
                    Timely Updates
                  </h3>
                </div>
                <div className="flex flex-col justify-center items-center py-3">
                  <p className="text-center">
                    Stay informed about the latest market trends, regulations,
                    and investment strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="research_team">
        <h2 className="text-4xl text-center font-semibold lg:px-10 pt-10 p-4">
          Past Webinars
        </h2>
        <hr />
        <div className="lg:grid lg:grid-cols-3 gap-5 sm:grid-cols-2 flex flex-col items-center lg:px-10 p-4 w-full">
          {research_team.map((item, index) => {
            return <CardComp data={item} key={index} />;
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
