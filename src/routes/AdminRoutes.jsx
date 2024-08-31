import { Outlet } from "react-router-dom";
import Navbar from "../components/admin/Navbar";

const AdminRoutes = () => {
  return (
    <div className=" bg-[#01204E] text-white">
      <div className="container mx-auto">
        <Navbar />
      </div>
    </div>
  );
};

export default AdminRoutes;
