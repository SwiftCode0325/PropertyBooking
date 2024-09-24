import React, { useContext, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';
import useGetAllPayments from '../../../hooks/useGetAllPayments';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import axios from 'axios';
import toast from 'react-hot-toast';


const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const [payments, paymentsLoader, refetch, setRefetch] = useGetAllPayments();

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
                    const response = await axios.delete(`https://room-backend-final-main.vercel.app/api/payment/payments/delete/${id}`);
                    if (response.status === 200) {
                        swalWithBootstrapButtons.fire({
                            title: "Deleted!",
                            text: "Your payment has been deleted.",
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
                    text: "Your payment file is safe :)",
                    icon: "error"
                });
            }
        });

    };

    return (
        <div className='container mx-auto px-4 py-6'>
            <h1 className='text-center my-5 font-bold text-primary text-2xl'>Payments History</h1>

            {/* Table for displaying payment data */}
            <div className='overflow-x-auto'>
                <table className='table-auto w-full text-left border-collapse border border-gray-200'>
                    <thead>
                        <tr className='bg-gray-100'>
                            <th className='border px-4 py-2'>No</th>
                            <th className='border px-4 py-2'>Sender Number</th>
                            <th className='border px-4 py-2'>Transition ID</th>
                            <th className='border px-4 py-2'>Amount</th>
                            <th className='border px-4 py-2'>Date</th>
                            {user.role !== "user" && <th className='border px-4 py-2'>Action</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, idx) => (
                            <tr key={payment._id} className='hover:bg-gray-50'>
                                <td className='border px-4 py-2'>{idx + 1}</td>
                                <td className='border px-4 py-2'>{payment?.sender}</td>
                                <td className='border px-4 py-2'>
                                    {payment?.transitionId}
                                </td>
                                <td className='border px-4 py-2'>
                                    {payment?.amount}
                                </td>
                                <td className='border px-4 py-2'>
                                    {new Date(payment.createdAt).toLocaleDateString()}
                                </td>
                                {user.role !== "user" && <td className='border px-4 py-2 text-center'>
                                    <button
                                        onClick={() => handleDelete(payment._id)}
                                        className='text-red-500 hover:text-red-700 mx-2'
                                        title='Delete'
                                    >
                                        <FaTrash size={20} />
                                    </button>
                                </td>}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
