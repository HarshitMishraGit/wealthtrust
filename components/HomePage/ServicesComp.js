import React from "react";
import CardComp from "./CardComp";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
function ServicesComp(props) {
  const { className, itemNumber } = props;
  const data = [
    [
      {
        title: "title",
        description: `1st Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quo.`,
      },
    ],
    [
      {
        title: "title",
        description: `2nd Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quo.`,
      },
    ],
    [
      {
        title: "title",
        description: `Explore the power of wealth creation with Mutual Funds at Wealth Trust. Our expertly curated investment solutions offer a gateway to a diversified portfolio, aligning with your financial aspirations. Discover the simplicity and effectiveness of Mutual Funds, where every investment is a step towards your financial success`,
      },
    ],
    [
      {
        title: "title",
        description: `4th Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quo.`,
      },
    ],
  ];
  return (
    <div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
        {data[itemNumber].map((item, index) => {
          return (
            <Fade key={index} spy={itemNumber + 1} appear={true}>
              <div className="bg-lightGreen px-3 py-7 shadow-lg relative ">
                <div className="w-full h-full relative overflow-hidden">
                  <p
                    className="text-black  pl-5 text-left"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesComp;
