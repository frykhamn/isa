import React from "react";
import video from "./../../../assets/video.png";
import { Link } from "react-router-dom";

const VideoComponent = ({ title, subtitle, videoLink }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center w-full">
        <h2 className="font-cor text-xl upercase">{title}</h2>
        <div className="border-b-2 border-current w-28"></div>
      </div>
      <h3 className="text-center text-2xl font-cor font-bold uppercase mb-4 mt-6">
        {subtitle}
      </h3>
      <div className="self-center w-4/5 lg:max-w-[978px] aspect-h-9  mt-10 flex gap-5 md:flex-row flex-col justify-center">
        <img src={video} alt="" className="md:w-40"/>
        <img src={video} alt="" className="md:w-40"/>
        <img src={video} alt="" className="md:w-40"/>
        {/*      <iframe
          className="w-full h-full"
          src={videoLink}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
  */}
      </div>
      <p className="mb-4 pt-10 self-center max-w-[32rem] leading-loose">
        Self-care is about having everything you need to take care of yourself.
        Here tools are offered so that you can take care of yourself.
        Meditations, breathing exercises, yin yoga. What does your body long for
        in order to become friends with itself?
      </p>
      <p className="pt-4 self-center max-w-[32rem] leading-loose">
        Video material or audio files. Choose what suits you. You can find more recordings <Link className="text-textAcc">Here</Link>
      </p>
    </div>
  );
};

export default VideoComponent;
