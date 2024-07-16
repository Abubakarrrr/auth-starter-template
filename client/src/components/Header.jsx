import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

const Header = () => {
  const { currentUser } = useSelector(state => state.user)

  return (

    <div className="navbar bg-slate-200 px-6">

      <div className="navbar-start">
        {/* Mobile Menu start  */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </div>


        <a className="btn btn-ghost text-xl">Auth App</a>
        {/* Mobile Menu start  */}
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        {currentUser ? (

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={currentUser.profilePicture} />
              </div>
            </div> 
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  {/* <span className="badge">New</span> */}
                </Link>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>

        ) : (
          <Link to='/sign-in' className="btn">Sign In</Link>
        )}

      </div>

      
    </div >
  )
}

export default Header