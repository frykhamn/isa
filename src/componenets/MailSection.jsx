import React from "react";
import Button from "./Button";
import border from "../assets/border.png";

export const MailSection = () => {
  return (
    <div className="container mx-auto py-36 flex justify-center ">
      <form
        className="flex flex-col items-center  bg-gray-200 md:w-[900px]"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-4xl pt-4 font-bold text-center font-cor">
          Retreats and Workshops
        </h1>
        <p className="text-center px-4  mt-4 text-lg font-cor font-bold">
          Want to know whan I offer retreats and workshops? Sign up so you dontt
          have to keep track of this site.
        </p>
        <div className="flex flex-col pb-4 lg:flex-row gap-4 mt-4">
          <input
            type="text"
            placeholder="Full name"
            className="border-2 border-textAcc p-2 w-72 md:w-60"
          />
          <input
            type="email"
            placeholder="E-mail adress"
            className="border-2 border-textAcc p-2 w-72 md:w-60"
          />
          <button className="bg-gray-100 p-2 w-72 md:w-60">Subscribe</button>
        </div>
        <img src={border} className="w-full h-10" />
      </form>
    </div>
  );
};
