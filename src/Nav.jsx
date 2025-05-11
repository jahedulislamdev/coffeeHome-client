import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
   return (
      <nav>
         <div className="navbar bg-base-100">
            <div className="flex-1">
               <Link to={'/'} className="btn btn-ghost normal-case text-xl">Coffee House</Link>
            </div>
            <div className="flex-none">
               <ul className="menu menu-horizontal p-0 space-x-7">
                  <li><NavLink to={'/'}>Home</NavLink></li>
                  <li><NavLink to={'/login'}>Login</NavLink></li>
                  <li><NavLink to={'/register'}>Register</NavLink></li>
                  <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Nav;