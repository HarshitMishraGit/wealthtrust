"use client";
import CardComp2 from "@/components/HomePage/CardComp2";
import CarouselComp from "@/components/HomePage/CarouselComp";
import ContentComp from "@/components/HomePage/ContentComp";
import ContentComp1 from "@/components/HomePage/ContentComp1";
import ContentComp2 from "@/components/HomePage/ContentComp2";
import Hero from "@/components/HomePage/Hero";
import InvestPacks from "@/components/HomePage/InvestPacks";
import PortfoliCard from "@/components/HomePage/PortfoliCard";
import StatsComp from "@/components/HomePage/StatsComp";
import Testimonials from "@/components/HomePage/Testimonials";
import Workshops from "@/components/HomePage/Workshops";
export default function Home() {
  return (
    <>
      <Hero />
      <StatsComp />
      <PortfoliCard />
      {/* <InvestPacks /> */}
      {/* <CardComp2 /> */}
      {/* <Workshops /> */}
      <Testimonials />
      {/* <ContentComp /> */}
      {/* <ContentComp2 /> */}
    </>
  );
}
