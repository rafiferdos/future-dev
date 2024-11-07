import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const items = [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Course",
        path: "/course",
      },
      {
        title: "About",
        path: "/about",
      },
      {
        title: "Services",
        path: "/services",
      },
      {
        title: "Events",
        path: "/events",
      },
      {
        title: "Blog",
        path: "/blog",
      },
    ];
  return (
    <div>
      <div className="navbar mx-auto max-w-7xl bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content space-y-1 bg-base-100 rounded-box text-xl z-[1] fon mt-3 w-52 p-4 shadow"
            >
              {items?.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "underline text-primary " : ""
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </ul>
          </div>
          <a className="" href="/">
            <img className="w-16 lg:w-16" src="/logo.png" alt="logo" />
          </a>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal space-x-6 text-xl px-1">
            {items?.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "underline text-primary " : ""
                }
              >
                {item.title}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          <Link to="/login">
            <button className="btn btn-outline btn-primary btn-sm">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className='btn btn-primary btn-sm'>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar