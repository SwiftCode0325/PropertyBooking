import { useState } from "react";
import Card from "../../components/common/Card";
import useGetAllData from "../../hooks/useGetAllData";

const Properties = () => {
    const [properties, propertiesLoader] = useGetAllData();
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 12;
    const [search, setSearch] = useState("");
    const [priceRange, setPriceRange] = useState(0);
    const [areaRange, setAreaRange] = useState(0);
    const [bathroomsRange, setBathroomsRange] = useState(0);
    const [bedroomsRange, setBedroomsRange] = useState(0);
    const [selectedArea, setSelectedArea] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [filters, setFilters] = useState({
        furnished: false,
        hasBalcony: false,
        hasPool: false,
        hasGarden: false,
        hasElevator: false,
        hasAirConditioning: false,
        hasFridge: false,
        hasWifi: false,
    });

    // Extract unique options for area, city, and district
    const areas = [...new Set(properties.map(p => p.location.area))];
    const cities = [...new Set(properties.map(p => p.location.city))];
    const districts = [...new Set(properties.map(p => p.location.district))];

    // Handle filter changes for checkboxes
    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.checked,
        });
    };

    // Filtered properties based on search, area, city, district, and filters
    const filteredProperties = properties.filter(property => {
        const { location, features } = property;
        const searchFilter = !search || property.title.toLowerCase().includes(search.toLowerCase()) || location.area.toLowerCase().includes(search.toLowerCase());
        const areaFilter = !selectedArea || location.area === selectedArea;
        const cityFilter = !selectedCity || location.city === selectedCity;
        const districtFilter = !selectedDistrict || location.district === selectedDistrict;
        const priceFilter = !priceRange || property.price <= priceRange;
        const areaSizeFilter = !areaRange || features.squareFeet <= areaRange;
        const bathroomsFilter = !bathroomsRange || features.bathRoom <= bathroomsRange;
        const bedroomsFilter = !bedroomsRange || features.bedRoom <= bedroomsRange;

        // Check if each checkbox filter is applied
        const checkboxFilters = Object.keys(filters).every(filterKey => {
            return !filters[filterKey] || features[filterKey];
        });

        return (
            searchFilter &&
            areaFilter &&
            cityFilter &&
            districtFilter &&
            priceFilter &&
            areaSizeFilter &&
            bathroomsFilter &&
            bedroomsFilter &&
            checkboxFilters
        );
    });

    // Calculate total pages
    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

    // Paginate properties
    const paginatedProperties = filteredProperties.slice(
        (currentPage - 1) * propertiesPerPage,
        currentPage * propertiesPerPage
    );

    // Reset filters when search or select options are cleared
    const handleSearchReset = () => {
        setSearch("");
        setSelectedArea("");
        setSelectedCity("");
        setSelectedDistrict("");
        setPriceRange(0);
        setAreaRange(0);
        setBathroomsRange(0);
        setBedroomsRange(0);
        setFilters({
            furnished: false,
            hasBalcony: false,
            hasPool: false,
            hasGarden: false,
            hasElevator: false,
            hasAirConditioning: false,
            hasFridge: false,
            hasWifi: false,
        });
    };

    // Handle page change
    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <>
            <div className="container mx-auto py-4 px-6 shadow-lg">
                <div className="flex text-right my-4">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search road, area, block, city, division, district..."
                        className="border rounded px-4 py-2 w-full"
                    />
                    <button className="hover:bg-primary bg-[#5994FF] text-white px-4 py-2 rounded">SEARCH</button>
                    <button onClick={handleSearchReset} className="hover:bg-red-500 bg-red-400 text-white px-4 py-2 ml-2 rounded">
                        Reset
                    </button>
                </div>
                <div className="bg-white rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                        <select
                            className="border rounded px-4 py-2 w-full"
                            value={selectedArea}
                            onChange={(e) => setSelectedArea(e.target.value)}
                        >
                            <option value="">- Area -</option>
                            {areas.map(area => (
                                <option key={area} value={area}>{area}</option>
                            ))}
                        </select>

                        <select
                            className="border rounded px-4 py-2 w-full"
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                        >
                            <option value="">- City -</option>
                            {cities.map(city => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>

                        <select
                            className="border rounded px-4 py-2 w-full"
                            value={selectedDistrict}
                            onChange={(e) => setSelectedDistrict(e.target.value)}
                        >
                            <option value="">- District -</option>
                            {districts.map(district => (
                                <option key={district} value={district}>{district}</option>
                            ))}
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        <div>
                            <label className="mb-2 flex items-center">Bedrooms ({bedroomsRange}-5)</label>
                            <input onChange={(e) => setBedroomsRange(e.target.value)} value={bedroomsRange} type="range" min="0" max="5" className="w-full" />
                        </div>
                        <div>
                            <label className="mb-2 flex items-center">Bathrooms ({bathroomsRange}-4)</label>
                            <input onChange={(e) => setBathroomsRange(e.target.value)} value={bathroomsRange} type="range" min="0" max="4" className="w-full" />
                        </div>
                        <div>
                            <label className="mb-2 flex items-center">Area ({areaRange}-10000) Sqr ft</label>
                            <input onChange={(e) => setAreaRange(e.target.value)} value={areaRange} type="range" min="0" max="10000" className="w-full" />
                        </div>
                        <div>
                            <label className="mb-2 flex items-center">Price ({priceRange}-100000) BDT</label>
                            <input onChange={(e) => setPriceRange(e.target.value)} value={priceRange} type="range" min="0" max="100000" className="w-full" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Object.keys(filters).map((filterName) => (
                            <div key={filterName}>
                                <input
                                    type="checkbox"
                                    id={filterName}
                                    name={filterName}
                                    checked={filters[filterName]}
                                    onChange={handleFilterChange}
                                />
                                <label className="ml-2" htmlFor={filterName}>
                                    {filterName.charAt(0).toUpperCase() + filterName.slice(1).replace('has', '')}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="lg:w-[90%] container mx-auto p-4 mt-4">
                {/* Properties Grid */}
                {propertiesLoader ? (
                    <div className="flex justify-center items-center h-20">
                        <span className="">Loading...</span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                        {paginatedProperties.map(property => (
                            <Card key={property._id} property={property} />
                        ))}
                    </div>
                )}

                {/* Pagination Controls */}
                <div className="flex justify-center items-center mt-8 space-x-2">
                    <button
                        className="px-4 py-2 rounded-lg bg-[#01204E] text-[#EBF4F6] hover:bg-[#5994D4]"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Prev
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`mx-1 px-4 py-2 rounded-lg ${currentPage === index + 1 ? 'bg-[#5994D4] text-white' : 'bg-[#01204E] text-[#EBF4F6]'} hover:bg-[#5994D4]`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        className="px-4 py-2 rounded-lg bg-[#01204E] text-[#EBF4F6] hover:bg-[#5994D4]"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};

export default Properties;
