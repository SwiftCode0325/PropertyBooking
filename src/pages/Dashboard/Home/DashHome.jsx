import { useContext } from "react";
import UserHome from "../UserHome/UserHome";
import { AuthContext } from "../../../provider/AuthProvider";
import ProfileDropdown from "../../../components/common/ProfileDropdown";
import AdminHome from "./adminHome/AdminHome";
import OwnerHome from "./ownerHome/OwnerHome";

const DashHome = () => {
    const { user, setUser, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        setUser(null)
        logOut();
        localStorage.removeItem('email');
        toast.success("Log out success");
        navigate("/");
    };
    return (
        <div className="p-4">
            <div className="flex justify-end">
                {user && <ProfileDropdown user={user} handleSignOut={handleSignOut} />}
            </div>
            {user.role === "user" && <UserHome />}
            {user.role === "admin" && <AdminHome />}
            {user.role === "owner" && <OwnerHome />}
        </div>);
};

export default DashHome;