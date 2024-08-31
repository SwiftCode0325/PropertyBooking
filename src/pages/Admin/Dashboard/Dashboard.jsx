import React from "react";
import { FaUserShield } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";
import BookingChart from "../../../components/Charts/BookingChart";
import { FaDollarSign } from "react-icons/fa";
import RevenueChart from "./../../../components/Charts/RevenueChart";
import { BsFillHouseCheckFill } from "react-icons/bs";
import RoomChart from "../../../components/Charts/RoomChart";
import VisitorChart from "../../../components/Charts/VisitorChart";
import RevenueOverview from "../../../components/Charts/RevenueOverview";

const Dashboard = () => {
  return (
    <div className="h-full">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="mt-10">
        {/* card 04 */}
        <div className="grid grid-cols md:grid-cols-4 lg:grid-cols-4 gap-5">
          {/* card 1 */}
          <div className="rounded-lg bg-[#DFE5FA] p-5 text-[16px] font-bold ">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-[#7D7D7F]">Visitor</h1>
                <p className="text-[#485568] text-[20px]">698k</p>
              </div>
              <div className="bg-[#CFD7EC] p-3 rounded-lg">
                <FaUserShield className="text-2xl  text-black" />
              </div>
            </div>

            <>
              <VisitorChart />
            </>
          </div>

          {/* card 2 */}
          <div className="rounded-lg bg-[#FDE1F5] p-5 text-[16px] font-bold ">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-[#7D7D7F]">Bookings </h1>
                <p className="text-[#485568] text-[20px]">10.63k</p>
              </div>
              <div className="bg-[#CFD7EC] p-3 rounded-lg">
                <TbBrandBooking className="text-2xl  text-black" />
              </div>
            </div>

            <>
              <BookingChart />
            </>
          </div>
          {/* card 3 */}
          <div className="rounded-lg bg-[#FFEAE9] p-5 text-[16px] font-bold ">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-[#7D7D7F]">Revenue</h1>
                <p className="text-[#485568] text-[20px]">$85420 </p>
              </div>
              <div className="bg-[#CFD7EC] p-3 rounded-lg">
                <FaDollarSign className="text-2xl  text-black" />
              </div>
            </div>

            <>
              <RevenueChart />
            </>
          </div>
          {/* card 4 */}
          <div className="rounded-lg bg-[#D8F6D8] p-5 text-[16px] font-bold ">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-[#7D7D7F]">Rooms</h1>
                <p className="text-[#485568] text-[20px]">45/365 </p>
              </div>
              <div className="bg-[#CFD7EC] p-3 rounded-lg">
                <BsFillHouseCheckFill className="text-2xl  text-black" />
              </div>
            </div>

            <>
              <RoomChart />
            </>
          </div>
        </div>
        {/* card end 04 */}
        <div className="mt-12">
            <div>
                <h1 className="text-4xl font-bold mb-3">Revenue Overview</h1>
            </div>
            <RevenueOverview/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
