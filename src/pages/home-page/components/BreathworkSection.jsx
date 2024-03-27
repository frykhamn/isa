import React from "react";
import circle from "./../../../assets/circle.png";
import Button from "../../../componenets/Button";

export const BreathworkSection = () => {
  return (
    <div className="grid md:grid-cols-2 md:border mx-auto md:max-w-[800px] py-10">
      <div className="col-1 px-8">
        <h1 className="uppercase text-4xl font-cor font-semibold text-textLight tracking-widest mb-4">
          breathwork
        </h1>
        <p className="text-white font-cor">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed vitae,
          omnis minus corporis corrupti quam quisquam dolorum quis quod dolore
          inventore dicta delectus iure ex aut, in provident, impedit
          reprehenderit! Aut velit similique minus voluptatem pariatur repellat,
          animi labore nam natus earum dolores cupiditate dolorum non culpa ad
          ut praesentium debitis! Atque, architecto similique veritatis hic nam
          eum expedita consequuntur! Temporibus delectus quam ab culpa, quaerat
          natus similique suscipit.
        </p>
        <div className="flex sm:flex-row flex-col gap-5 md:gap-10 mt-7">
          <Button text="1 on 1" />
          <Button text="Groups" />
        </div>
      </div>
      <div className="hidden md:flex sm:w-80 sm:h-80 sm:self-center ml-10">
        <img src={circle} alt="image of circle" />
      </div>
    </div>
  );
};
