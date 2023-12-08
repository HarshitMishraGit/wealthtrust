"use client";
import ContentComp1 from "@/components/HomePage/ContentComp1";
import ContentComp2 from "@/components/HomePage/ContentComp2";
import Hero from "@/components/HomePage/Hero";
import StatsComp from "@/components/HomePage/StatsComp";
export default function Home() {
  return (
    <>
      <Hero />
      <StatsComp />
      <ContentComp1 />
      <ContentComp2 />
    </>
  );
}
