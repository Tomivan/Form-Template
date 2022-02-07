import React from "react";
import { BsInfoCircle } from "react-icons/bs";

export const Banner = () => {
  return (
    <div className="my-10 md:my-20">
      <div className="flex justify-center items-center bg-bannerpink px-4 py-4 mx-auto">
        <BsInfoCircle className="text-iconyellow font-bold text-7xl md:text-2xl" />
        <h4 className="text-sm md:text-sm font-normal font-circular leading-6 tracking-wide text-justify px-8">
          Tada! Get started with a free template. Can’t find what you are
          looking for? Search from the 1000+ available templates
        </h4>
      </div>
    </div>
  );
};