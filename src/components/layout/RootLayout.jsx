import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import useAuth from "../../hooks/useAuth";
import Spinner from "../common/Spinner";

const RootLayout = () => {
  const location = useLocation();
  const { loading } = useAuth()

  if (loading) return <Spinner />

  return (
    <div>
      {location.pathname == "/login" || location.pathname == "/signup" ? "" : <Navbar />}
      <Outlet></Outlet>
      {location.pathname == "/login" || location.pathname == "/signup" ? "" : <Footer />}
    </div>
  );
};

export default RootLayout;
