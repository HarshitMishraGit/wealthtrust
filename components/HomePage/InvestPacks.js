import React from "react";
import { Button } from "@nextui-org/button";
import { IoIosStar } from "react-icons/io";
function InvestPacks() {
  const data = [
    {
      badgeTitle: "Popular",
      badgeType: "popular",
      title: "Growth",
      desc: `STAYVAN introduces (1st time in India),
            Upfront + Sip strategy for investing
            directly in stocks.`,
      cagr: "15.5%",
      Min_investment: "₹ 5000",
      Ratings: "4.5",
      Rating_count: "1000",
      imageUrl: "/HomePage/invest_1.webp",
    },
    {
      badgeTitle: "New",
      badgeType: "New",
      title: "Growth",
      desc: `STAYVAN introduces (1st time in India),
            Upfront + Sip strategy for investing
            directly in stocks.`,
      cagr: "15.5%",
      Min_investment: "₹ 5000",
      Ratings: "4.5",
      Rating_count: "1000",
      imageUrl: "/HomePage/invest_1.webp",
    },
    {
      badgeTitle: "New",
      badgeType: "New",
      title: "Growth",
      desc: `STAYVAN introduces (1st time in India),
            Upfront + Sip strategy for investing
            directly in stocks.`,
      cagr: "15.5%",
      Min_investment: "₹ 5000",
      Ratings: "4.5",
      Rating_count: "1000",
      imageUrl: "/HomePage/invest_1.webp",
    },
    {
      badgeTitle: "New",
      badgeType: "New",
      title: "Growth",
      desc: `STAYVAN introduces (1st time in India),
            Upfront + Sip strategy for investing
            directly in stocks.`,
      cagr: "15.5%",
      Min_investment: "₹ 5000",
      Ratings: "4.5",
      Rating_count: "1000",
      imageUrl: "/HomePage/invest_1.webp",
    },
    {
      badgeTitle: "New",
      badgeType: "New",
      title: "Growth",
      desc: `STAYVAN introduces (1st time in India),
            Upfront + Sip strategy for investing
            directly in stocks.`,
      cagr: "15.5%",
      Min_investment: "₹ 5000",
      Ratings: "4.5",
      Rating_count: "1000",
      imageUrl: "/HomePage/invest_1.webp",
    },
    {
      badgeTitle: "New",
      badgeType: "New",
      title: "Growth",
      desc: `STAYVAN introduces (1st time in India),
            Upfront + Sip strategy for investing
            directly in stocks.`,
      cagr: "15.5%",
      Min_investment: "₹ 5000",
      Ratings: "4.5",
      Rating_count: "1000",
      imageUrl: "/HomePage/invest_1.webp",
    },
  ];
  return (
    <>
      <h1 className="text-center text-4xl">Trending Investpacks</h1>
      <p className="text-center text-sm">by WealthTrust Capital Services</p>
      <div className="flex flex-row flex-wrap p-5  sm:p-20 gap-10 justify-center items-center">
        {data.map((item, index) => {
          return (
            <div
              className="rounded-lg w-full md:w-96 glass relative"
              key={index}
            >
              <div
                className={`badge ${
                  item.badgeType == "New" ? "badge-accent" : "badge-secondary"
                } absolute top-3 left-3 z-10`}
              >
                <span>{item.badgeTitle}</span>
              </div>
              <figure>
                <img loading="lazy" src={item.imageUrl} alt="car!" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p className="text-sm font-thin">{item.desc}</p>

                <div className="flex flex-row justify-between gap-4 mt-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs">CAGR</span>
                    <span className="text-sm font-thin text-green-700">
                      {item.cagr}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs">Min. Investment</span>
                    <span className="text-sm font-thin ">
                      {item.Min_investment}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs">Ratings</span>

                    <span className="text-sm font-thin  inline-flex items-center gap-3">
                      <IoIosStar className="text-yellow-600" size={20} />
                      {item.Ratings} ({item.Rating_count})
                    </span>
                  </div>
                </div>
                <div className="card-actions justify-end w-full mt-3">
                  <Button className="border rounded-xl bg-transparent hover:text-white px-4 py-1 border-primary hover:bg-primary  w-full">
                    Subscribe Now
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default InvestPacks;
