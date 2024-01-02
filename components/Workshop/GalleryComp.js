"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

export default function GalleryComp(props) {
  const { data } = props;
  return (
    <div className="py-10 gap-6 grid grid-cols-12 grid-rows-2  ">
      {data.map((item, index) => {
        return (
          <Card
            className="col-span-12 sm:col-span-6 lg:col-span-4 h-[300px] hover:scale-105 cursor-pointer hover:shadow-xl"
            key={index}
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              {/* <p className="text-tiny text-black uppercase font-bold">
            What to watch
          </p> */}
              <h4 className="text-black font-semibold text-lg">{item.title}</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/Workshop/1.jpg"
            />
          </Card>
        );
      })}
    </div>
  );
}
