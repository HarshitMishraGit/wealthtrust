import React from "react";
import { IoIosStar } from "react-icons/io";

function Testimonials() {
  const testimonials = [
    {
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      name: "John Doe",
      designation: "CEO, ABC Company",
      imageUrl: `/HomePage/user.png`,
    },
    {
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      name: "John Doe",
      designation: "CEO, ABC Company",
      imageUrl: `/HomePage/user.png`,
    },
    {
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      name: "John Doe",
      designation: "CEO, ABC Company",
      imageUrl: `/HomePage/user.png`,
    },
  ];

  return (
    <div className="py-10">
      <h3 className="text-center font-thin">Don't take our words</h3>
      <h1 className="text-center font-bold text-3xl">
        See what fellow investors & traders have to say
      </h1>
      <div className="lg:px-32 px-4 py-20 flex flex-row flex-wrap gap-10 justify-center items-center">
        {testimonials.map((item, index) => {
          return (
            <div
              className="flex flex-col w-96 gap-5 bg-white rounded-2xl p-10"
              key={index}
            >
              <div className="flex gap-1 items-center justify-center">
                {Array(item.rating)
                  .fill()
                  .map((_item, index) => {
                    return (
                      <IoIosStar className="text-yellow-500" key={index} />
                    );
                  })}
              </div>
              <div>
                <p>{item.review}</p>
              </div>

              <div className="flex flex-row gap-5 items-center ">
                <div className="w-10 h-10">
                  <img src={item.imageUrl} alt="" />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <p>{item.name}</p>
                  <p>{item.designation}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
