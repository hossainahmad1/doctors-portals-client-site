import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const handleSignOut = () => {
        logout()
            .then(() => { })
            .catch(err => console.log(err))
    }
    // <></> ata dilei hoy abar ai tager modde React.Fragment likhe dilei hobe 
    const menuItems = <React.Fragment>
        <li><Link className='rounded-lg' to="/">Home</Link></li>
        <li><Link className='rounded-lg' to="/appoinment">Appoinment</Link></li>
        <li><Link className='rounded-lg' to="/abouts">Abouts</Link></li>

        {
            user?.uid ?
                <>
                    <li><Link className='rounded-lg' to="/dashboard">Dashboard</Link></li>
                    <li><Link onClick={handleSignOut} className='rounded-lg' >SignOut</Link></li>
                </>
                :
                <li><Link className='rounded-lg' to="/login">Login</Link></li>
        }
    </React.Fragment>

    return (
        <div className="navbar bg-base-100 flex justify-between p-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-2xl">Doctor Portals</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-xl font-semibold">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-dower-2" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;