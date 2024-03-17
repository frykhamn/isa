import { useState } from 'react'
import { TreatmentsInfoSection } from './components/TreatmentsInfoSection'
import { TreatmenstSection } from './components/TreatmenstSection'



export default function HomePage() {
    return (
        <>
            <TreatmentsInfoSection></TreatmentsInfoSection>
            <div className="border-2 mx-auto border-textAcc mb-20 w-80 sm:w-96 md:w-[42rem]"></div>
            <TreatmenstSection></TreatmenstSection>
            <div className="border-2 mx-auto border-textAcc mb-20 w-80 sm:w-96 md:w-[42rem]"></div>
        
        </>
    )
}
