import React, { useState } from "react";
import gold from "../../../assets/gold.png";
import Button from "../../../componenets/Button";
import { Link } from "react-router-dom";

const treatments = [
  {
    id: 1,
    name: "Neuro Affective Touche",
    description:
      "N.A.T is a bodywork modality that works with the nervous system to help the body release trauma and stress. It is a gentle and non-invasive treatment that can help with a variety of issues such as anxiety, depression, and PTSD. It is also a great way to relax and unwind after a long day.",
  },
  {
    id: 2,
    name: "Aquatic Bodywork",
    description:
      "Aquatic bodywork is a form of bodywork that takes place in water. It is a gentle and relaxing treatment that can help with a variety of issues such as anxiety, depression, and PTSD. It is also a great way to relax and unwind after a long day.",
  },
  {
    id: 3,
    name: "Breathwork",
    description:
      "Breathwork is a form of bodywork that focuses on the breath. It is a gentle and relaxing treatment that can help with a variety of issues such as anxiety, depression, and PTSD. It is also a great way to relax and unwind after a long day.",
  },
  {
    id: 4,
    name: "Myofacial Release",
    description:
      "Myofacial release is a form of bodywork that focuses on the fascia. It is a gentle and relaxing treatment that can help with a variety of issues such as anxiety, depression, and PTSD. It is also a great way to relax and unwind after a long day.",
  },
  {
    id: 5,
    name: "Curam Recovery",
    description:
      "Curam recovery is a form of bodywork that focuses on the nervous system. It is a gentle and relaxing treatment that can help with a variety of issues such as anxiety, depression, and PTSD. It is also a great way to relax and unwind after a long day.",
  },
];

export const TreatmentsInfoSection = () => {
  const [selectedTreatment, setSelectedTreatment] = useState("");

  return (
    <section className="flex">
      <div className="flex mx-auto flex-col">
        <div className="w-80 md:w-[22rem] font-cor mx-auto mb-12 mt-14">
          <h2 className="text-center text-6xl tracking-wider md:text-6xl ">
            What dose your body crave?
          </h2>
        </div>
        {/* MOBILE */}
        <div className="py-4 px-4 md:hidden">
          <Dropdown
            selectedTreatment={selectedTreatment}
            setSelectedTreatment={setSelectedTreatment}
          />
          <div>
            {selectedTreatment && (
              <TreatmentCard
                treatment={treatments.find(
                  (treatment) => treatment.name === selectedTreatment
                )}
              />
            )}
          </div>
        </div>
        {/* ----------------------------------------- */}
        {/* DESKTOP */}
        <div className="hidden md:flex">
          <div className="mx-auto w-72 mt-2 ">
            <ul className="py-1 py-4">
              {treatments.map((treatment) => (
                <li
                  key={treatment.id}
                  className="font-robo w-full px-4 py-2 text-center 
                  border-b-2
                  hover:bg-textLight cursor-pointer"
                  onClick={() => setSelectedTreatment(treatment.name)}
                >
                  {treatment.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className="hidden md:flex md:w-1/2 lg:w-1/2 bg-cover bg-center" 
        style={{
          backgroundImage: `url(${gold})`,
        }}
      >
        <div className="self-center pl-5">
          {selectedTreatment && (
            <TreatmentCard
              treatment={treatments.find(
                (treatment) => treatment.name === selectedTreatment
              )}
            />
          )}
        </div>
      </div>
    </section>
  );
};

const TreatmentCard = ({ treatment }) => {
  return (
    <div className="mt-10 flex  flex-col gap-5 mb-4 p-2 mx-auto">
      <h3 className="font-robo text-2xl uppercase">{treatment.name}</h3>
      <p className="mt-2 mb-4 text-gray-700 max-w-72">
        {treatment.description}
        <span className="ml-2">
          <Link to="/treatments" className="text-textAcc">
            Read more...
          </Link>
        </span>
      </p>
      <Button text="Book" />
    </div>
  );
};

const Dropdown = ({ selectedTreatment, setSelectedTreatment }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectTreatment = (treatmentName) => {
    setSelectedTreatment(treatmentName);
    setIsOpen(false);
  };

  return (
    <div className="mx-auto">
      <div
        onClick={toggleDropdown}
        className="font-robo w-full px-4 py-2 text-left bg-white border border-gray-800
         rounded-md shadow-sm 
         focus:outline-none focus:ring-2 focus:ring-textAcc focus:border-textAcc
         flex justify-between cursor-pointer"
      >
        <span>{selectedTreatment || "Select a treatment"}</span>
        <span>
          <i className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </i>
        </span>
      </div>
      {isOpen && (
        <div
          className="absolute z-10 mt-2 bg-white border 
        border-gray-800 rounded-md shadow-lg"
        >
          <ul className="py-1 text-gray-700">
            {treatments.map((treatment) => (
              <li
                key={treatment.id}
                className="font-robo min-w-72 max-w-96 px-4 py-2 hover:bg-textAcc 
                cursor-pointer"
                onClick={() => selectTreatment(treatment.name)}
              >
                {treatment.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
