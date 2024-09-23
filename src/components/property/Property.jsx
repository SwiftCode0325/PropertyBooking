import { useState } from "react";
import useGetAllData from "../../hooks/useGetAllData";
import Card from "../common/Card";
import { Link } from "react-router-dom";

const Property = () => {
    const [properties, propertiesLoader] = useGetAllData();
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

    return (
        <>
            <div className="container mx-auto py-8 px-6 shadow-lg">
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

            <section className="lg:w-[80%] mx-auto py-10">
                <div className="container mx-auto px-5">
                    <h2 className="text-3xl font-bold text-center mb-10" style={{ color: '#01204E' }}>Featured Properties</h2>

                    {propertiesLoader ? (
                        <div className="flex justify-center items-center h-20">
                            <span className="">Loading...</span>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                            {filteredProperties.slice(0, 12).map(property => <Card key={property._id} property={property} />)}
                        </div>
                    )}

                    <div className="flex justify-center mt-10">
                        <Link to="/property" className="hover:bg-primary text-white bg-[#5994FF] px-4 py-2 rounded">See All</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Property;
