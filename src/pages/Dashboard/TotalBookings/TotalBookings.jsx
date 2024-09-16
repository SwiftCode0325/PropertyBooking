import React from 'react';
import { FaTrash } from 'react-icons/fa';
import useGetAllTotalBooking from '../../../hooks/useGetAllTotalBooking';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const TotalBookings = () => {
    const [bookings, bookingsLoader, refetch, setRefetch] = useGetAllTotalBooking();

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
                    const response = await axios.delete(`http://localhost:5000/api/bookings/booked/delete/${id}`);
                    if (response.status === 200) {
                        swalWithBootstrapButtons.fire({
                            title: "Deleted!",
                            text: "Booking has been deleted.",
                            icon: "success"
                        });
                        setRefetch(!refetch)
                    }
                } catch (error) {
                    toast.error('Failed to delete!');
                    console.error('Error deleting!', error);
                }
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your booking file is safe :)",
                    icon: "error"
                });
            }
        });

    };

    const handleStatus = async (id, status) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/bookings/booked/status/${id}`, { status });
            if (response.status === 200) {
                toast.success('status changed successfully!');
                setRefetch(!refetch)
            }
        } catch (error) {
            toast.error('Failed to status update');
            console.error('Error updating!', error);
        }
    };
    return (
        <div className='container mx-auto px-4 py-6'>
            <h1 className='text-center my-5 font-bold text-primary text-2xl'>Booking</h1>

            {/* Table for displaying property data */}
            <div className='overflow-x-auto'>
                <table className='table-auto w-full text-left border-collapse border border-gray-200'>
                    <thead>
                        <tr className='bg-gray-100'>
                            <th className='border px-4 py-2'>ID</th>
                            <th className='border px-4 py-2'>Buyer Name</th>
                            <th className='border px-4 py-2'>Buyer Phone</th>
                            <th className='border px-4 py-2'>Room Author</th>
                            <th className='border px-4 py-2'>Title</th>
                            <th className='border px-4 py-2'>Location</th>
                            <th className='border px-4 py-2'>Price</th>
                            <th className='border px-4 py-2'>Status</th>
                            <th className='border px-4 py-2'>Date</th>
                            <th className='border px-4 py-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, idx) => (
                            <tr key={booking._id} className='hover:bg-gray-50'>
                                <td className='border px-4 py-2'>{idx + 1}</td>
                                <td className='border px-4 py-2'>{booking?.user?.displayName || "unknown"}</td>
                                <td className='border px-4 py-2'>{booking?.phone || "unknown"}</td>
                                <td className='border px-4 py-2'>{booking?.flat?.auth?.name || "unknown"}</td>
                                <td className='border px-4 py-2'>
                                    <Link className='text-blue-600 underline' to={`/details-page/${booking?.flat?._id}`}>{booking?.flat?.title}</Link>
                                </td>
                                <td className='border px-4 py-2'>
                                    {booking?.flat?.location?.area}, {booking?.flat?.location.city} ({booking?.flat?.location?.postalCode})
                                </td>
                                <td className='border px-4 py-2'>
                                    {booking?.flat?.price} {booking?.flat?.currency}
                                </td>
                                <td className={`border px-4 py-2 
                                    
                                    `}>
                                    <select
                                        className={`
                                    ${booking.status === "Pending" ? "bg-yellow-200" : ""}
                                    ${booking.status === "Confirmed" ? "bg-green-400" : ""}
                                    ${booking.status === "Cancelled" ? "bg-red-400" : ""}
                                    `}
                                        defaultValue={booking?.status}
                                        onChange={(e) => handleStatus(booking._id, e.target.value)}>
                                        <option

                                            value="Pending">Pending</option>
                                        <option

                                            value="Confirmed">Confirmed</option>
                                        <option

                                            value="Cancelled">Cancelled</option>
                                    </select>
                                </td>
                                <td className='border px-4 py-2'>
                                    <span>{new Date(booking.createdAt).toLocaleDateString()}</span> <br />
                                    <span>{new Date(booking.createdAt).toLocaleTimeString()}</span>
                                </td>
                                <td className='border px-4 py-2 text-center'>
                                    <button
                                        onClick={() => handleDelete(booking._id)}
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

export default TotalBookings;