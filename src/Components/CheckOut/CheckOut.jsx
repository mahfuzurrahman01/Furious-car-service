import React, { useContext } from 'react';
import {  useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const CheckOut = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const { _id, price, title } = service
    const submitHandler = event => {
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const email = form.email.value;
        const phone = form.phone.value;
        const massage = form.massage.value;

        const order = {
            serviceId: _id,
            serviceName: title,
         
            price,
            CustomerName: name,
            email,
            phone,
            massage,
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    alert('Order placed successfully')
                    navigate('/orders')
                }
            })
            .catch(err => console.error(err))

    }
    return (
        <div>
            <div className='w-full flex gap-4 justify-start mb-4'>
                <p className='text-gray-700 bg-gray-300 rounded text-md font-semibold px-4 py-1'>{service.title}</p>
                <p className='text-white bg-red-500 rounded text-md  font-semibold px-4 py-1'>${service.price}</p>
            </div>
            <div className='bg-gray-100 p-20 rounded-xl'>
                <form onSubmit={submitHandler} className=' flex flex-col gap-5' >
                    <div className='grid grid-cols-2 gap-5'>
                        <input name='firstName' type="text" placeholder="First name" className="input w-full" />
                        <input name='lastName' type="text" placeholder="Last name" className="input w-full" />
                        <input name='phone' type="text" placeholder="Your Phone" className="input w-full" />
                        <input name='email' type="text" placeholder="email" defaultValue={user?.email} readOnly className="input w-full" />
                    </div>
                    <div>
                        <textarea name='massage' className="textarea w-full h-80" placeholder="Your massage"></textarea>
                    </div>
                    <div className='w-full'>
                        <button type='submit' className='text-white bg-red-500 font-semibold px-3 py-3 rounded-md w-full'>Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;