"use client";
import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import ContactFormModal from "./Modals/ContactFormModal";
import CarouselComp3 from "./HomePage/CarouselComp3";

function CTA() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <ContactFormModal openModal={openModal} setOpenModal={setOpenModal} />
      <section className="bg-lightGreen w-full">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 flex flex-col  lg:grid lg:grid-cols-2 sm:py-16 lg:px-6">
          {/* <img
            loading="lazy"
            className="w-full hidden dark:block rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
            src="https://datawrapper.dwcdn.net/RzmTJ/full.png"
            alt="comparison between mutual funds, bank savings and gold"
          /> */}
          <CarouselComp3 />
          <div className="mt-4 md:mt-0 ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black ">
              Let's grow together with WealthTrust Capital Services .
            </h2>
            <p className="mb-6 font-light md:text-lg text-black">
              At WealthTrust Capital Services, we don't just provide data; we
              deliver strategic insights that empower you to make informed
              investment decisions. Explore our Equity Research services and
              embark on a journey towards financial prosperity.
            </p>
            <Button
              onClick={() => setOpenModal(true)}
              className="inline-flex items-center text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Get started
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
        </div>
      </section>
    </>
  );
}

export default CTA;
