import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const service = useLoaderData()
    return (
        <div>
            <h1>{service.title}</h1>
        </div>
    );
};

export default CheckOut;