import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])


    const deleteHandle = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this order?')
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount === 1) {
                        const remaining = orders.filter(order => order._id !== id)
                        setOrders(remaining)

                    }
                })
        }
    }
    const updateHandle = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(order => order._id !== id)
                    const approving = orders.find(order => order._id === id)
                    approving.status = 'Approved'
                    const newOrders = [approving, ...remaining]
                    setOrders(newOrders)
                }
            })
    }
    return (
        <div className='bg-gray-100 rounded-md p-10 w-4/6 mx-auto'>
            {
                orders.map(order => <OrderRow key={order._id} order={order} deleteHandle={deleteHandle} updateHandle={updateHandle}></OrderRow>)
            }
        </div>
    );
};

export default Orders;