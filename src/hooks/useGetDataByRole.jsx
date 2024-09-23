import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useGetDataByRole = () => {
    const { user } = useContext(AuthContext);
    const [rooms, setRooms] = useState([]);
    const [roomsLoader, setRoomsLoader] = useState(true);
    const [refetch, setRefetch] = useState(true);
    useEffect(() => {
        setRoomsLoader(true)
        loadData()
    }, [user, refetch])
    const loadData = async () => {
        const response = await fetch(`https://room-psi-ten.vercel.app/api/rooms//all-rooms-by-role/${user._id}`);
        const data = await response.json();
        if (data) {
            setRooms(data)
            setRoomsLoader(false)
        }
    }
    return [rooms, roomsLoader, refetch, setRefetch]
};

export default useGetDataByRole;