import { useState, useEffect } from "react";
import Card from "../../components/common/Card";
import { FaSearch } from "react-icons/fa";
import useGetAllData from "../../hooks/useGetAllData";

const Properties = () => {
    const [properties, propertiesLoader] = useGetAllData();
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 6;


    return (
        <div className="lg:w-[90%] container mx-auto p-4">

            {/* Properties Grid */}
            {propertiesLoader ? (
                <div className="flex justify-center items-center h-20">
                    <span className="">Loading...</span>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {properties.slice(4, 13).map(property => <Card key={property._id} property={property} />)}
                </div>
            )}

            {/* Pagination Controls (UI only, no functionality) */}
            <div className="flex justify-center items-center mt-8 space-x-2">
                <button
                    className="px-4 py-2 rounded-lg bg-[#01204E] text-[#EBF4F6] hover:bg-[#5994D4]"
                >
                    Prev
                </button>
                <button
                    className={`mx-1 px-4 py-2 rounded-lg ${currentPage === 1 ? 'bg-[#5994D4] text-white' : 'bg-[#01204E] text-[#EBF4F6]'} hover:bg-[#5994D4]`}
                >
                    1
                </button>
                <button
                    className={`mx-1 px-4 py-2 rounded-lg ${currentPage === 2 ? 'bg-[#5994D4] text-white' : 'bg-[#01204E] text-[#EBF4F6]'} hover:bg-[#5994D4]`}
                >
                    2
                </button>
                <button
                    className={`mx-1 px-4 py-2 rounded-lg ${currentPage === 3 ? 'bg-[#5994D4] text-white' : 'bg-[#01204E] text-[#EBF4F6]'} hover:bg-[#5994D4]`}
                >
                    3
                </button>
                <button
                    className="px-4 py-2 rounded-lg bg-[#01204E] text-[#EBF4F6] hover:bg-[#5994D4]"
                >
                    Next
                </button>
            </div>

        </div>
    );
};

export default Properties;
