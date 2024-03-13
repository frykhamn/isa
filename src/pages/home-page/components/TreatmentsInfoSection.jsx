import React, { useState } from 'react'

export const TreatmentsInfoSection = () => {
  return (
    <section>
      <div className="w-24 flex justify-center">
        <h2>What dose your body crave?</h2>
      </div>
      <div className="py-4 px-4">
        <Dropdown />

      </div>
    </section>
  )
}




const treatments = [
  { id: 1, name: 'Massage Therapy' },
  { id: 2, name: 'Facial Treatment' },
  { id: 3, name: 'Body Scrub' },
  { id: 4, name: 'Manicure' },
  { id: 5, name: 'Pedicure' },
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('');

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectTreatment = (treatmentName) => {
    setSelectedTreatment(treatmentName);
    setIsOpen(false);
  };

  return (
    <div className="">
      <button
        onClick={toggleDropdown}
        className="font-robo w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        {selectedTreatment || "Select a treatment"}
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="py-1 text-gray-700">
            {treatments.map((treatment) => (
              <li
                key={treatment.id}
                className="font-robo px-4 py-2 hover:bg-gray-100 cursor-pointer"
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

