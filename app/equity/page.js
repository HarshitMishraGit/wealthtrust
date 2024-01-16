"use client";
import React, { useState } from "react";
import ContentComp1 from "@/components/HomePage/ContentComp1";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";
import ContactFormModal from "@/components/Modals/ContactFormModal";

function page() {
  const content = [
    {
      badgeTitle: "Your Trust",
      title: "Expert Analysis",
      content:
        "Our seasoned team of financial analysts combines industry knowledge, market research, and cutting-edge technology to deliver expert analysis that goes beyond the numbers. We aim to provide you with a clear understanding of market trends, potential risks, and lucrative opportunities.",
      imageUrl: "/Equity/expert.png",
      reverse: false,
    },
    {
      badgeTitle: "Your Trust",
      title: "In-Depth Research",
      content:
        "Our commitment to in-depth research sets us apart. Whether you're a seasoned investor or just starting, our research covers a spectrum of industries and companies, ensuring you have the information needed to make well-informed investment choices.",
      imageUrl: "/Equity/research.png",
      reverse: true,
    },
    {
      badgeTitle: "Your Trust",
      title: "Tailored Investment Strategies",
      content:
        "We recognize that every investor is unique. That's why our equity research services extend beyond generic advice. We tailor investment strategies to align with your financial goals, risk tolerance, and market preferences.",
      imageUrl: "/Equity/strategy.png",
      reverse: false,
    },
    {
      badgeTitle: "Your Trust",
      title: "Timely Market Updates",
      content:
        "In the fast-paced world of finance, staying ahead is key. Our timely market updates keep you informed about significant events, economic indicators, and emerging trends, enabling you to adapt your investment strategy proactively.",
      imageUrl: "/Equity/update.png",
      reverse: true,
    },
    {
      badgeTitle: "Your Trust",
      title: "Transparent Communication",
      content:
        "Transparent communication is the cornerstone of our client relationships. We provide clear, jargon-free reports and insights, ensuring you understand the rationale behind our recommendations.",
      imageUrl: "/Equity/comm.png",
      reverse: false,
    },
  ];
  const data = [
    {
      title: "Sustainability",
      description: `We're not just building for today; we're
        crafting a future that stands the test of
        time.`,
      imageUrl: "/Equity/sustainability.png",
    },
    {
      title: "Profitability",
      description: `Turning a profit is great but doing it with a meaningful impact is even better. We
       believe in investments that make both
       cents and sense.`,
      imageUrl: "/Equity/profitability.png",
    },
    {
      title: "Crystal Clear Finances",
      description: `No muddy waters here. We navigate the markets with a keen eye on clean accounts,
        ensuring transparency every step of the way`,
      imageUrl: "/Equity/clear.png",
    },
    {
      title: "Leadership is our MOAT",
      description: `In the world of investments, investing in a
        fortress of business is the single best thing
        any investor can do. We enable our
        investors to do just that.`,
      imageUrl: "/Equity/leadership.png",
    },
  ];
  const research_articles = [
    {
      title: `Wealth Management &
      Market Outlook 2024
      `,
      link: "#",
      imageUrl: "/Equity/fin.png",
    },
    {
      title: `Wealth Management &
      Market Outlook 2024
      `,
      link: "#",
      imageUrl: "/Equity/fin.png",
    },
    {
      title: `Wealth Management &
      Market Outlook 2024
      `,
      link: "#",
      imageUrl: "/Equity/fin.png",
    },
    {
      title: `Wealth Management &
      Market Outlook 2024
      `,
      link: "#",
      imageUrl: "/Equity/fin.png",
    },
  ];
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <ContactFormModal openModal={openModal} setOpenModal={setOpenModal} />
      <div className="lg:h-screen h-[32rem]  relative ">
        <div className="w-full h-full ">
          <img
            src="/AboutUsPage/bg.jpg"
            alt=""
            className="object-cover w-full h-full absolute top-0 z-10"
          />
        </div>
        <div className="absolute top-0 z-20 bg-black bg-opacity-50 w-full h-full flex flex-col justify-center lg:justify-end  gap-3 ">
          {/* <h1 className="text-center text-blue-400 font-bold sm:text-6xl text-3xl">
            Investment Research
          </h1> */}

          <h1 className="sm:text-5xl font-semibold text-2xl text-white  sm:px-24 pb-10 p-5 text-left">
            If we buy the business as a business and not as a stock speculation,
            then it becomes personal. <br /> We want it to be personal.
          </h1>
        </div>
      </div>
      <section>
        <div className="flex flex-row divide-x-4 justify-center items-center gap-4 p-4">
          <div className="flex flex-col justify-center items-center p-4">
            <p className="text-xl font-bold tracking-widest">WEALTHTRUST</p>
            <p className="text-center tracking-widest">Capital Services</p>
          </div>
          <div className="flex flex-col justify-center items-center p-4 text-xl font-bold">
            <h2>Investment</h2>
            <h2>Research</h2>
          </div>
        </div>
        <div className="lg:px-72 text-xl p-4 text-center">
          Our investment research team brings to you un-biased, in-depth
          analysis on structural trends, macro-economics, sectoral trends and
          funamental research on securities ranging from equities, currencies to
          fixed income.
        </div>
      </section>
      <section className="sm:px-24 p-4">
        <h2 className="text-3xl  font-semibold py-5 ">
          Our Research Philosopy Rests On 4 Pillars
        </h2>
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 flex flex-col items-start justify-center  py-4">
          {data.map((item, index) => {
            return (
              <div
                className="w-full flex flex-col justify-center items-center"
                key={index}
              >
                <div className="w-56 h-56 object-cover overflow-hidden rounded-full bg-white my-3 shadow-xl hover:scale-105 cursor-pointer">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="object-cover w-full h-full"
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
      <section className="sm:px-24 p-4 bg-black text-white py-10">
        <h2 className="sm:text-4xl text-2xl font-bold py-10 ">
          Our Approach To Idea Generation
        </h2>
        <div className="lg:grid lg:grid-cols-7 flex flex-col gap-3 py-10">
          <div className="flex flex-col gap-5 w-25 ">
            <h3 className="sm:text-2xl text-xl font-bold text-center">
              Sectoral Trends
            </h3>
            <p className="text-center">
              We look out for macro trends in the markets in terms of sector
              rotation and flow of money
            </p>
          </div>
          <div className="w-full h-32 lg:w-auto lg:h-auto object-contain">
            <img
              src="/Equity/grid.png"
              alt=""
              className="rotate-90 opacity-40 lg:rotate-0 object-contain w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-5 w-25">
            <h3 className="sm:text-2xl text-xl font-bold text-center">
              Business Quality
            </h3>
            <p className="text-center">
              Quality matters and it acts as our downside protection. We gauge
              businesses on efficiency ratios and other qualitative factors.
            </p>
          </div>
          <div className="w-full h-32 lg:w-auto lg:h-auto object-contain">
            <img
              src="/Equity/grid.png"
              alt=""
              className="rotate-90 opacity-75 lg:rotate-0 object-contain w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-5 w-25">
            <h3 className="sm:text-2xl text-xl font-bold text-center">
              Market Trends
            </h3>
            <p className="text-center">
              Enables us to learn about prevailing market conditions and make
              calls accordingly.
            </p>
          </div>
          <div className="w-full h-32 lg:w-auto lg:h-auto object-contain">
            <img
              src="/Equity/grid.png"
              alt=""
              className="rotate-90 lg:rotate-0 object-contain w-full h-full"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="sm:text-2xl text-xl font-bold text-center">
              Portfolio Construction
            </h3>

            <div className="w-full h-32 lg:w-auto lg:h-auto object-contain">
              <img
                src="/Equity/fin.png"
                alt=""
                className="rotate-90 lg:rotate-0 object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="sm:px-24 p-4  py-10">
        <h2 className="text-4xl  font-semibold pb-10 ">
          Our Research Includes
        </h2>
        <div className=" flex lg:flex-row flex-col gap-5">
          <div className="lg:w-1/2 w-full flex flex-col gap-5">
            <div className="flex flex-col justify-center items-start">
              <h3 className="lg:text-xl text-lg font-bold ">
                India Equity Research
              </h3>
              <p>
                India Equity Research, includes fundamental research on listed
                Indian equities. The research team covers 5+ sectors and 250+
                equities.
              </p>
            </div>
            <div className="flex flex-col justify-center items-start">
              <h3 className="lg:text-xl text-lg font-bold ">
                Global Macro-Economic Research
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
                Equity Solutions
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
      </section>
      <section className="sm:px-24 p-4 ">
        <h2 className="text-4xl  font-semibold pb-10 ">Read Our Research</h2>
        <div className="lg:grid lg:grid-cols-4 sm:grid-cols-2 flex flex-col gap-5 py-5">
          {research_articles.map((item, index) => {
            return (
              <div className="p-4" key={index}>
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="https://dummyimage.com/1203x503"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  {item.title}
                </h2>
                {/* <p className="text-base leading-relaxed mt-2">
                      Swag shoivdigoitch literally meditation subway tile tumblr
                      cold-pressed. Gastropub street art beard dreamcatcher
                      neutra, ethical XOXO lumbersexual.
                    </p> */}
                <Link
                  className="text-indigo-500 inline-flex items-center mt-3 !cursor-pointer"
                  href={item.link}
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <section className="sm:px-24 p-4  lg:py-10 flex lg:flex-row flex-col gap-10">
        <div className="lg:w-2/3 w-full grid grid-cols-3 gap-3 justify-between items-center lg:p-10">
          <img src="/Equity/gen1.png" alt="" />
          <img src="/Equity/gen2.png" alt="" />
          <img src="/Equity/gen3.png" alt="" />
        </div>
        <div className="lg:w-1/3 w-full flex flex-col justify-start items-start gap-5">
          <h2 className="lg:text-xl text-lg font-bold">
            For Complete Access To Our Investment Research
          </h2>
          <div className="flex flex-row justify-start items-center gap-4">
            <p
              // href="/aboutus"
              onClick={() => setOpenModal(true)}
              className={`btn text-primary border-primary hover:bg-primary hover:text-white bg-transparent`}
            >
              Contact Us
            </p>
            <Link
              href="https://calendly.com/wealthtrustcapitalservices/30min"
              target="_blank"
              className={`btn btn-primary text-white`}
              // onClick={() => setOpenModal(true)}
            >
              Join our workshop
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-row divide-x-4 justify-center items-center gap-4 p-4">
          <div className="flex flex-col justify-center items-center p-4">
            <h3 className="text-xl font-bold tracking-widest">WEALTHTRUST</h3>
            <p className="text-center tracking-widest">Capital Services</p>
          </div>
          <div className="flex flex-col justify-center items-center p-4 text-xl ">
            <h3>Mutual Funds</h3>
            <h2 className="font-bold">Research</h2>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-4 text-xl font-bold">
          <h2>
            We look <span className="text-green-600">Forward</span>
          </h2>
        </div>
        <div className="lg:px-72 text-xl p-4 text-center">
          Unlock the Exclusive World of Unparalleled Mutual Fund Research -
          Where We Stand Alone. Access multifaceted analysis of various aspects
          of these investment vehicles, including their historical performance,
          investment objectives, risk parameters, management teams, and fees.
        </div>
      </section>
      <section className="sm:px-24 p-4  py-10 flex lg:flex-row flex-col"></section>
      {/* <section className="flex justify-center items-center py-10">
        <form
          action="#"
          className="flex flex-col gap-4 rounded-lg bg-black w-full  lg:w-10/12 
shadow-xl md:px-24 p-4 "
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
            label="Location"
            placeholder="Enter Your city name"
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
      </section> */}
      <section className="sm:py-10 p-4 sm:px-24 bg-lightGreen">
        <div className="flex sm:flex-row flex-col justify-center items-center ">
          <div className="sm:w-1/2 w-full">
            <p className="text-2xl font-bold">WealthTrust Capital Services</p>
            {/* <p>
              213,2ND FLOOR, Truf Estate, Shakti Mill Lane, Mahalaxmi, 400011,
              Mumbai, Maharashtra, 400011
            </p> */}
          </div>
          <div className="flex flex-row gap-10 justify-end sm:w-1/2 w-full ">
            <Link
              href="https://pickright-server.s3.amazonaws.com/prod/disclosure//1703053105471_disclosure.pdf"
              className="text-xl font-bold text-primary"
            >
              Disclosures
            </Link>
            <Link
              href="https://pickright-server.s3.amazonaws.com/prod/disclosure//1695207184046_investorCharter.pdf"
              className="text-xl font-bold text-primary"
            >
              Investor Charter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
