import { useState } from "react";
import { TreatmentsInfoSection } from "./components/TreatmentsInfoSection";
import { TreatmenstSection } from "./components/TreatmenstSection";
import VideoComponent from "./components/VideoSection";
import { RetreatsSection } from "./components/RetreatsSection";
import { BreathworkSection } from "./components/BreathworkSection";
import hero from "./../../assets/hero.png";
import { MailSection } from "../../componenets/MailSection";

export default function HomePage() {
  return (
    <>
      <section className="conatiner mx-auto pt-32 w-4/5 xl:max-w-[1000px]">
        <TreatmentsInfoSection></TreatmentsInfoSection>
      </section>
      <div className="border-2 mx-auto border-textAcc my-24 w-80 sm:w-96 md:w-[53rem]"></div>
      <section className="conatiner mx-auto w-4/5 xl:max-w-[1000px]">
        <TreatmenstSection></TreatmenstSection>
      </section>
      <div className="border-2 mx-auto border-textAcc my-24 w-80 sm:w-96 md:w-[53rem]"></div>
      <section className="conatiner mx-auto w-4/5 xl:max-w-[1000px]">
        <VideoComponent
          title="SELF CARE"
          subtitle="relaxation where you are"
          videoLink="your-video-url-here"
        />
      </section>
      <div className="border-2 mx-auto border-textAcc my-24 w-80 sm:w-96 md:w-[53rem]"></div>
      <section className="conatiner mx-auto w-4/5 xl:max-w-[1000px]">
  <RetreatsSection></RetreatsSection>
      </section>
      <section className="w-full h-[38rem] md:h-[42rem] xl:h-[48rem] mt-24 grid place-content-center border-2"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <BreathworkSection></BreathworkSection>
        </section>
        <section>
        <MailSection></MailSection>
        </section>
    </>
  );
}
