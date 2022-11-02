import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const ServiceCard = ({ x }) => {
    const { _id, img, price, title } = x
    return (
        <div className="card bg-base-100 shadow-xl p-5">
            <figure>
                <Link to={`/checkout/${_id}`}><img src={img} alt="Shoes" className="rounded-xl w-full h-56" /></Link>
            </figure>
            <div className="card-body p-0">
                <div className='pt-4'>
                    <p className='text-2xl font-bold text-gray-600'>{title}</p>
                    <div className='flex justify-between items-center'>
                        <h2 className="card-title text-xl font-bold text-red-500">Price: ${price}</h2>
                        <Link to={`/checkout/${_id}`}><BsArrowRight className=' text-red-500 text-3xl font-extrabold'></BsArrowRight></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;