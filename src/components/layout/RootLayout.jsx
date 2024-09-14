import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const RootLayout = () => {
  const location = useLocation();



  return (
    <div>
      {location.pathname == "/login" || location.pathname == "/signup" ? "" : <Navbar />}
      <Outlet></Outlet>
      {location.pathname == "/login" || location.pathname == "/signup" ? "" : <Footer />}
    </div>
  );
};

export default RootLayout;
