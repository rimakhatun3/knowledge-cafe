import React from 'react';
import profile from '../../images/profile.png' ;
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Knowledge Cafe</a>
  </div>
  <div className="flex-none gap-5">
    <a className='hover:bg-yellow-400 ' href="./home">Home</a>
    <a className='hover:bg-yellow-400'  href="./buyNow">Buy Now</a>
    <a className='hover:bg-yellow-400'  href="./order">Order</a>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://cdn-icons-png.flaticon.com/512/187/187488.png?w=740&t=st=1680222744~exp=1680223344~hmac=05b634c8cf652cca4574e1fc0d65af770063b02b8bfa66587f29d7bd3431b2e6" alt="" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

        </div>
    );
};

export default Header;