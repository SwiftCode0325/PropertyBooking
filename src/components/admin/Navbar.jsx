import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { TbBrandBooking } from "react-icons/tb";
import { IoHomeSharp } from "react-icons/io5";
import { MdPayment } from "react-icons/md";

const Navbar = () => {
// State to manage the drawer open/close
const [isDrawerOpen, setIsDrawerOpen] = useState(false);

// Function to handle drawer toggle
const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

// Function to handle link click and close the drawer
const handleLinkClick = () => {
  setIsDrawerOpen(false);
};


  const links = (
    <>
      <li className="rounded-sm">
        <Link
          to="dashboard"
          className="flex items-center p-2 space-x-3 rounded-md"
          onClick={handleLinkClick}
        >
         <IoHomeSharp className="text-3xl"/>

          <span>Dashboard</span>
        </Link>
      </li>
      <li className="rounded-sm">
        <Link
          to="booking"
          className="flex items-center p-2 space-x-3 rounded-md"
          onClick={handleLinkClick}
        >
         <TbBrandBooking className="text-3xl"/>

          <span>Booking</span>
        </Link>
      </li>
      <li className="rounded-sm">
        <Link
          to="payments"
          className="flex items-center p-2 space-x-3 rounded-md"
          onClick={handleLinkClick}
        >
         <MdPayment  className="text-3xl"/>
          <span>Payments</span>
        </Link>
      </li>
    </>
  );

  

  return (
    <div className={`drawer drawer-start ${isDrawerOpen ? "drawer-open" : ""}`}>
      {/* Hidden checkbox to toggle the drawer */}
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        readOnly
      />

      <div className="drawer-content flex flex-row">
        {/* Drawer button to open the sidebar */}
        <label
          htmlFor="my-drawer"
          className="p-2 drawer-button mt-4"
          onClick={toggleDrawer}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-5 h-5 fill-current dark:text-gray-800"
          >
            <rect width="352" height="32" x="80" y="96"></rect>
            <rect width="352" height="32" x="80" y="240"></rect>
            <rect width="352" height="32" x="80" y="384"></rect>
          </svg>
        </label>

        {/* Main content area */}
        <div className="flex-1 p-4 dark:bg-gray-50 dark:text-gray-800">
          <Outlet />
        </div>
      </div>

      {/* Sidebar (Drawer Side) */}
      <div className={`drawer-side ${isDrawerOpen ? "drawer-open" : ""}`}>
        {/* Overlay to close the sidebar */}
        <label
          htmlFor="my-drawer"
          className="drawer-overlay"
          aria-label="close sidebar"
          onClick={toggleDrawer}
        ></label>

        {/* Close button inside the sidebar */}
        {/* <label htmlFor="my-drawer" className=" absolute top-4 right-4 p-2 cursor-pointer" onClick={toggleDrawer}>
       <h1 className='text-red'>X</h1>
        </label> */}

        <ul className="menu bg-[#01204E] text-white min-h-full w-[150px] pt-3">
          {/* Sidebar content here */}
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
