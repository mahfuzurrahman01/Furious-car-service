import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero w-11/12 mx-auto mt-10 mb-20" data-theme='light'>
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} alt='' className="rounded-lg shadow-2xl w-4/5 h-full" />
                    <img src={parts} alt='' className="absolute rounded-lg shadow-2xl w-1/2 right-6 top-1/2 border-[16px] border-gray-100 object-fill" />
                </div>
                <div className='w-1/2 flex flex-col gap-4'>
                    <p className='text-red-500 font-bold text-2xl'>About us</p>
                    <div className='flex flex-col gap-3'>
                        <h1 className="text-4xl font-semibold">
                            We are qualified <br />
                            & of experience <br />
                            in this field</h1>
                        <p className="text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className='text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="bg-red-500 text-white rounded w-40 h-9 hover:bg-opacity-90">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;