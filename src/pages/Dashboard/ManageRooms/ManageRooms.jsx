import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import useGetDataByRole from '../../../hooks/useGetDataByRole';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const ManageRooms = () => {
    const [rooms, roomsLoader, refetch, setRefetch] = useGetDataByRole();
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/dashboard/edit_room/${id}`);
    };

    const handleDelete = async (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "bg-[#01204E] mx-2 px-3 py-2 text-white",
                cancelButton: "bg-[#5994D4] mx-2 px-3 py-2 text-white",
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const { data: res } = await axios.delete(`https://room-psi-ten.vercel.app/api/rooms/delete/${id}`);
                    if (res.success) {
                        swalWithBootstrapButtons.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                        });
                        setRefetch(!refetch);
                    }
                } catch (error) {
                    toast.error('Failed to delete user!', { id: 'deleteUser' });
                    console.error('Error deleting user:', error);
                }
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your room file is safe :)",
                    icon: "error"
                });
            }
        });
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
                            <th className='border px-4 py-2'>Room Author</th>
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
                            <tr key={room._id} className='hover:bg-gray-50'>
                                <td className='border px-4 py-2'>{room.id}</td>
                                <td className='border px-4 py-2'>{room?.auth?.name || "unknown"}</td>
                                <td className='border px-4 py-2'>{room.title}</td>
                                <td className='border px-4 py-2'>{room.description}</td>
                                <td className='border px-4 py-2'>{room.price}BDT</td>
                                <td className='border px-4 py-2'>{room.availableFrom}</td>
                                <td className='border px-4 py-2'>{room.status}</td>
                                <td className='border px-4 py-2 space-x-2 text-center'>
                                    <button
                                        onClick={() => handleEdit(room._id)}
                                        className='text-blue-500 hover:text-blue-700'
                                        title='Edit'
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(room._id)}
                                        className='text-red-500 hover:text-red-700 '
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
