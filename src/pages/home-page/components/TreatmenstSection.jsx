import React from "react";
import wave from "../../../assets/wave.png";
import { FaHeart, FaRecycle } from "react-icons/fa";
import { PiHandsPrayingFill } from "react-icons/pi";

export const TreatmenstSection = () => {
  return (
    <div className="container mx-auto grid md:grid-cols-2 gap-6  items-center pt-12 px-4 lg:px-8 ">
      <h2 className="font-cor text-4xl md:text-5xl font-bold mb-16 pl-4">
        How can you get to know your nervous system?
      </h2>
      <div className="lg:col-span-1 pt-6">
        <div className=" ">
          <p className="text-sm text-textAcc font-bold mb-3">
            The Nervous System
          </p>
          <h3 className="font-cor font-bold text-3xl mb-3">
            An introductory conversation
          </h3>
          <p className="mb-6 max-w-[24rem]">
            If you haven't been attuned to your body before, it's not obvious
            how a dialogue could look. Therefore, you might need help starting
            to listen, talk, and be willing to connect with the body.
          </p>
        </div>
      </div>
      <div className="self-start">
        <ul className="px-2 py-10 bg-white flex flex-col justify-around h-[22rem] md:min-h-[28rem] max-w-[28rem] md:max-w-[28rem]">
          <li className="flex mb-3">
            <span className="mr-2 mt-2 pr-2 text-textAcc">
              <PiHandsPrayingFill></PiHandsPrayingFill>
            </span>
            <span className="">
              <span className="font-semibold">Relaxation</span>. Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical.
            </span>
          </li>
          <li className="flex mb-3">
            <span className="mr-2 mt-2  pr-2 text-textAcc">
              <FaRecycle></FaRecycle>
            </span>
            <span>
              <span className="font-semibold">Breathing</span>. Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical.
            </span>
          </li>
          <li className="flex mt-2">
            <span className="mr-2 pr-2 mt-2 text-textAcc">
              <FaHeart></FaHeart>
            </span>
            <span>
              <span className="font-semibold">Movement</span>. Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical.
            </span>
          </li>
        </ul>
      </div>
      <div className="relative md:max-h-[28rem] overflow-hidden rounded-lg">
        <img src={wave} alt="Body Illustration" className="object-fit md:w-full md:h-full " />
      </div>
    </div>
  );
};
