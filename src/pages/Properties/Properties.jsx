import { useState, useEffect } from "react";
import Card from "../../components/common/Card";
import { FaSearch } from "react-icons/fa";

const Properties = () => {
    const [properties, setProperties] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 6;

    useEffect(() => {
        fetch('/properties.json')
            .then(response => response.json())
            .then(data => setProperties(data));
    }, []);

    // Static pagination: Display properties for the current page
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

    // Handle "Next" and "Prev" button functionality
    const nextPage = () => {
        if (currentPage < Math.ceil(properties.length / propertiesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="lg:w-[80%] container mx-auto p-4 bg-[#EBF4F6]">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:gap-4">
                {/* Search Bar */}
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search properties..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-[#01204E] focus:outline-none focus:ring-2 focus:ring-[#5994D4]"
                        />
                        <FaSearch className="absolute left-3 top-3 text-[#01204E]" />
                    </div>
                </div>

                {/* Sort Dropdown */}
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <select
                        className="w-full py-2 px-4 rounded-lg border border-[#01204E] bg-white text-[#01204E] focus:outline-none focus:ring-2 focus:ring-[#5994D4]"
                    >
                        <option value="">Sort by</option>
                        <option value="price-asc">Price (Low to High)</option>
                        <option value="price-desc">Price (High to Low)</option>
                        <option value="area-asc">Area (Low to High)</option>
                        <option value="area-desc">Area (High to Low)</option>
                    </select>
                </div>

                {/* Filter by Location */}
                <div className="w-full md:w-1/3">
                    <select
                        className="w-full py-2 px-4 rounded-lg border border-[#01204E] bg-white text-[#01204E] focus:outline-none focus:ring-2 focus:ring-[#5994D4]"
                    >
                        <option value="">Filter by Location</option>
                        <option value="New York, NY">New York, NY</option>
                        <option value="Los Angeles, CA">Los Angeles, CA</option>
                        {/* Add more locations as needed */}
                    </select>
                </div>
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {currentProperties.length > 0 ? (
                    currentProperties.map((property) => (
                        <Card key={property.id} property={property} />
                    ))
                ) : (
                    <p>No properties found</p>
                )}
            </div>

            {/* Pagination Controls (UI only, no functionality) */}
            <div className="flex justify-center items-center mt-8 space-x-2">
                <button
                    className="px-4 py-2 rounded-lg bg-[#01204E] text-[#EBF4F6] hover:bg-[#5994D4]"
                    onClick={prevPage}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                {Array.from({ length: Math.ceil(properties.length / propertiesPerPage) }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`mx-1 px-4 py-2 rounded-lg ${currentPage === i + 1 ? 'bg-[#5994D4] text-white' : 'bg-[#01204E] text-[#EBF4F6]'} hover:bg-[#5994D4]`}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    className="px-4 py-2 rounded-lg bg-[#01204E] text-[#EBF4F6] hover:bg-[#5994D4]"
                    onClick={nextPage}
                    disabled={currentPage === Math.ceil(properties.length / propertiesPerPage)}
                >
                    Next
                </button>
            </div>

        </div>
    );
};

export default Properties;
