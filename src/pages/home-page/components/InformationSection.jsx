import React from "react";
import video from "../../../assets/video.png";

export const InformationSection = () => {
  return (
    <div className="container mx-auto grid md:grid-cols-2 gap-6  items-center pt-12 px-4 lg:px-8 ">
      <h2 className="font-cor text-5xl font-bold mb-16 pl-4">
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
      <div className="content-center col-span-2 md:px-5">
        <img src={video} alt="video" className="w-full h-full" />
      </div>
    </div>
  );
};
