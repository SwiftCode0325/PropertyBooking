import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { FaHome, FaUserCheck } from 'react-icons/fa';
import { TbBrandBooking } from 'react-icons/tb';
import { MdRoomPreferences } from "react-icons/md";
import { GrUserSettings } from "react-icons/gr";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { AuthContext } from '../../provider/AuthProvider';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <> {/* Sidebar */}
      <div
        className={`bg-[#01204E] text-white w-[250px] lg:w-1/5 fixed lg:static inset-y-0 left-0 transform lg:transform-none transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } p-4 shadow-lg z-50`}
      >
        {/* Sidebar content */}
        <div className="relative space-y-6">
          <button className='absolute right-0 top-0 text-xl lg:hidden' onClick={() => setIsSidebarOpen(!isSidebarOpen)}><IoMdClose /></button>
          <Link to={"/dashboard"} className="text-2xl font-semibold">Dashboard</Link>
          <nav className="flex flex-col space-y-2">
            <NavLink to="/dashboard"
              className={"flex items-center gap-1 hover:bg-[#5994D4] rounded p-2"
              }
            >
              <FaHome />Home
            </NavLink>
            <NavLink to="/" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "flex items-center gap-1 bg-[#5994D4] hover:bg-[#5994D4] rounded p-2" : "flex items-center gap-1 hover:bg-[#5994D4] rounded p-2"
            }>
              <FaHome />Site
            </NavLink>
            <NavLink to="/dashboard/booking" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "flex items-center gap-1 bg-[#5994D4] hover:bg-[#5994D4] rounded p-2" : "flex items-center gap-1 hover:bg-[#5994D4] rounded p-2"
            }>
              <TbBrandBooking />Booking
            </NavLink>
            <NavLink to="/dashboard/add_room" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "flex items-center gap-1 bg-[#5994D4] hover:bg-[#5994D4] rounded p-2" : "flex items-center gap-1 hover:bg-[#5994D4] rounded p-2"
            }>
              <MdOutlineAddHomeWork />Add Room
            </NavLink>
            <NavLink to="/dashboard/manage_rooms" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "flex items-center gap-1 bg-[#5994D4] hover:bg-[#5994D4] rounded p-2" : "flex items-center gap-1 hover:bg-[#5994D4] rounded p-2"
            }>
              <MdRoomPreferences />Manage Rooms
            </NavLink>
            <NavLink to="/dashboard/manage_users" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "flex items-center gap-1 bg-[#5994D4] hover:bg-[#5994D4] rounded p-2" : "flex items-center gap-1 hover:bg-[#5994D4] rounded p-2"
            }>
              <GrUserSettings /> Manage Users
            </NavLink>

            <NavLink to="/dashboard/payment_history" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "flex items-center gap-1 bg-[#5994D4] hover:bg-[#5994D4] rounded p-2" : "flex items-center gap-1 hover:bg-[#5994D4] rounded p-2"
            }>
              <RiSecurePaymentLine />Payment History
            </NavLink>
            <hr />
            <NavLink to="/dashboard/user_profile" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "flex items-center gap-1 bg-[#5994D4] hover:bg-[#5994D4] rounded p-2" : "flex items-center gap-1 hover:bg-[#5994D4] rounded p-2"
            }>
              <div className='flex justify-center items-center gap-2'>
                <div>
                  <img className='rounded-full w-8' src={user?.photoURL} alt="" />
                </div>
                User Profile
              </div>
            </NavLink>

          </nav>
        </div>
      </div >
      {/* Mobile Menu Button */}
      < button className={`${isSidebarOpen ? "hidden" : ""} lg:hidden fixed top-4 left-4 z-50 p-2 rounded-full focus:outline-none`
      }
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-5 h-5 fill-current dark:text-gray-800"
        >
          <rect width="352" height="32" x="80" y="96"></rect>
          <rect width="352" height="32" x="80" y="240"></rect>
          <rect width="352" height="32" x="80" y="384"></rect>
        </svg>
      </ button >
    </>
  );
};

export default Dashboard;
