import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
function LockedResearchComp(props) {
  const { slides, options, data, setOpenModal } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, []);

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
  const coverImageUrl = data[data.length - 1].imageUrl;
  return (
    <div className="flex flex-row justify-center items-center relative">
      <div className="embla !p-0 w-10/12 ">
        <div className="embla__viewport " ref={emblaRef}>
          <div className="embla__container ">
            {data
              .filter((_, i) => i !== data.length - 1)
              .map((item, index) => {
                return (
                  <div
                    className="w-[20rem] embla__slide h-[20rem] object-contain"
                    key={index}
                  >
                    <img
                      src={item.imageUrl}
                      alt="investment research"
                      className="object-contain w-full h-full"
                    />
                  </div>
                );
              })}
            <div className="w-[20rem] embla__slide h-[20rem] relative ">
              <div className="gap-4  flex flex-col items-center justify-center absolute z-10 top-0 bottom-0 left-0 right-0 w-full h-full">
                <p>Read full research here</p>
                <p
                  // href="/aboutus"
                  onClick={() => setOpenModal(true)}
                  className={`btn  border-primary hover:bg-primary  bg-transparent hover:text-white`}
                >
                  Subscribe Here
                </p>
              </div>
              <div className="w-full h-full object-contain blur-sm ">
                <img
                  src={coverImageUrl}
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-10  absolute bottom-0 flex flex-row justify-center items-center">
        <button onClick={scrollPrev}>
          <IoMdArrowDropleft
            size={30}
            className="m-2 text-gray-600 active:scale-95 active:bg-gray-400 rounded-full transition-all duration-300"
          />
        </button>
        <button onClick={scrollNext}>
          <IoMdArrowDropright
            size={30}
            className="m-2 text-gray-600 active:scale-95 active:bg-gray-400 rounded-full transition-all duration-300"
          />
        </button>
      </div>
    </div>
  );
}

export default LockedResearchComp;
