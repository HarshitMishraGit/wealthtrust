import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function CarouselComp2() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);
  const data = [
    { imageUrl: "/HomePage/Carousel/1.jpg" },
    { imageUrl: "/HomePage/Carousel/2.jpg" },
    // { imageUrl: "/HomePage/Carousel/1.jpg" },
    // { imageUrl: "/HomePage/Carousel/1.jpg" },
  ];
  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);
  return (
    <div className="flex flex-row justify-center items-center relative">
      <button
        onClick={scrollPrev}
        className="absolute z-10 left-5 transition-all duration-300 hover:bg-gray-300 bg-gray-100 bg-opacity-25 hover:bg-opacity-100 rounded-full"
      >
        <IoIosArrowBack size={25} className="m-2 text-gray-600" />
      </button>
      <div className="embla !p-0 w-full">
        <div className="embla__viewport " ref={emblaRef}>
          <div className="embla__container ">
            {data.map((item, index) => {
              return (
                <div
                  className="w-[20rem] embla__slide h-auto md:h-[100vh]"
                  key={index}
                >
                  <div className="w-full  cursor-pointer  items-start justify-center h-full object-cover">
                    <img
                      src={item.imageUrl}
                      alt="img"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button
        onClick={scrollNext}
        className="absolute z-10 right-5 transition-all duration-300 hover:bg-gray-300 bg-gray-100 bg-opacity-25 hover:bg-opacity-100 
        rounded-full"
      >
        <IoIosArrowForward size={25} className="m-2 text-gray-600" />
      </button>
    </div>
  );
}

export default CarouselComp2;
