import { useState } from "react";
import { TreatmentsInfoSection } from "./components/TreatmentsInfoSection";
import { TreatmenstSection } from "./components/TreatmenstSection";
import VideoComponent from "./components/VideoSection";
import { RetreatsSection } from "./components/RetreatsSection";
import { BreathworkSection } from "./components/BreathworkSection";
import hero from "./../../assets/hero.png";
import { MailSection } from "../../componenets/MailSection";
import { InformationSection } from "./components/InformationSection";

export default function HomePage() {



  return (
    <>
      <section className="conatiner mx-auto pt-32 md:w-4/5 xl:max-w-[1000px]">
        <TreatmentsInfoSection></TreatmentsInfoSection>
      </section>
      <div className="border-2 mx-auto border-textAcc my-24 w-80 sm:w-[36rem] md:w-[43rem] lg:w-[53rem] "></div>
      <section className="conatiner mx-auto w-4/5 xl:max-w-[1000px]">
      {/*   <TreatmenstSection></TreatmenstSection> */}
      <InformationSection></InformationSection>
      </section>
      <div className="border-2 mx-auto border-textAcc my-24 w-80 sm:w-[36rem] md:w-[43rem] lg:w-[53rem] "></div>
      <section className="conatiner mx-auto w-4/5 xl:max-w-[1000px]">
        <VideoComponent
          title="SELF CARE"
          subtitle="relaxation where you are"
          videoLink="your-video-url-here"
        />
      </section>
      <div className="border-2 mx-auto border-textAcc my-24 w-80 sm:w-[36rem] md:w-[43rem] lg:w-[53rem] "></div>
      <section className="conatiner mx-auto w-4/5 xl:max-w-[1000px]">
        <RetreatsSection></RetreatsSection>
      <MailSection></MailSection>
      </section>
      <section
        className="w-full h-[38rem] md:h-[42rem] xl:h-[48rem] mt-24 grid place-content-center"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <BreathworkSection></BreathworkSection>
      </section>
      <section>
      </section>
    </>
  );
}
