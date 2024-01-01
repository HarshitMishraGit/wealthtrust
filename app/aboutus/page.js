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
      imageUrl: "/AboutUsPage/shubham.jpg",
      description: `Shubham is 'Go-To' Research Analyst, a CFP has a
      phenomenal experience in Equity Research,
      Portfolio management and Quant analysis
      spanning over 5 years. A sharp professional
      with amazing acumen in deciphering the stock
      market and how stocks are influenced by
      current events plays. He plays to his strength
      and plays a massive role in our portfolio
      building strategies and recommending long
      term equity investments.`,
      social: {
        linkedIn: "#",
      },
    },
    {
      name: "Aman V",
      designation: "Equity & Product Research Analyst",
      imageUrl: "/AboutUsPage/aman.png",
      description: `Aman is a driven financial market researcher with prior wealth management
      experience. Curious and dedicated, Aman is here to help you achieve your financial goals.
      With expertise in investment analysis and a passion for assisting others, count on Aman to
      provide tailored solutions for your success.`,
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
      imageUrl: "/AboutUsPage/nupur.jpg",
      description: `Nupur Shah is your partner in building your financial dreams. She is a certified financial
      planner and has prior experience of working as a wealth manager and is skilled in making tailored
      financial plans that align with our clients' unique goals and aspirations. Nupur holds a successful track
      record of building and managing client's portfolios. She is our creative and ambitious young professional
      who will help to steer you towards a prosperous and secure financial future.`,
      social: {
        linkedIn: "#",
      },
    },
    {
      name: "Purvi D",
      designation: "Wealth Manager & Insurance Expert",
      imageUrl: "/AboutUsPage/purvi.jpg",
      description: `Purvi Dodiya is our accomplished insurance expert and financial analyst. With a
      profound comprehension of insurance products and meticulous risk assessment, she
      skillfully designs tailored insurance plans to meet diverse needs. Purvi's unwavering
      commitment lies in prioritizing client satisfaction, fostering strong relationships, and
      delivering personalized solutions.`,
      social: {
        linkedIn: "#",
      },
    },
  ];
  const operation_team = [
    {
      name: "Shivaji Shinde",
      designation: "Head of Operations",
      imageUrl: "/AboutUsPage/shivaji.jpg",
      description: `Professionalism and Prowess laced with
      Pragmatism and Politeness is what makes Shivaji
      Shinde a champion at Client Servicing and excel
      as Chief of Client Operations.
      He has invested his energy and enthusiasm at
      WealthTrust since inception and his involvement
      and commitment in building the service platform
      is praiseworthy.
      An absolute asset in true sense of the term!
      `,
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
    <div className="min-h-screen ">
      <div className="h-[40rem] relative ">
        <div className="w-full h-full ">
          <img
            src="/AboutUsPage/bg2.jpg"
            alt=""
            className="object-cover w-full h-full absolute top-0 z-10"
          />
        </div>
        <div className="absolute top-0  z-20 bg-black bg-opacity-50 w-full h-full pt-24 flex flex-col justify-center gap-3">
          <h1 className="text-center text-white font-bold text-5xl">
            Meet Our Team
          </h1>
          <h2 className="text-4xl p-10 text-center text-white ">
            The people who work at wealthtrust share the vision and values of
            our community. We are motivated to create an environment of growth
            where we can win at life and business together.
          </h2>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-full  gap-5 lg:px-10 p-4 py-10">
        <div className="sm:w-1/3 sm:min-w-96   object-cover w-full  h-[35rem] object-top">
          <img
            src="/AboutUsPage/sneha.png"
            alt=""
            height={120}
            className="object-cover  sm:rounded-l-lg rounded-t-lg sm:rounded-tr-none object-center w-full h-full"
          />
        </div>
        <div className="sm:w-2/3 p-2">
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-3xl">Sneha Jain</p>
              <p className="text-blue-500 font-semibold">
                CEO & Founding Partner
              </p>
              <Link href={"#"}>
                <ImLinkedin className="text-[#0277b5]" size={25} />
              </Link>
            </div>

            <p>
              Sneha Jain is the Founder & CEO of WealthTrust Capital Services.
              With a Master's degree in Accounting and Finance from London
              School of Economics, she has worked with reputed asset management
              companies like Pramerica Asset Managers Private Limited and HSBC
              Global Asset Management, India.
            </p>
            <p>
              She is an assertive lady who all through her academic and
              professional life has had the ability to stay ahead of the
              competition. Her penchant for analytics and focus on detailing has
              capitulated her to the position she is in today straddling all
              aspects of invest game. She has a calm demeanor while interacting
              with clients, educating audiences at different forums, engaging
              them in thought provoking discussions and busting a few myths
              around investment game.{" "}
            </p>
            <p>
              She is optimistic yet has a realistic approach while advising her
              clientele. You don't ask her what she brings to the table, because
              she brings the table itself.
            </p>
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
        <div className="lg:grid lg:grid-cols-2 gap-7 sm:grid-cols-2 flex flex-col lg:px-10 p-4 w-full">
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
        <div className="lg:grid lg:grid-cols-2 gap-7 sm:grid-cols-2 flex flex-col lg:px-10 p-4 w-full">
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
        <div className="lg:grid lg:grid-cols-2 gap-7 sm:grid-cols-2 flex flex-col lg:px-10 p-4 w-full">
          {operation_team.map((item, index) => {
            return <ProfileCard user={item} key={index} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default page;
