import React from 'react';

const ProfileDropdown = ({ user, handleSignOut, width = 12 }) => {
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className={`w-${width} rounded-full`}>
                    <img
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL ? user?.photoURL : "https://i.ibb.co/fF7ZYLL/user-icon-1024x1024-dtzturco.png"} />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-secondary rounded-box z-[10] mt-3 w-52 p-2 shadow">
                <li>
                    <a className="hover:text-white hover:bg-transparent hover:bg-[#01204E] transition-all">
                        Profile
                    </a>
                </li>
                <li><a className="hover:text-white hover:bg-transparent hover:bg-[#01204E] transition-all">Settings</a></li>
                <li><a onClick={handleSignOut} className="hover:text-white hover:bg-transparent hover:bg-[#01204E] transition-all">Logout</a></li>
            </ul>
        </div>
    );
};

export default ProfileDropdown;