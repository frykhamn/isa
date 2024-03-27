import React from "react";
import gold from "../../../assets/gold.png";

import { Link, useNavigate } from "react-router-dom";

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
        {retreats.map((retreat, index) => (
          <Card key={index} retreat={retreat} />
        ))}
      </div>
    </div>
  );
};

const retreats = [
  {
    title: "Happy feet",
    date: "May 5th 2024",
    description:
      "2h workshop focusing on the feet. We will work with tune up balls and the body's connection to the ground. The workshop is held at the studio in Stockholm.",
    image: gold,
  },
  {
    title: "Yoga weekend",
    date: "June 23-25th 2024",
    description:
      "Weekend on Gotland with yoga, meditation and relaxation. We stay at the beautiful hotel Fabriken Furillen.",
    image: gold,
  },

];

const Card = ({ retreat }) => {
  const nav = useNavigate();
  const { title, description, image } = retreat;

  const handleNav = () => {
    nav("/retreats", { state: { title } });
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
      <div className="flex flex-col">
        <div className="relative">
          <img
            className="h-56 w-full ml-0"
            src={image}
            alt="information about retreat"
          />
          <span className="absolute top-16 left-10 right-0 bottom-0 max-w-20">
            <h2 className="uppercase text-4xl font-cor font-bold tracking-widest">{retreat.title}</h2>
          </span>
        </div>
        <div className="px-8 pb-8 pt-6">
          <h4 className="block mt-1 text-lg leading-tight font-medium text-black ">
            {retreat.date}
          </h4>
          <p className="mt-4 text-slate-500">
            {description}{" "}
            <span onClick={handleNav} className="text-blue-700 ml-2">
              Read more
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
