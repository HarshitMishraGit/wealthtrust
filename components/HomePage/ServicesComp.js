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
        description: `3rd Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quo.`,
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
              <div className="bg-lightColor px-3 py-7 shadow-lg relative ">
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
