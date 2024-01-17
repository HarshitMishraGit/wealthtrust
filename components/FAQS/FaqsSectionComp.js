import React, { useState, useEffect } from "react";
import FaqsComponent from "@/components/FAQS/FaqsComponent";
function FaqsSectionComp({ faqs, className, SlideNavbarComp, height }) {
  return (
    <div
      className={`lg:px-10 lg:pt-[10rem] pt-10 px-5 flex  flex-col lg:min-h-[100vh] bg-gray-200 gap-5 items-start overflow-y-scroll ${className} `}
      id="FaqsSection"
    >
      <div className="headingwithImage flex flex-col w-full justify-center items-start gap-5 p-4 ">
        <div className="heading ">
          <h2 className="lg:text-4xl text-lg  font-bold">
            (FAQs) Frequently Asked Questions ?
          </h2>
        </div>
      </div>
      <div className=" p-4 min-h-full w-full divide-y-4">
        {faqs && <FaqsComponent faqs={faqs} Activeindex={0} />}
      </div>
    </div>
  );
}

export default FaqsSectionComp;
