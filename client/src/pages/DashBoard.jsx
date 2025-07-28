import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const DashBoard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <div className="shadow py-4 bg-white">
        <div className="px-5 flex justify-between items-center">
          <img
            onClick={() => navigate('/')}
            className="max-sm:w-32 w-40 cursor-pointer"
            src={assets.logo}
            alt="Logo"
          />
          <div className="flex items-center gap-3">
            <p className="max-sm:hidden">Welcome, GreatStack</p>
            <div className="relative group">
              <img
                className="w-8 h-8 border rounded-full object-cover"
                src={assets.company_icon}
                alt="Profile"
              />
              <div className="absolute hidden group-hover:block top-10 right-0 z-10 text-black rounded shadow-md">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li className="py-1 px-2 cursor-pointer pr-10 hover:bg-gray-100">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r min-h-full p-5">
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/dashboard/add-job"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-md ${
                    isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700'
                  }`
                }
              >
                <img src={assets.add_icon} alt="Add" className="min-w-4" />
                <p className='max-sm:hidden'>Add Job</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/manage-jobs"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-md ${
                    isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700'
                  }`
                }
              >
                <img src={assets.home_icon} alt="Manage" className="min-w-4" />
                <p className='max-sm:hidden'>Manage Jobs</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/view-applications"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-md ${
                    isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700'
                  }`
                }
              >
                <img src={assets.person_tick_icon} alt="Applications" className="min-w-4" />
                <p className='max-sm:hidden'>View Applications</p>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Main content for nested routes */}
        <div className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
