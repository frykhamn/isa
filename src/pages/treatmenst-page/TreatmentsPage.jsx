import React from 'react';
import Button from '../../componenets/Button';

const TreatmentsPage = () => {
    const treatments = [
        {
            title: 'Treatment 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            title: 'Treatment 2',
            content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            title: 'Treatment 3',
            content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
    ];

    return (
        <div>
            {treatments.map((treatment, index) => (
               <TreatmtsSection key={index} treatment={treatment}></TreatmtsSection>
            ))}
        </div>
    );
};

export default TreatmentsPage;


const TreatmtsSection = ({treatment}) => {
    return (
        <div>
            <h1>{treatment.title}</h1>
            <p>{treatment.content}</p>
            <Button text="Book Now" />
        </div>
    );
}