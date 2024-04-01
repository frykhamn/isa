import React from 'react'
import circle from '../../../assets/gold-circle.png'

export const CVSection = () => {
    return (
        <div className="conatiner mx-auto pb-20 pt-22 md:w-4/5 xl:max-w-[1000px]">

            <div className="grid grid-cols-2 gap-10">
                <div className="  text-textOffLight text-4xl  text-center font-cor place-self-center">
                    <h2 className='w-64'>The theraputhic converastion, to investigate and unveil</h2>
                </div>
                <div className=" text-textOffLight text-4xl  font-cor place-self-center">
                </div>
                <div className=' place-self-center w-60'>
                    <img src={circle} alt="circle" className='w-full' />
                </div>
                <div className=' place-self-start md:w-[24rem] font-cor text-lg' >
                    <div className='flex text-textOffLight list-none gap-2'>
                        <li>Sweden - </li>
                        <li> India - </li>
                        <li> Kambodya - </li>
                        <li> Mexico - </li>
                        <li> Online</li>
                    </div>
                    <h2 className='text-white text-3xl pb-4 font-semibold tracking-wide'>Body treatments</h2>
                    <div className='text-textOffLight flex gap-4 flex-col'>
                        <p>
                            Isabella is the creator of Cruma Recover and has, in collaboration with Curam's founder Marie Jansson (link)
                        </p>
                        <p>
                            Four-star hotel spa concept worldwide ResonDetre (link)
                        </p>
                        <p>
                            Educator at HumaNova (link)
                        </p>
                    </div>
                </div>
                <div className='pt-10 text-white font-cor text-4xl col-span-2 text-center'>
                    <p>
                    "When someone says they received a poor treatment, I'm always curious: Did you express what you wanted? No, is often the answer."
                    </p>
                </div>
            </div>

        </div>
    )
}
