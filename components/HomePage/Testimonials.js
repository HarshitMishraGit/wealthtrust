import React from "react";
import { IoIosStar } from "react-icons/io";
import Carousel from "react-multi-carousel";
import { isMobile, isTablet, isBrowser } from "react-device-detect";
import "react-multi-carousel/lib/styles.css";
function Testimonials() {
  const testimonials = [
    {
      rating: 3,
      review:
        "In an era where wealth managers push instruments and schemes with the vested interest of meeting personal targets, the team at Wealth Trust Capital comes as a welcome change. The team's dexterity, deftness in dealing, dedication and in-depth knowledge is self-evident from the results and rewards I reap at the end of each financial year.",
      name: "Mr. Siddharth Punamiya",
      // designation: "CEO, ABC Company",
      imageUrl: `/HomePage/user1.png`,
    },
    {
      rating: 3,
      review:
        "I am pleased to offer my endorsement for Sneha, a proficient wealth manager. She took the time to understand my long and short-term financial goals, crafting a tailored portfolio accordingly. From that point onward, she and her team have capably overseen all aspects. As a newcomer to investments, I greatly appreciated Sneha's expertise. Trusting someone with your finances can be a challenge, but having attended her workshops as a leap.club member, I already had a foundation of trust in place. I have confidence in Sneha's capabilities and look forward to continued growth with her guidance.",
      name: "Ankita Arora",
      // designation: "CEO, ABC Company",
      imageUrl: `/HomePage/user4.png`,
    },
    {
      rating: 3,
      review: `I am incredibly grateful to have had Sneha Jain as my trusted financial advisor. Her expertise, dedication, and personalized guidance has been invaluable on my journey towards financial security. There are plethora of financial advisors, however, the reason I chose to go with her is because she is authentic, honest and resilient not only as a person but also with her work.
        I highly recommend Sneha to anyone seeking a reliable partner in managing their financial future.`,
      name: "Yashvi Vira",
      // designation: "CEO, ABC Company",
      imageUrl: `/HomePage/user5.png`,
    },
    {
      rating: 3,
      review:
        "I will always maintain that one can simply entrust Wealth Trust Capital to empower you and enrich you financially. They are the very definition of wealth creators. They leave no stones unturned to achieve what the client aspires from their investment. There are fewer teams who can build financial security and boost financial profitability the way Wealth Trust Capital does. It is because of the prowess that comes from months of research. They have always lived and delivered beyond my expectations.",
      name: "Mr. Rahul Bhalekar",
      // designation: "CEO, ABC Company",
      imageUrl: `/HomePage/user2.png`,
    },
    {
      rating: 3,
      review:
        "I have been very vocal in my acknowledgment and appreciation for Ms. Sneha, CEO at Wealth Trust Capital for her professionalism, prowess, promptness, proficiency and personal interventions while dealing with clients. Personally, I have seen immense appreciation of my investments across diversified sectors and timelines. I haven't come across a more knowledgeable person than Ms. Sneha who leads from the front.",
      name: "Mr. Pranav Jhaveri",
      // designation: "CEO, ABC Company",
      imageUrl: `/HomePage/user3.png`,
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
      <h3 className="text-center font-thin">Don't take our words</h3>
      <h1 className="text-center font-bold text-3xl">
        See what fellow investors & traders have to say
      </h1>
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

export default Testimonials;
