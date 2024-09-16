import { useContext } from "react";
import UserHome from "../UserHome/UserHome";
import { AuthContext } from "../../../provider/AuthProvider";
import ProfileDropdown from "../../../components/common/ProfileDropdown";

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
        </div>);
};

export default DashHome;