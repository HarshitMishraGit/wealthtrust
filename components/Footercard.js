import React from "react";

function Footercard(props) {
  const { imageUrl, title, keyval } = props;

  return (
    <div
      className="h-full w-full items-center shadow-xl p-2 justify-between flex flex-row gap-4 bg-black bg-opacity-50 backdrop-blur border border-gray-600  rounded-lg"
      key={keyval}
    >
      <div className="object-contain w-1/12 h-10">
        <img
          loading="lazy"
          src={imageUrl}
          alt={title}
          className="object-contain w-full h-full rounded-lg"
        />
      </div>
      <div className="text-sm sm:text-base flex flex-row w-11/12 ">{title}</div>
    </div>
  );
}

export default Footercard;
