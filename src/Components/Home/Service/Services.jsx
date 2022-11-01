import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div className='mt-40 mb-16'>
            <div className='text-center flex flex-col gap-5 my-10'>
                <p className='text-red-500 font-bold text-2xl'>Service</p>
                <h3 className='text-5xl font-bold'>Our Service Area</h3>
                <p className='text-gray-600 text-lg w-1/2 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
            </div>
            <div className='grid lg:grid-cols-3 w-full lg:gap-5'>
                {
                    services.map(x => <ServiceCard key={x._id} x={x}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;