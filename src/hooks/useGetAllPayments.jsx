import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const useGetAllPayments = () => {
    const { user } = useContext(AuthContext);
    const [payments, setPayments] = useState([]);
    const [paymentsLoader, setPaymentsLoader] = useState(true);
    const [refetch, setRefetch] = useState(false)
    useEffect(() => {
        setPaymentsLoader(true)
        loadData()
    }, [user, refetch])

    async function loadData() {
        try {
            const response = await axios.get(`https://room-backend-final-main.vercel.app/api/payment/payments/${user._id}`);
            setPayments(response.data.finalPayments);
            setPaymentsLoader(false);
        } catch (error) {
            console.error(error);
            setPaymentsLoader(false);
        }
    }
    return [payments, paymentsLoader, refetch, setRefetch]
}
export default useGetAllPayments;