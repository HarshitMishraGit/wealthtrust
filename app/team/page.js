"use client";
import ProfileCard from "@/components/AboutUsPage/ProfileCard";
import React from "react";
import Link from "next/link";
import { ImLinkedin } from "react-icons/im";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from "@nextui-org/react";
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
    // {
    //   name: "Vedant S",
    //   designation: "Equity Associate",
    //   imageUrl: "/AboutUsPage/user.jpg",
    //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, pariatur.`,
    //   social: {
    //     linkedIn: "#",
    //   },
    // },
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
      imageUrl: "/AboutUsPage/gyaan.png",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cupiditate?`,
      social: {
        linkedIn: "#",
      },
    },
  ];

  return (
    <div className="min-h-screen ">
      <div className="h-[50rem] relative ">
        <div className="w-full h-full ">
          <img
            src="/AboutUsPage/bg2.jpg"
            alt=""
            className="object-cover w-full h-full absolute top-0 z-10"
          />
        </div>
        <div className="absolute top-0  z-20 bg-black bg-opacity-50 w-full h-full pt-24 flex flex-col justify-center gap-3">
          <h1 className="text-center text-white font-bold sm:text-6xl text-4xl">
            Meet Our Team
          </h1>
          <h2 className="sm:text-4xl text-xl sm:p-10 p-4 text-center text-white ">
            The people who work at WealthTrust share the vision and values of
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
      <section className="md:pt-10 pt-5 h-[20rem]  bg-primary w-full   flex flex-col justify-center gap-3">
        <h1 className="text-center text-white font-bold sm:text-5xl text-4xl">
          Want To Join Our Team ?
        </h1>
        <h2 className="sm:text-2xl text-xl sm:p-10 p-4 text-center text-white ">
          At WealthTrust Capital Services, we're not just building a company,
          we're cultivating a community of passionate individuals dedicated to
          transforming financial landscapes. If you're driven, innovative, and
          ready to make a lasting impact, consider joining our team.
        </h2>
      </section>
      {/* <section className="sm:p-10 p-4 py-5 flex flex-col gap-5 justify-center ">
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-4 lg:px-10">
            <h2 className="sm:text-5xl text-4xl  text-center font-bold py-5">
              Why Join Us?
            </h2>
            <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:grid-rows-2 lg:p-10">
              <div className="flex flex-col gap-5  bg-base-200 p-5  justify-center items-center rounded-lg">
                <p className="sm:text-6xl text-4xl ">🚀</p>
                <p className="sm:text-2xl text-xl font-semibold text-center">
                  Innovative Environment
                </p>
                <p className="sm:text-xl text-lg text-center lg:px-10">
                  Be part of a dynamic workplace that fosters creativity and
                  encourages innovative thinking.
                </p>
              </div>{" "}
              <div className="flex flex-col gap-5  bg-base-200 p-5  justify-center items-center rounded-lg">
                <p className="sm:text-6xl text-4xl ">💡</p>
                <p className="sm:text-2xl text-xl font-semibold text-center">
                  {" "}
                  Professional Growth
                </p>
                <p className="sm:text-xl text-lg text-center lg:px-10">
                  We invest in your development, offering opportunities for
                  skill enhancement and career advancement.
                </p>
              </div>{" "}
              <div className="flex flex-col gap-5  bg-base-200 p-5  justify-center items-center rounded-lg">
                <p className="sm:text-6xl text-4xl ">🤝</p>
                <p className="sm:text-2xl text-xl font-semibold text-center">
                  Collaborative Culture
                </p>
                <p className="sm:text-xl text-lg text-center lg:px-10">
                  Join a team that values collaboration, diversity, and the
                  collective pursuit of excellence.
                </p>
              </div>{" "}
              <div className="flex flex-col gap-5  bg-base-200 p-5  justify-center items-center rounded-lg">
                <p className="sm:text-6xl text-4xl ">🌍 </p>
                <p className="sm:text-2xl text-xl font-semibold text-center">
                  Meaningful Impact
                </p>
                <p className="sm:text-xl text-lg text-center lg:px-10">
                  Contribute to shaping the future of financial empowerment and
                  make a meaningful impact on people's lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="sm:p-10 p-4 sm:py-10 pt-5 flex flex-col gap-5 justify-center ">
        <h2 className="sm:text-5xl text-4xl text-center  font-bold pb-10">
          How To Join ?
        </h2>

        <div className=" flex sm:flex-row-reverse gap-5 flex-col-reverse justify-center items-center  ">
          <form
            action="#"
            className="flex flex-col gap-2 max-w-lg rounded-lg bg-base-300 sm:w-1/2 w-full 
shadow-xl p-4"
          >
            <Input type="text" label="Name" placeholder="Enter Your name" />
            <Input
              type="text"
              label="Phone No"
              placeholder="Enter Your Mobile"
              pattern="[0-9]{10}"
            />
            <Input type="email" label="Email" placeholder="Enter Your email" />
            <Textarea
              label="Description"
              placeholder="Enter your description"
              className=""
              // labelPlacement="outside"
            />
            <Input type="file" />
            <Button
              type="submit"
              // onClick={() => setOpenModal(true)}
              className="inline-flex items-center text-white bg-primary font-semibold rounded-lg  text-lg px-10 py-7 text-center "
            >
              Submit Now
            </Button>
          </form>
          <p className="sm:text-3xl text-2xl text-left px-10 sm:w-1/2 w-full border-l-4 border-l-primary ">
            We're always on the lookout for exceptional talent. Feel free to
            express your interest in joining our team by filling out the form
            below, and we'll keep your information on file for future
            opportunities.
          </p>
        </div>
      </section>
    </div>
  );
}

export default page;
