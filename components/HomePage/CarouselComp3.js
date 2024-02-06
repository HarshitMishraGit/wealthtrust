import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
function CarouselComp3(props) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ delay: 2000 }, [Autoplay()]);

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
  const data = [
    {
      imageUrl: "https://datawrapper.dwcdn.net/DBiK1/full.png",
      altText: "rolling return graph",
    },
    {
      imageUrl: "https://datawrapper.dwcdn.net/RzmTJ/full.png",
      altText: "comparison between mutual funds, bank savings and gold",
    },
  ];
  return (
    <div className="flex flex-row justify-center items-center w-full">
      <button onClick={scrollPrev}>
        <FaArrowAltCircleLeft size={25} className="m-2 text-primary" />
      </button>
      <div className="embla !p-0 !w-full">
        <div className="embla__viewport " ref={emblaRef}>
          <div className="embla__container ">
            {data.map((item, index) => {
              return (
                <div className="embla__slide object-contain">
                  <img
                    loading="lazy"
                    className="w-full hidden dark:block object-contain  h-full"
                    src={item.imageUrl}
                    alt={item.altText}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button onClick={scrollNext}>
        <FaArrowAltCircleRight size={25} className="m-2 text-primary" />
      </button>
    </div>
  );
}

export default CarouselComp3;
