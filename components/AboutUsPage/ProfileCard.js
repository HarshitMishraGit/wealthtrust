import React from "react";
import { ImLinkedin } from "react-icons/im";
import Link from "next/link";
function ProfileCard(props) {
  const { imageUrl, name, designation, social, description } = props.user;
  const { keyval } = props;
  return (
    <div
      className="flex flex-col sm:flex-row w-full  bg-white rounded-lg gap-5 shadow-xl hover:scale-105 cursor-pointer hover:shadow-2xl"
      key={keyval}
    >
      <div className="sm:w-1/3 sm:min-w-96   object-cover w-full h-96 sm:h-auto object-top">
        <img
          src={imageUrl}
          alt={name}
          height={100}
          className="object-cover sm:rounded-l-lg rounded-t-lg sm:rounded-tr-none object-top w-full h-full"
        />
      </div>
      <div className="sm:w-2/3 sm:p-2 p-6">
        <div className="flex flex-col ">
          <p className="font-bold">{name}</p>
          <p className="text-blue-500">{designation}</p>
          <div className="social">
            <div className=" w-10">
              <Link href={social.linkedIn}>
                <ImLinkedin className="text-[#0277b5] " size={25} />
              </Link>
            </div>
          </div>
          <p className="text-sm py-4">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
