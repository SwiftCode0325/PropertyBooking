import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import useGetAllUser from '../../../hooks/useGetAllUser';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const ManageUsers = () => {
    const { user: logUser } = useContext(AuthContext);
    const [users, usersLoader, refetch, setRefetch] = useGetAllUser();

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
                    const response = await axios.delete(`http://localhost:5000/api/users/delete/${id}`);
                    if (response.status === 200) {
                        swalWithBootstrapButtons.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                        });
                        setRefetch(!refetch)
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
                    text: "Your user file is safe :)",
                    icon: "error"
                });
            }
        });

    };
    const handleChangeRole = async (id, newRole, prevRole) => {
        if (newRole === prevRole) {
            return toast.error('no changes!');
        }

        try {
            const response = await axios.put(`http://localhost:5000/api/users/update/role/${id}`, { role: newRole });
            if (response.status === 200) {
                toast.success('User role updated successfully!');
                setRefetch(!refetch);
            }
        } catch (error) {
            toast.error('Failed to update user role!', { id: 'updateUserRole' });
            console.error('Error updating user role:', error);
        }

    }

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
                            <th className='border px-4 py-2'>Role</th>
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
                                    {
                                        logUser?.email === user?.email && logUser?.role === "admin" ? user?.role : <select
                                            onChange={(e) => handleChangeRole(user._id, e.target.value, user.role)} defaultValue={user.role}
                                            className='w-full'>
                                            <option value="user">User</option>
                                            <option value="admin">Admin</option>
                                            <option value="owner">Owner</option>
                                        </select>
                                    }

                                </td>
                                <td className='border px-4 py-2 text-center'>
                                    <button
                                        disabled={logUser?.email === user?.email}
                                        onClick={() => handleDelete(user._id)}
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
