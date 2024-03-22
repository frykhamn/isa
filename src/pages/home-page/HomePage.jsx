import { useState } from "react";
import { TreatmentsInfoSection } from "./components/TreatmentsInfoSection";
import { TreatmenstSection } from "./components/TreatmenstSection";
import VideoComponent from "./components/VideoSection";

export default function HomePage() {
  return (
    <>
      <section className="conatiner mx-auto pt-32 w-4/5 xl:max-w-[1000px]">
        <TreatmentsInfoSection></TreatmentsInfoSection>
      </section>
      <div className="border-2 mx-auto border-textAcc my-32 w-80 sm:w-96 md:w-[42rem]"></div>
      <section className="conatiner mx-auto w-4/5 xl:max-w-[1000px]">
        <TreatmenstSection></TreatmenstSection>
      </section>
      <div className="border-2 mx-auto border-textAcc my-32 w-80 sm:w-96 md:w-[42rem]"></div>
      <section className="conatiner mx-auto w-4/5 xl:max-w-[1000px]">
        <VideoComponent
          title="SELF CARE"
          subtitle="relaxation where you are"
          videoLink="your-video-url-here"
        />
      </section>
      <div className="border-2 mx-auto border-textAcc my-32 w-80 sm:w-96 md:w-[42rem]"></div>
      <section className="conatiner mx-auto w-4/5 xl:max-w-[1000px]">
  
      </section>
    </>
  );
}
