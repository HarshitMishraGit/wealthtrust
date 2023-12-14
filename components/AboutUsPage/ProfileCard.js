import React from "react";
import { ImLinkedin } from "react-icons/im";
import Link from "next/link";
function ProfileCard(props) {
  const { imageUrl, name, designation, social, description } = props.user;
  return (
    <div className="flex flex-col sm:flex-row w-full  bg-white rounded-lg gap-5 shadow-xl">
      <div className="sm:w-1/3 sm:min-w-96   object-cover w-full h-96 sm:h-auto object-top">
        <img
          src={imageUrl}
          alt=""
          height={100}
          className="object-cover sm:rounded-l-lg rounded-t-lg sm:rounded-tr-none object-top w-full h-full"
        />
      </div>
      <div className="sm:w-2/3 p-2">
        <div className="flex flex-col gap-4 ">
          <p className="font-bold">{name}</p>
          <p className="">{designation}</p>
          <p className="text-green-800 text-sm">{description}</p>
        </div>
        <div className="social py-2">
          <Link href={social.linkedIn}>
            <ImLinkedin className="text-[#0277b5]" size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
