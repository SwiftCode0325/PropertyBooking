import { useEffect, useState } from "react";

const useGetAllData = () => {
    const [properties, setProperties] = useState([]);
    const [propertiesLoader, setPropertiesLoader] = useState(true);
    useEffect(() => {
        setPropertiesLoader(true)
        loadData()
    }, [])
    const loadData = async () => {
        const response = await fetch('https://room-backend-final-main.vercel.app/api/rooms/all-rooms');
        const data = await response.json();
        setProperties(data.rooms)
        setPropertiesLoader(false)
    }
    return [properties, propertiesLoader]
};

export default useGetAllData;