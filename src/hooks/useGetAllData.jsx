import { useEffect, useState } from "react";

const useGetAllData = () => {
    const [properties, setProperties] = useState([]);
    const [propertiesLoader, setPropertiesLoader] = useState(true);
    useEffect(() => {
        setPropertiesLoader(true)
        loadData()
    }, [])
    const loadData = async () => {
        const response = await fetch('http://localhost:5000/api/rooms/all-rooms');
        const data = await response.json();
        setProperties(data.rooms)
        setPropertiesLoader(false)
    }
    return [properties, propertiesLoader]
};

export default useGetAllData;