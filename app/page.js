"use client";
import CTA from "@/components/CTA";
import CardComp2 from "@/components/HomePage/CardComp2";
import CarouselComp from "@/components/HomePage/CarouselComp";
import CarouselComp2 from "@/components/HomePage/CarouselComp2";
import ContentComp from "@/components/HomePage/ContentComp";
import ContentComp1 from "@/components/HomePage/ContentComp1";
import ContentComp2 from "@/components/HomePage/ContentComp2";
import Hero from "@/components/HomePage/Hero";
import InvestPacks from "@/components/HomePage/InvestPacks";
import PortfoliCard from "@/components/HomePage/PortfoliCard";
import ServiceCompParent from "@/components/HomePage/ServiceCompParent";
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

      <ServiceCompParent />
      <CarouselComp2 />
      <Testimonials />
      {/* <ContentComp /> */}
      {/* <ContentComp2 /> */}
      <CTA />
    </>
  );
}
