import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useGetAllTotalBooking = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const [bookingsLoader, setBookingsLoader] = useState(true);
    const [refetch, setRefetch] = useState(true);
    useEffect(() => {
        setBookingsLoader(true)
        loadData()
    }, [user,refetch])
    const loadData = async () => {
        const response = await fetch(`http://localhost:5000/api/bookings/all-book/${user?._id}`);
        const data = await response.json();
        setBookings(data)
        setBookingsLoader(false)
    }
    return [bookings, bookingsLoader,refetch, setRefetch]
};

export default useGetAllTotalBooking;