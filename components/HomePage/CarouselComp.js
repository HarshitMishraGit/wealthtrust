import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
function CarouselComp(props) {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={item.src}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarouselComp;
