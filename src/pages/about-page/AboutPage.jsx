import React from 'react';
import { InfoSection } from './components/InfoSection';
import { CVSection } from './components/CVSection';

const AboutPage = () => {
    return (
        <><section className="conatiner mx-auto pb-20 pt-32 md:w-4/5 xl:max-w-[1000px]">
        <InfoSection></InfoSection>
      </section>
      <section className='bg-textAcc pb-20 pt-32'>
        <CVSection></CVSection>
        </section></>
    );
};

export default AboutPage;