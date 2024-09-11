import React from 'react';
import { FaTrash } from 'react-icons/fa';

const ManageUsers = () => {
    // Sample user data (you can replace this with dynamic data from props or state)
    const users = [
        {
            displayName: 'Raj Pritom',
            email: 'prantadeb@gmail.com',
            photoURL: null,
        },
        // Add more user data here
    ];

    const handleDelete = (email) => {
        // Add logic for handling user deletion
        console.log(`Deleted user with email: ${email}`);
    };

    return (
        <div className='container mx-auto px-4 py-6'>
            <h1 className='text-center my-5 font-bold text-primary text-2xl'>Manage Users</h1>

            {/* Table for displaying user data */}
            <div className='overflow-x-auto'>
                <table className='table-auto w-full text-left border-collapse border border-gray-200'>
                    <thead>
                        <tr className='bg-gray-100'>
                            <th className='border px-4 py-2'>Photo</th>
                            <th className='border px-4 py-2'>Name</th>
                            <th className='border px-4 py-2'>Email</th>
                            <th className='border px-4 py-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className='hover:bg-gray-50'>
                                <td className='border px-4 py-2'>
                                    <img
                                        src={user.photoURL ? user.photoURL : "https://i.ibb.co/fF7ZYLL/user-icon-1024x1024-dtzturco.png"}
                                        alt={user.displayName}
                                        className='w-12 h-12 rounded-full mx-auto'
                                    />
                                </td>
                                <td className='border px-4 py-2'>{user.displayName}</td>
                                <td className='border px-4 py-2'>{user.email}</td>
                                <td className='border px-4 py-2'>
                                    <button
                                        onClick={() => handleDelete(user.email)}
                                        className='text-red-500 hover:text-red-700'
                                        title='Delete'
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
