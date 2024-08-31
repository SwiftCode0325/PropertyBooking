import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  // State to manage the drawer open/close
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to handle drawer toggle
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  // Function to handle link click and close the drawer
  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

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
          className="p-2 drawer-button"
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

        <ul className="menu bg-[#01204E] text-white min-h-full w-48 p-4">
          {/* Sidebar content here */}

          <li className="rounded-sm">
            <Link
              to="dashboard"
              className="flex items-center p-2 space-x-3 rounded-md"
              onClick={handleLinkClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:text-gray-600"
              >
                <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
              </svg>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="rounded-sm">
            <Link
              to="sidebar"
              className="flex items-center p-2 space-x-3 rounded-md"
              onClick={handleLinkClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:text-gray-600"
              >
                <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
              </svg>
              <span>Test</span>
            </Link>
          </li>
          {/* Continue adding items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
