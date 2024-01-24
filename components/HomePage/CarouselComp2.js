import React, { useCallback } from "react";
import Carousel from "react-multi-carousel";
import { isMobile, isTablet, isBrowser } from "react-device-detect";
import "react-multi-carousel/lib/styles.css";
function CarouselComp2() {
  const data = [
    {
      title:
        "Shiksha Se Samriddhi: क्या Share Market में आप बिना तैयारी का निवेश करने का सोच रहें है? | CNBC Awaaz",
      description:
        "Before diving into the stock market, it's crucial to gather essential information to safeguard your investments. This video provides key insights on what you need to know before venturing into the stock market, helping you avoid potential pitfalls. Stay informed for a secure investment journey!",
      link: "https://www.youtube.com/watch?v=HWRQtD7rOu0",
      imageUrl: "HomePage/media/3.jpg",
    },
    {
      title: "Why is the Global Economy nearing recession in 2023?",
      description:
        "There has been news about economic slowdown on a global scale. We have expressed our views on the causes and how is it different from the global financial crisis of 2008. We have talked about how investors can prepare themselves for the future.",
      link: "https://economictimes.indiatimes.com/industry/banking/finance/banking/why-is-the-global-economy-nearing-recession-in-2023/articleshow/97857098.cms",
      imageUrl: "HomePage/media/1.jpg",
    },
    {
      title: "Planning For Your Retirement",
      description:
        "Assume you had 1 crore as retirement corpus and you were to retire by 60. With a 4% rate , and an outflow of 80,000 monthly, you would be able to sustain for only 13 years 5 months. Ideally you should be able to sustain atleast 30 odd years after you...",
      link: "https://outlookmoney.com/outlook-money-spotlight/planning-for-your-retirement-8740",
      imageUrl: "HomePage/media/2.png",
    },
  ];
  return (
    <>
      <h2 className="mb-4 text-4xl tracking-tight font-bold text-center py-5">
        Featured In
      </h2>
      <div className="flex flex-col lg:grid lg:grid-cols-3 justify-center items-center relative  gap-10 p-5 lg:px-24">
        {data.map((item) => {
          return (
            <div
              className="min-h-full overflow-hidden bg-lightGreen rounded-xl shadow-lg"
              key={item.link}
            >
              <div
                href={item.link}
                className="lg:object-cover  object-contain lg:h-[20rem] h-auto "
              >
                <img
                  loading="lazy"
                  // className="rounded-t-lg"
                  src={item.imageUrl}
                  alt="Featured In"
                  className="lg:object-cover object-contain  w-full h-full "
                />
              </div>
              <div className="p-5">
                <a href={item.link}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight  ">
                    {item.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal ">{item.description}</p>
                <a
                  href={item.link}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg 0"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CarouselComp2;
