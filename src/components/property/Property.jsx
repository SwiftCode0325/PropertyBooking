import useGetAllData from "../../hooks/useGetAllData";
import Card from "../common/Card";
import { Link } from "react-router-dom";

const Property = () => {
    const [properties, propertiesLoader] = useGetAllData();

    return (
        <section className="lg:w-[80%] mx-auto py-10">
            <div className="container mx-auto px-5">
                <h2 className="text-3xl font-bold text-center mb-10" style={{ color: '#01204E' }}>Featured Properties</h2>

                {propertiesLoader ? (
                    <div className="flex justify-center items-center h-20">
                        <span className="">Loading...</span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                        {properties.slice(4, 10).map(property => <Card key={property._id} property={property} />)}
                    </div>
                )}

                <div className="text-center mt-10">
                    <Link to={"/property"} className="px-6 py-2 rounded text-white" style={{ backgroundColor: '#01204E' }}>
                        See All
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Property;