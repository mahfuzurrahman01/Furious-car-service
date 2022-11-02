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
    return (
        <div className='bg-gray-100 rounded-md p-10 w-4/6 mx-auto'>
            {
                orders.map(order => <OrderRow key={order._id} order={order}></OrderRow>)
            }
        </div>
    );
};

export default Orders;