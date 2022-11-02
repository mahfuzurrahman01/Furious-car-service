import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../Context/AuthProvider';
const Navbar = () => {
    const {user} = useContext(AuthContext)
    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        {
          user?.email ? <><li className='font-semibold'><Link to='/orders'>Orders</Link></li></> : <li className='font-semibold'><Link to='/login'>Login</Link></li>  
        }
    </>
    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100" data-theme='light'>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/'><img src={logo} alt="" className='w-24 h-20' /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end flex gap-1">
                <button className="text-red-500 rounded-md hover:bg-red-500 hover:text-white border duration-300 border-red-500 bg-transparent py-1 px-3">Appointment</button>
                {
                    user?.email && <button className="text-red-500 rounded-md hover:bg-red-500 hover:text-white border duration-300 border-red-500 bg-transparent py-1 px-3">Logout</button>
                }
            </div>
        </div>
    );
};

export default Navbar;