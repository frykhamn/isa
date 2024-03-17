import React from 'react'
import wave from '../../../assets/wave.png'
import { FaHeart, FaRecycle } from 'react-icons/fa';
import { PiHandsPrayingFill } from "react-icons/pi";


export const TreatmenstSection = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row items-center py-12 px-4 lg:px-8">
            <div className="md:w-1/2 pr-8">
                <h2 className="font-cor text-4xl md:text-5xl font-bold mb-16">
                    How can you get to know
                    your nervous system?
                </h2>
                <p className="text-sm text-textAcc font-semibold mb-3">The Nervous System</p>
                <h3 className="font-cor text-3xl mb-3">An introductory conversation</h3>
                <p className="mb-6 font-light max-w-[28rem]">
                    If you haven't been attuned to your body before, it's not obvious how a dialogue could look. Therefore, you might need help starting to listen, talk, and be willing to connect with the body.
                </p>
                <ul className='px-2 py-10 bg-white max-w-[28rem] flex flex-col gap-6'>
                    <li className="flex mb-3">
                        <span className="mr-2 mt-2 pr-2 text-textAcc"><PiHandsPrayingFill></PiHandsPrayingFill></span>
                        <span className=''>
                            <span className='font-semibold'>Relaxation</span>. 
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.</span>
                    </li>
                    <li className="flex mb-3">
                        <span className="mr-2 mt-2  pr-2 text-textAcc"><FaRecycle></FaRecycle></span>
                        <span><span className='font-semibold'>Breathing</span>. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.</span>
                    </li>
                    <li className="flex mt-2">
                        <span className="mr-2 pr-2 mt-2 text-textAcc"><FaHeart ></FaHeart></span>
                        <span><span className='font-semibold'>Movement</span>. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.</span>
                    </li>
                </ul>
            </div>
            <div className="md:w-1/2">
                <img src={wave} alt="Body Illustration" className="mt-6 md:mt-0" />
            </div>
        </div>
    );
}
