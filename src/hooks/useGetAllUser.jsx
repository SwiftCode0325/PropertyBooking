import { useEffect, useState } from "react";

const useGetAllUser = () => {
    const [users, setUsers] = useState([]);
    const [usersLoader, setUsersLoader] = useState(true);
    const [refetch, setRefetch] = useState(true);
    useEffect(() => {
        setUsersLoader(true)
        loadData()
    }, [!refetch])
    const loadData = async () => {
        const response = await fetch('http://localhost:5000/api/users');
        const data = await response.json();
        setUsers(data)
        setUsersLoader(false)
    }
    return [users, usersLoader, refetch, setRefetch]
};

export default useGetAllUser;