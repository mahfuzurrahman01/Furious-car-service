import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
const ServiceCard = ({ x }) => {
    const { img, price, title } = x
    return (
        <div className="card bg-base-100 shadow-xl p-5">
            <figure>
                <img src={img} alt="Shoes" className="rounded-xl w-full h-56" />
            </figure>
            <div className="card-body p-0">
                <div className='pt-4'>
                    <p className='text-2xl font-bold text-gray-600'>{title}</p>
                    <div className='flex justify-between items-center'>
                        <h2 className="card-title text-xl font-bold text-red-500">Price: ${price}</h2>
                        <BsArrowRight className='text-red-500 text-2xl font-extrabold'></BsArrowRight>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;