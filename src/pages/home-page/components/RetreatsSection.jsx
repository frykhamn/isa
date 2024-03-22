import React from "react";
import gold from "../../../assets/gold.png";

export const RetreatsSection = () => {
  return (
    <div className="flex flex-col md:px-20">
      <h2 className="font-robo font-light text-3xl md:text4xl leading-relaxed font-mon">
        Upcoming retreats and workshops
      </h2>
      <p className="leading-loose py-6 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        non, dignissimos, nulla,
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-lg">
      <div className="flex flex-col">
        <div className="relative">
          <img
            className="h-56 w-full object-cover "
            src={gold}
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8">
          <h4 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            Incredible accommodation for your team
          </h4>
          <p className="mt-2 text-slate-500">
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
        </div>
      </div>
    </div>
  );
};
