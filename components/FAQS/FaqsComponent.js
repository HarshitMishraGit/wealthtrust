import React, { useState } from "react";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
function FaqsComponent({ faqs, Activeindex }) {
  const [activeIndex, setActiveIndex] = useState(Activeindex);

  const onQuestionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedFaqs = faqs.map((faq, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <li
        key={index}
        className={`cursor-pointer transition-all duration-300   ${
          active ? "bg-gray-800 rounded-lg p-4" : "border-b-2"
        }`}
      >
        <div
          className={`question py-4 transition-all duration-300 ${
            !active ? "bg-action-900  rounded-lg my-1 px-4" : "bg-transparent "
          } flex justify-between items-center`}
          onClick={() => onQuestionClick(index)}
        >
          <h3 className={`${active ? "text-white" : ""}`}>Q. {faq.question}</h3>
          <span className="transition  duration-300">
            {active ? (
              <IoIosArrowUp className="text-main ml-2 text-white"></IoIosArrowUp>
            ) : (
              <IoIosArrowDown className="text-main ml-2"></IoIosArrowDown>
            )}
          </span>
        </div>
        {active && (
          <div className={`answer  transition-all duration-300 text-white `}>
            Ans. {faq.answer}
          </div>
        )}
      </li>
    );
  });

  return <ul className="flex flex-col text-main ">{renderedFaqs}</ul>;
}

export default FaqsComponent;
