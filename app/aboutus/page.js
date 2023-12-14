"use client";
import ProfileCard from "@/components/AboutUsPage/ProfileCard";
import React from "react";

function page() {
  const research_team = [
    {
      name: "Amitabh Chaturvedi",
      designation: "Head of Research",
      description: ``,
      imageUrl: "/AboutUsPage/user.jpg",
      description: `Kartik is a SEBI Registered RIA &
      RA, he likes to read and so on`,
      social: {
        linkedIn: "#",
      },
    },
    {
      name: "Amitabh Chaturvedi",
      designation: "Head of Research",
      description: ``,
      imageUrl: "/AboutUsPage/user.jpg",
      description: `Kartik is a SEBI Registered RIA &
      RA, he likes to read and so on`,
      social: {
        linkedIn: "#",
      },
    },
    {
      name: "Amitabh Chaturvedi",
      designation: "Head of Research",
      description: ``,
      imageUrl: "/AboutUsPage/user.jpg",
      description: `Kartik is a SEBI Registered RIA &
      RA, he likes to read and so on`,
      social: {
        linkedIn: "#",
      },
    },
    {
      name: "Amitabh Chaturvedi",
      designation: "Head of Research",
      description: ``,
      imageUrl: "/AboutUsPage/user.jpg",
      description: `Kartik is a SEBI Registered RIA &
      RA, he likes to read and so on`,
      social: {
        linkedIn: "#",
      },
    },
  ];

  return (
    <div className="min-h-screen pt-24 p-4">
      <div>Empowering Your Financial Future,One Investment at a Time.</div>
      <div className="lg:grid lg:grid-cols-3 gap-3 sm:grid-cols-2 flex flex-col lg:p-10 p-4 w-full">
        {research_team.map((item, index) => {
          return <ProfileCard user={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default page;
