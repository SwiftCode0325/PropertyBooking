import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
};

export default RootLayout;
