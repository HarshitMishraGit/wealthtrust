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
function page() {
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
            About Us
          </h1>
          <p className="sm:text-2xl text-white text-lg sm:px-24 pt-10 p-4 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
            magnam, reprehenderit ullam ut quia debitis ipsam perspiciatis
            dolorum provident sed adipisci? Incidunt, culpa soluta?
          </p>
        </div>
      </div>

      <section className="sm:p-10 p-4 py-10 h-[32rem] flex flex-col gap-10 justify-center items-center ">
        <Fade direction="up" triggerOnce>
          <p className="font-semibold text-3xl text-center">Our Values</p>
          <h2 className="sm:text-6xl text-4xl text-center font-bold">
            Passion | Action | Dedication
          </h2>
          <p className="sm:text-2xl text-lg text-center  lg:px-48 p-0">
            If you're interested in attending our workshops, simply fill out the
            form below with your details, including your name, email address,
            and preferred workshop location. Our team will get in touch with you
            when the workshop is scheduled in your city.
          </p>
        </Fade>
      </section>

      <section className="flex flex-col  px-10 py-10 bg-primary rounded-lg justify-center items-center">
        <HiLightBulb size={50} className="text-yellow-500" />
        <p className="sm:text-4xl text-lg text-center sm:p-16 lg:px-48 p-0 text-white">
          Quote
        </p>
      </section>
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
          <div className="absolute top-0 z-20 bg-black bg-opacity-50 w-full h-full flex  gap-3 justify-center items-center">
            <div className="sm:w-[32rem]  w-full bg-white p-5 flex flex-col gap-5 items-center">
              <h3 className="sm:text-4xl text-xl text-center font-semibold">
                Meet Our Experts
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                eveniet ratione eos consequuntur non tempora saepe architecto
                explicabo qui ex ullam nobis, perspiciatis nesciunt?
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
        <h3 className="sm:text-4xl text-xl text-center font-semibold">
          Our Offices
        </h3>
        <div className="flex flex-row divide-y-1 gap-10 sm:p-10">
          <div className="sm:w-1/2 w-full shadow-xl rounded-lg  p-5">
            <div className="w-full h-[15rem] object-cover ">
              <img
                src="/AboutUsPage/meetTeam.jpg"
                alt=""
                className="object-cover w-full h-full object-top"
              />
            </div>
            <h3 className="text-center font-semibold text-lg py-5">
              Office Number 1
            </h3>
            <p className="text-center">
              Office Number 1, Aikya Signature, Naushir Barucha Marg, Sleater
              Road, Tardeo, Mumbai - 400007
            </p>
          </div>
          <div className="sm:w-1/2 w-full shadow-xl rounded-lg p-5">
            <div className="w-full h-[15rem] object-cover ">
              <img
                src="/AboutUsPage/meetTeam.jpg"
                alt=""
                className="object-cover w-full h-full object-top"
              />
            </div>
            <h3 className="text-center font-semibold text-lg py-5">
              Office Name
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
