import React from "react";
import { IoIosStar } from "react-icons/io";

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

  return (
    <div className="py-10">
      <h3 className="text-center font-thin">Don't take our words</h3>
      <h1 className="text-center font-bold text-3xl">
        See what fellow investors & traders have to say
      </h1>
      <div className="lg:px-32 px-4 py-20 grid grid-cols-3 gap-10 justify-center items-center">
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
                    alt=""
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
      </div>
    </div>
  );
}

export default Testimonials;
