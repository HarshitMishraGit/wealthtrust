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
import ContentComp1 from "@/components/HomePage/ContentComp1";
function page() {
  const avatar = "/Workshop/user.png";
  const username = "Krishna Verma";
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
    { title: "Take the first step towards financial success." },
  ];
  const what_to_expect = [
    { title: "Wealth Management Strategies" },
    { title: "Investment Planning" },
    { title: "Retirement Planning" },
    { title: "Financial Goal Setting" },
    { title: "Risk Management" },
  ];
  const content = [
    {
      badgeTitle: "Your Trust",
      title: "Salaried Individuals",
      content:
        "In the fast-paced world, the daily grind often leaves little room to ponder the future. As a salaried individual, it's easy to become engrossed in the demands of the present without considering the inevitable reality – one day, you will leave your job. Ensuring a secure and fulfilling future requires meticulous planning, and neglecting your financial well-being can lead to unforeseen challenges. From purchasing a home to providing quality education for your children, and safeguarding your health with comprehensive medical coverage, the puzzle of life's essentials demands attention. At Wealth Trust Capital, we understand the intricate nature of this puzzle, and our workshop is tailored to guide you through the complexities. Because, after all, if you don't look after yourself, who will? Join us on a transformative journey where we unravel the intricacies of financial planning, empowering you to secure a prosperous and worry-free future. Don't just live for today; invest in a tomorrow that you've meticulously crafted. Your financial well-being is the cornerstone of a fulfilling life, and we're here to help you piece it all together. Embrace the power of financial empowerment with Wealth Trust Capital's exclusive workshop – your key to unlocking a secure and successful future.",
      imageUrl: "/Workshop/photos/5.jpg",
      reverse: false,
    },
    {
      badgeTitle: "Your Trust",
      title: "Wealth Creation and Preservation for Self-Employed",
      content:
        "the journey to financial prosperity extends beyond the immediate demands of running a business. It involves a careful balance between personal and professional needs, with the overarching goal of creating and preserving wealth for not just today, but for the generations that follow. Business owners often find themselves intricately entwined with the success of their enterprises, making it imperative to delineate personal finances from professional assets. Wealth creation is not just about thriving in the present; it's about sowing the seeds for a prosperous future. At Wealth Trust Capital, we understand the unique challenges faced by self-employed individuals in navigating this complex terrain. Our workshop is crafted to provide insights into effective wealth management strategies, emphasizing the importance of multiplying assets for the benefit of future generations. Just as a well-orchestrated symphony requires each instrument to play its part, successful financial planning demands a harmonious balance between current needs and the legacy we wish to leave behind. Join us in this transformative workshop where we delve into the intricacies of wealth creation and preservation. Let Wealth Trust Capital be your guide in orchestrating a symphony of financial success that resonates through generations. Enroll now and ensure a lasting legacy of prosperity for you and those who come after you.",
      imageUrl: "/Workshop/photos/3.jpg",
      reverse: true,
    },
    {
      badgeTitle: "Your Trust",
      title: "For Women",
      content:
        "For women navigating the professional landscape, the need for financial empowerment is not just a choice. it's a fundamental necessity. In a world where women are increasingly breaking barriers and achieving remarkable success, We recognizes the unique financial aspirations of women professionals. Our workshop is specially curated to address the distinct challenges faced by women, offering a supportive environment to foster financial independence and success. Beyond the immediate demands of career growth, women often juggle multifaceted responsibilities, from family care to personal development. Wealth creation becomes a strategic imperative, not just for personal fulfillment but also to break free from traditional financial constraints. Our workshop goes beyond conventional financial planning, delving into topics that resonate with the modern woman - from building a robust investment portfolio to ensuring financial security for future endeavours. Join us on this empowering journey where we celebrate the strength and resilience of women professionals. Let Wealth Trust Capital be your ally in realizing your financial dreams, providing the tools and knowledge needed to carve out a path of lasting prosperity. Seize this opportunity to invest in yourself and your future. Enroll in our exclusive workshop now and embark on a journey toward financial empowerment, where your success becomes the cornerstone of a brighter tomorrow",
      imageUrl: "/Workshop/photos/10.jpg",
      reverse: false,
    },
  ];
  const data = [
    {
      title: "Networking Opportunities",
      description: `Connect with a community of like-minded individuals who share similar financial goals. Our workshops provide a platform for networking, collaboration, and the exchange of valuable experiences.
      `,
      imageUrl: "/Workshop/1.jpg",
    },
    {
      title: "Real Success Stories",
      description: `Hear inspiring stories from individuals who have attended our workshops and transformed their financial outlook. Learn from their experiences and discover practical strategies for achieving financial success.
      `,
      imageUrl: "/Workshop/2.webp",
    },
    {
      title: "Comprehensive Resources",
      description: `Access exclusive resources and materials to support your ongoing financial journey. From in-depth guides to personalized financial planning tools, we provide the resources you need to thrive.`,
      imageUrl: "/Workshop/3.jpg",
    },
    {
      title: "Holistic Approach",
      description: `Whether you're interested in equity investment, tax planning, or other financial services, our workshop takes a holistic approach, ensuring you receive a well-rounded education in all aspects of wealth creation and preservation.`,
      imageUrl: "/Workshop/4.jpg",
    },
  ];
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  return (
    <div className="min-h-screen ">
      <div className="h-[50rem] py-10 relative ">
        <div className="w-full h-full ">
          <img
            fetchPriority="high"
            src="/Workshop/bg.jpg"
            alt="wokshop image"
            className="object-cover w-full h-full absolute top-0 z-10"
          />
        </div>
        <div className="absolute top-0 z-20 bg-black bg-opacity-75 w-full h-full pt-24 flex flex-row items-center gap-3 justify-center">
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
              loading="lazy"
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
        <h2 className="text-4xl  text-center font-bold ">
          Being Financially Aware will lead you to the journey of financial
          freedom
        </h2>
        <h3 className="text-2xl font-semibold   p-4 text-center ">
          Our workshops are designed in three distinct ways to address the
          unique financial needs of individuals with different needs!
          Participate Today!
        </h3>

        {/* <GalleryComp data={what_to_expect} /> */}
        <div className="flex flex-col justify-center items-center max-w-7xl  mx-auto">
          {content.map((item, index) => (
            <ContentComp1
              key={index}
              keyval={index}
              badgeTitle={item.badgeTitle}
              title={item.title}
              content={item.content}
              imageUrl={item.imageUrl}
              reverse={item.reverse}
              blogUrl={item.blogUrl}
            />
          ))}
        </div>
      </section>
      <section className="sm:p-10 p-4 flex flex-col gap-10 justify-center items-center bg-primary text-white">
        <h2 className="text-4xl  text-center font-bold">
          Want To Participate ?
        </h2>
        <p className="sm:text-xl text-lg text-center lg:px-48">
          If you're interested in attending our workshops, simply fill out the
          form below. Our team will get in touch with you when the workshop is
          scheduled in your city.
        </p>
        <div className="flex flex-row justify-center items-center gap-4">
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
          <Link
            href="https://calendly.com/wealthtrustcapitalservices/30min"
            target="_blank"
            className="inline-flex items-center text-primary bg-white font-semibold rounded-lg   px-4 py-2 text-center "
            // onClick={() => setOpenModal(true)}
          >
            Join Now
          </Link>
        </div>
      </section>
      {/* <section className="sm:px-24 p-4  py-10">
        <h2 className="text-4xl  font-semibold pb-10 ">
          Our Approach is curated and we develop <i> Simulated Workshops</i> as
          per the audience
        </h2>
        <div className=" flex lg:flex-row flex-col gap-5">
          <div className="lg:w-1/2 w-full flex flex-col gap-5">
            <div className="flex flex-col justify-center items-start">
              <h3 className="lg:text-xl text-lg font-bold ">Women and Money</h3>
              <p className="py-2">
                Women shy away from numbers thinking its not their cup of tea
              </p>
              <p className="py-2">Lets Uncomplicate the complicated:</p>

              <ul className="list-disc gap-2">
                <li>
                  But, we think differently- Give a women one rupee she will put
                  it to good use, teach her how money really works, she will
                  change the world!
                </li>
                <li>Women live longer than men</li>
                <li>Women are better and more patient investors</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-start">
              <h3 className="lg:text-xl text-lg font-bold ">
                Salaried Professionals
              </h3>
              <p>
                Gain insights into the dynamics shaping global markets and the
                impact of interest rates on worldwide equities. Explore whether
                U.S. fixed income presents a superior investment option or
                Indian fixed income. Find comprehensive answers to such
                inquiries through our global macro-economic research.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex flex-col">
            <div className="flex flex-col justify-center items-start ">
              <h3 className="lg:text-xl text-lg font-bold ">
                Wealth Creation and Preservation for Self-Employed
              </h3>
              <p>
                Browse our Equity Model Portfolios featuring top stock picks.
                Tailor your portfolio by selecting, mixing, and matching
                according to your preferences, or simply replicate our
                recommended portfolio for a straightforward approach.
              </p>
            </div>
            <div className="sm:grid sm:grid-cols-3 flex flex-col  gap-5 py-5">
              <div className="bg-primary text-white rounded-lg flex flex-col justify-center items-center py-10 px-5">
                <h3 className=" text-lg font-semibold ">Balance 25</h3>
                <p className="text-center">
                  A sector leader approach to diversified investing
                </p>
              </div>
              <div className="bg-primary text-white rounded-lg flex flex-col justify-center items-center py-10 px-5">
                <h3 className=" text-lg font-semibold ">Value Multi-Cap</h3>
                <p className="text-center">
                  A sector leader approach to diversified investing
                </p>
              </div>
              <div className="bg-primary text-white rounded-lg flex flex-col justify-center items-center py-10 px-5">
                <h3 className=" text-lg font-semibold ">Perpetuus</h3>
                <p className="text-center">
                  A sector leader approach to diversified investing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="sm:p-10 p-4 py-10 flex flex-col gap-5 justify-center ">
        <h2 className="text-4xl  text-center font-bold">
          {" "}
          Our Approach is curated and we develop <i> Stimulated Workshops</i> as
          per the audience
        </h2>
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 flex flex-col items-start justify-center  py-4">
          {data.map((item, index) => {
            return (
              <div
                className="w-full flex flex-col justify-center items-center"
                key={index}
              >
                <div className="h-[15rem] w-full object-cover overflow-hidden rounded-lg bg-gray-900 my-3 shadow-xl hover:scale-105 cursor-pointer">
                  <img
                    loading="lazy"
                    src={item.imageUrl}
                    alt={item.title}
                    className="object-cover object-center w-full h-full"
                  />
                </div>

                <div className="flex flex-col justify-center gap-5 items-center py-3">
                  <h2 className=" text-xl font-semibold  flex justify-center items-center">
                    {item.title}
                  </h2>
                  <p className="text-center">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className=" p-2 w-full bg-primary text-white">
        <div className=" p-6  max-w-3xl mx-auto ">
          <div className="flex flex-col justify-center items-center mb-4">
            <img
              loading="lazy"
              src={avatar}
              alt="User Avatar"
              className="w-20 h-20 rounded-full mr-4 filter invert"
            />

            <h3 className="text-lg font-bold">
              Exceptional Financial Guidance
            </h3>
          </div>

          <p className=" mb-4">
            " Attending the WealthTrust Cap workshop was a game-changer! The
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
            {/* <h2 className="sm:text-4xl text-2xl font-semibold text-center py-10">
              What Sets Us Apart ?
            </h2> */}

            {/* <div className="sm:grid lg:grid-cols-4 sm:grid-cols-2 gap-6 flex flex-col items-center justify-center">
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
            </div> */}
          </div>
        </div>
      </section>

      <section className="research_team">
        <h2 className="text-4xl text-center font-semibold lg:px-10 pt-10 p-4">
          Past Webinars
        </h2>
        <hr />
        <div className="lg:grid lg:grid-cols-3 gap-10 sm:grid-cols-2 flex flex-col items-center lg:px-24 p-4 w-full">
          {research_team.map((item, index) => {
            return <CardComp data={item} key={index} keyval={index} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default page;
