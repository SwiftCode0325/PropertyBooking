import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useGetAllBooking = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const [bookingsLoader, setBookingsLoader] = useState(true);
    const [refetch, setRefetch] = useState(true);
    useEffect(() => {
        setBookingsLoader(true)
        loadData()
    }, [refetch])
    const loadData = async () => {
        const response = await fetch(`https://room-psi-ten.vercel.app/api/bookings/booked/user/${user?._id}`);
        const data = await response.json();
        setBookings(data)
        setBookingsLoader(false)
    }
    return [bookings, bookingsLoader, refetch, setRefetch]
};

export default useGetAllBooking;