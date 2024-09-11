import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ManageRooms = () => {
    // Sample room data (you can replace this with dynamic data from props or state)
    const rooms = [
        {
            id: 'R1234500',
            title: 'Spacious 3 Bedroom Apartment in Gulshan for Family',
            description: 'A well-furnished 3 bedroom apartment with modern amenities located in the heart of the city. Perfect for families or professionals.',
            price: 1000,
            availableFrom: '2024-09-01',
            status: 'Available',
        },
        // Add more room data here
    ];

    const handleEdit = (id) => {
        // Add logic for handling room edit
        console.log(`Edit room with id: ${id}`);
    };

    const handleDelete = (id) => {
        // Add logic for handling room deletion
        console.log(`Deleted room with id: ${id}`);
    };

    return (
        <div className='container mx-auto px-4 py-6'>
            <h1 className='text-center my-5 font-bold text-primary text-2xl'>Manage Rooms</h1>

            {/* Table for displaying room data */}
            <div className='overflow-x-auto'>
                <table className='table-auto w-full text-left border-collapse border border-gray-200'>
                    <thead>
                        <tr className='bg-gray-100'>
                            <th className='border px-4 py-2'>ID</th>
                            <th className='border px-4 py-2'>Title</th>
                            <th className='border px-4 py-2'>Description</th>
                            <th className='border px-4 py-2'>Price</th>
                            <th className='border px-4 py-2'>Available From</th>
                            <th className='border px-4 py-2'>Status</th>
                            <th className='border px-4 py-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.map((room) => (
                            <tr key={room.id} className='hover:bg-gray-50'>
                                <td className='border px-4 py-2'>{room.id}</td>
                                <td className='border px-4 py-2'>{room.title}</td>
                                <td className='border px-4 py-2'>{room.description}</td>
                                <td className='border px-4 py-2'>{room.price}BDT</td>
                                <td className='border px-4 py-2'>{room.availableFrom}</td>
                                <td className='border px-4 py-2'>{room.status}</td>
                                <td className='px-4 py-2 flex items-center justify-center space-x-2'>
                                    <button
                                        onClick={() => handleEdit(room.id)}
                                        className='text-blue-500 hover:text-blue-700'
                                        title='Edit'
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(room.id)}
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

export default ManageRooms;
