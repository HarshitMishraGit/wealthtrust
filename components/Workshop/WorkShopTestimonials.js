import React from "react";
import { IoIosStar } from "react-icons/io";
import Carousel from "react-multi-carousel";
import { isMobile, isTablet, isBrowser } from "react-device-detect";
import "react-multi-carousel/lib/styles.css";
function WorkShopTestimonials() {
  const testimonials = [
    {
      rating: 3,
      review:
        "Joining Wealth Trust Capital Services' financial planning workshop was a decision that significantly enriched my financial literacy. The workshop seamlessly blended theoretical concepts with practical strategies, providing me with a holistic understanding of wealth management. The instructors were not only knowledgeable but also approachable, making complex financial topics digestible. This workshop has equipped me with the tools to navigate the intricacies of personal finance with confidence. I highly recommend it to anyone seeking a comprehensive and enlightening financial education.",
      name: "Aastha Mishra",
      // designation: "CEO, ABC Company",
      imageUrl: `/Workshop/user.png`,
    },
    {
      rating: 3,
      review:
        "Attending the financial planning workshop organized by Wealth Trust Capital Services was a game-changer for me. The insights provided were not only comprehensive but also tailored to my financial goals. The presenters demonstrated a deep understanding of the intricacies of wealth management, leaving me thoroughly impressed. The workshop has empowered me to make informed decisions, and I highly recommend it to anyone serious about securing their financial future.",
      name: "Tanya Bharadwaj",
      // designation: "CEO, ABC Company",
      imageUrl: `/Workshop/user.png`,
    },
    {
      rating: 3,
      review: `The financial planning workshop conducted by Wealth Trust Capital Services was nothing short of exceptional. The speakers exhibited a profound grasp of the financial landscape and imparted practical knowledge that I could immediately apply to my own situation. The interactive sessions and real-life case studies added immense value, making it a worthwhile investment of my time. I now have a clearer roadmap for my financial journey, thanks to the valuable insights gained from this workshop.`,
      name: "Sooraj Verma",
      // designation: "CEO, ABC Company",
      imageUrl: `/Workshop/user.png`,
    },
  ];
  let deviceType;
  if (isMobile) {
    deviceType = "mobile";
  } else if (isTablet) {
    deviceType = "tablet";
  } else if (isBrowser) {
    deviceType = "desktop";
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };
  return (
    <div className="py-10">
      {/* <h3 className="text-center font-thin text-white">Don't take our words</h3>
      <h1 className="text-center font-bold text-3xl text-white">
        See what fellow investors & traders have to say
      </h1> */}
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px flex flex-row justify-center py-5"
      >
        {testimonials.map((item, index) => {
          return (
            <div
              className="flex flex-col justify-between  w-96 gap-5 bg-white rounded-2xl p-10 h-full"
              key={index}
            >
              <div className="flex gap-1 items-center justify-center">
                {Array(item.rating)
                  .fill()
                  .map((_item, index) => {
                    return (
                      <IoIosStar
                        className={`text-yellow-500 ${
                          index == 1 ? "text-5xl -mt-10" : "text-2xl"
                        }`}
                        key={index}
                      />
                    );
                  })}
              </div>
              <div>
                <p className="text-center">"{item.review}"</p>
              </div>

              <div className="flex flex-row gap-5 items-center justify-center">
                <div className="w-10 h-10 object-cover ">
                  <img
                    loading="lazy"
                    src={item.imageUrl}
                    alt={item.name}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <div className="flex flex-col justify-center items-end">
                  <p>{item.name}</p>
                  <p>{item?.designation}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default WorkShopTestimonials;
