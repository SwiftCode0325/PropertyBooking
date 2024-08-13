import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
