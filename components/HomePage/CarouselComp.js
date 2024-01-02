import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
function CarouselComp(props) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);
  return (
    <div className="flex flex-row justify-center items-center">
      <button onClick={scrollPrev}>
        <FaArrowAltCircleLeft size={25} className="m-2 text-primary" />
      </button>
      <div className="embla !p-0 w-10/12 ">
        <div className="embla__viewport " ref={emblaRef}>
          <div className="embla__container ">
            <div className="w-[20rem] embla__slide h-[20rem]">
              <div className="w-full  cursor-pointer bg-white rounded-lg flex flex-col gap-5  lg:col-start-1 lg:row-start-1 hover:bg-primary p-10 hover:text-white group items-start justify-center h-full">
                {/* <HiCurrencyRupee size={30} className="" /> */}
                <p className="text-4xl font-bold text-blue-700 group-hover:text-white">
                  8%
                </p>
                <p className="text-xl font-semibold">
                  Indians invest in the markets.{" "}
                </p>
              </div>
            </div>
            <div className="w-[20rem] embla__slide h-[20rem]">
              <div className="w-full  bg-primary rounded-lg flex flex-col gap-5 lg:col-start-2 lg:row-start-1 cursor-pointerhover:bg-primary p-10 text-white transition-all duration-300 group items-start justify-center cursor-pointer  h-full">
                {" "}
                <p className="text-4xl font-bold">14%</p>
                <p className="text-xl font-semibold">
                  is what the equity markets returned on average in the past 20
                  years.
                </p>
              </div>
            </div>
            <div className="w-[20rem] embla__slide h-[20rem]">
              <div className="w-full  bg-white rounded-lg flex flex-col gap-5 lg:col-start-1 lg:row-start-2 cursor-pointer hover:bg-primary p-10 hover:text-white transition-all duration-300 group items-start justify-center h-full">
                {" "}
                <p className="text-xl font-semibold ">
                  Delay and lack of knowledge can cost you <s>thousands</s>{" "}
                  crores. Start today, safe tomorrow.
                </p>
              </div>
            </div>
            <div className="w-[20rem] embla__slide h-[20rem]">
              <div className="w-full  bg-white rounded-lg flex flex-col gap-5 lg:col-start-2 lg:row-start-2 cursor-pointer hover:bg-primary p-10 hover:text-white transition-all duration-300 group items-start justify-center h-full">
                {" "}
                <p className="text-xl font-semibold ">
                  Financial markets can seem complicated, so you might delay
                  your purchase and stick to bank savings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={scrollNext}>
        <FaArrowAltCircleRight size={25} className="m-2 text-primary" />
      </button>
    </div>
  );
}

export default CarouselComp;
