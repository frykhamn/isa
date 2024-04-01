import React from 'react';
import Button from '../../componenets/Button';
import video from '../../assets/video.png';

const TreatmentsPage = () => {
    const treatments = [
        {
            title: 'N.I.A',
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptatibus, rerum. Maxime dolor ad dignissimos recusandae excepturi blanditiis esse beatae velit exercitationem est eveniet expedita nihil natus, soluta incidunt iusto voluptatibus? Numquam quidem iste dolorem eum sunt porro exercitationem, itaque modi accusamus vitae, voluptate hic nemo. Lorem ipsum, dolor sit ",
        },
        {
            title: "Breathwork",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptatibus, rerum. Maxime dolor ad dignissimos recusandae excepturi blanditiis esse beatae velit exercitationem est eveniet expedita nihil natus, soluta incidunt iusto voluptatibus? Numquam quidem iste dolorem eum sunt porro exercitationem, itaque modi accusamus vitae, voluptate hic nemo. Lorem ipsum, dolor sit ",
        },
        {
            title: 'Myofacial Release"',
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptatibus, rerum. Maxime dolor ad dignissimos recusandae excepturi blanditiis esse beatae velit exercitationem est eveniet expedita nihil natus, soluta incidunt iusto voluptatibus? Numquam quidem iste dolorem eum sunt porro exercitationem, itaque modi accusamus vitae, voluptate hic nemo. Lorem ipsum, dolor sit ",
        },
        {
            title: 'Aquatic Bodywork',
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptatibus, rerum. Maxime dolor ad dignissimos recusandae excepturi blanditiis esse beatae velit exercitationem est eveniet expedita nihil natus, soluta incidunt iusto voluptatibus? Numquam quidem iste dolorem eum sunt porro exercitationem, itaque modi accusamus vitae, voluptate hic nemo. Lorem ipsum, dolor sit ",
        },
        {
            title: 'Curam Recovery',
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptatibus, rerum. Maxime dolor ad dignissimos recusandae excepturi blanditiis esse beatae velit exercitationem est eveniet expedita nihil natus, soluta incidunt iusto voluptatibus? Numquam quidem iste dolorem eum sunt porro exercitationem, itaque modi accusamus vitae, voluptate hic nemo. Lorem ipsum, dolor sit ",
        },
    ];

    return (
        <section className="conatiner pt-20 mx-auto w-4/5 xl:max-w-[1000px]">
            <h2 className='font-cor text-6xl'>Treatments</h2>

            {treatments.map((treatment, index) => (
                <TreatmtsSection key={index} treatment={treatment}></TreatmtsSection>
            ))}
        </section>
    );
};

export default TreatmentsPage;


const TreatmtsSection = ({ treatment }) => {
    return (
        <article className='border flex gap-10 p-10'>
            <img src={video} alt=""  className='w-80'/>
            <div className='flex flex-col gap-4'>
                <h3 className='text-xl'>{treatment.title}</h3>
                <p>{treatment.content}</p>
            <Button text="Book" />
            </div>
        </article>
    );
}