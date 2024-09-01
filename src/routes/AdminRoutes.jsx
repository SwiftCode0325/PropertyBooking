import { Outlet } from "react-router-dom";
import Navbar from "../components/admin/Navbar";
import Footer from "../pages/Admin/Footer/Footer";

const AdminRoutes = () => {
  return (
    <div className=" bg-[#01204E] text-white">
      <div className="container mx-auto">
        <Navbar />
        <Footer/>
      </div>
    </div>
  );
};

export default AdminRoutes;
