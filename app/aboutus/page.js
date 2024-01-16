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
import { Fade } from "react-awesome-reveal";
import TimeLine from "@/components/AboutUsPage/TimeLine";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
function page() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="min-h-screen ">
      <div className="h-[50rem] py-10 relative ">
        <div className="w-full h-full ">
          <img
            src="/AboutUsPage/headerImage.jpg"
            alt=""
            className="object-cover w-full h-full absolute top-0 z-10"
          />
        </div>
        <div className="absolute top-0 z-20 bg-black bg-opacity-50 w-full h-full pt-24 flex flex-row items-center gap-3 justify-center">
          <div className="lg:w-2/3 w-full p-4">
            <h1 className="text-center text-white font-bold text-5xl ">
              About Us
            </h1>
            <p className="sm:text-xl text-lg text-white sm:px-32 pt-10 p-4 text-center">
              At WealthTrust Capital Services, we are more than financial
              advisors. We are your partners in prosperity with a commitment to
              transparency, expertise, and personalized solutions, we guide you
              on a journey of financial growth and success.
            </p>
          </div>
        </div>
      </div>

      <section className="p-2 py-10   overflow-hidden flex flex-col gap-5 justify-center items-center ">
        <Fade direction="up" triggerOnce>
          <h2 className="text-4xl  text-center font-bold">Mission</h2>
          <p className="text-xl  text-center  lg:px-48 p-0 ">
            To be the leading financial consulting firm that's synonymous with
            precision, profit and progress. To be hailed as the most reliant and
            realistic advisors providing pragmatic insights based on extensive
            research. To establish ourselves as the most preferred agency in
            portfolio management services with optimal and exceptional strategic
            acumen.
          </p>
        </Fade>
      </section>
      <section className="p-2 py-10 bg-lightGreen   overflow-hidden  flex flex-col gap-5 justify-center items-center ">
        <Fade direction="up" triggerOnce>
          <h2 className="text-4xl text-center font-bold">Vision</h2>
          <p className="text-xl  text-center  lg:px-48 p-0">
            To map, manage and multiply client's investment by providing
            adequate information, appropriate advice and excellent service. To
            be the hallmark of brilliance with distinctive traits and tactics in
            our line of business.
          </p>
        </Fade>
      </section>
      <section className="sm:p-5 p-4 py-12 sm:min-h-[24rem] flex flex-col gap-5 justify-center items-center overflow-hidden">
        <Fade direction="up" triggerOnce>
          <h2 className=" text-4xl  sm:py-5 py-2 text-center font-bold">
            Our Values
          </h2>

          <div className="sm:grid lg:grid-cols-4 sm:grid-cols-2  gap-6 flex flex-col items-start justify-center">
            <div className="w-full flex flex-col justify-center items-center">
              <div className="w-56 h-56 rounded-full bg-primary flex justify-center items-center text-white">
                <p className="text-2xl font-bold text-center">Integrity </p>
              </div>
              <div className="flex flex-col justify-center items-center py-3">
                <p className="text-center">
                  Conduct the business with highest grade of ethics. Be morally
                  and professionally correct each and every time.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <div className="w-56 h-56 rounded-full bg-primary flex justify-center items-center text-white">
                <p className="text-2xl font-bold text-center">Quality </p>
              </div>
              <div className="flex flex-col justify-center items-center py-3">
                <p className="text-center">
                  We will always uphold the uppermost standards in all our
                  offerings and services.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <div className="w-56 h-56 rounded-full bg-primary flex justify-center items-center text-white">
                <p className="text-2xl font-bold text-center">Honesty </p>
              </div>
              <div className="flex flex-col justify-center items-center py-3">
                <p className="text-center">
                  We will carry-out our business with utmost trustworthiness and
                  live up to the confidence and dependence established and
                  associated with us.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <div className="w-56 h-56 rounded-full bg-primary flex justify-center items-center text-white">
                <p className="text-2xl font-bold text-center">
                  Commitment to Customer
                </p>
              </div>
              <div className="flex flex-col justify-center items-center py-3">
                <p className="text-center">
                  We will always strive to ensure that our customers thrive
                  through our premium service and support at all times.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      {/* <section className="flex flex-col  px-10 py-10 bg-primary sm:min-h-[24rem] rounded-lg justify-center items-center">
        <HiLightBulb size={50} className="text-yellow-500" />
        <p className="sm:text-4xl text-lg text-center sm:p-16 lg:px-48 p-0 text-white inline-flex">
          <FaQuoteLeft />
          The goal of a successful investor is to find the one thing everyone
          agrees on and get there first.
          <FaQuoteRight className="text-right" />
        </p>
        <p className="sm:text-4xl text-lg text-right  text-white">
          - Howard Marks
        </p>
      </section> */}
      <section className="py-5">
        <TimeLine />
      </section>
      {/* <section className="py-5 sm:py-10">
        <h2 className="sm:text-5xl texxt-2xl text-center">Our Experties</h2>
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
              We invest in your development, offering opportunities for skill
              enhancement and career advancement.
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
              Contribute to shaping the future of financial empowerment and make
              a meaningful impact on people's lives.
            </p>
          </div>
        </div>
      </section> */}
      <section className="pt-5 sm:pt-10">
        <div className="h-[30rem] relative">
          <div className="w-full h-full ">
            <img
              src="/AboutUsPage/bg.jpg"
              alt=""
              className="object-cover w-full h-full absolute top-0 z-10"
            />
          </div>
          <div className="absolute top-0 z-20 bg-black bg-opacity-50 w-full h-full flex  gap-3 justify-center items-center p-3">
            <div className="sm:w-[32rem]  w-full bg-white p-5 flex flex-col gap-5 items-center shadow-lg">
              <h2 className="text-4xl  text-center font-semibold">
                Meet Our Experts
              </h2>
              <p>
                Get in touch with any one of empanelled experts to onboard you
                in the journey towards financial empowerment. The cruise will be
                exciting for sure and the destination will be as per your
                expectations or book a call back right away!
              </p>
              <Button
                className="w-fit px-5 py-2 mx-auto bg-primary text-white"
                onClick={() => {
                  window.location = "/team";
                }}
              >
                {" "}
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 sm:py-10">
        <h2 className="text-4xl  text-center font-semibold">Our Offices</h2>
        <div className="flex flex-col lg:flex-row-reverse divide-y-1 gap-10 sm:p-10">
          <div className="lg:w-1/2 w-full shadow-xl rounded-lg  p-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.2365004956473!2d72.81131627710994!3d18.965159909614236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf465d27a889%3A0x567c17b69e7d49f!2sWealthtrust%20Capital%20Services!5e0!3m2!1sen!2sin!4v1704831149772!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
          <div className="lg:w-1/2 w-full shadow-xl rounded-lg p-5">
            <div className="w-full h-[20rem] object-contain ">
              <img
                src="/AboutUsPage/building.png"
                alt=""
                className="object-contain w-full h-full object-top"
              />
            </div>
            <h3 className="text-center font-semibold text-lg py-5">
              Office Address
            </h3>
            <p className="text-center">
              Office Number 1, Aikya Signature, Naushir Barucha Marg, Sleater
              Road, Tardeo, Mumbai - 400007
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
