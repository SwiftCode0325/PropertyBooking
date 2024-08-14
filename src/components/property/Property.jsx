import Card from "../common/Card";

const Property = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto px-5">
                <h2 className="text-3xl font-bold text-center mb-10" style={{ color: '#01204E' }}>Featured Properties</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {properties.map(property => <Card key={property.id} property={property} />)}
                </div>
                <div className="text-center mt-10">
                    <button className="px-6 py-2 rounded text-white" style={{ backgroundColor: '#01204E' }}>
                        See All
                    </button>
                </div>
            </div>
        </section>
    );
};

const properties = [
    {
        id: 1,
        image: 'https://i.ibb.co/bNMxD70/south-sun-house03.jpg',
        title: 'Luxurious Villa',
        description: 'A beautiful villa in the heart of the city.',
        rate: '$2,500/month',
        area: '3500 sqft',
        beds: 4,
        baths: 3,
        location: 'New York, NY',
    },
    {
        id: 2,
        image: 'https://i.ibb.co/bNMxD70/south-sun-house03.jpg',
        title: 'Modern Apartment',
        description: 'Spacious apartment with city views.',
        rate: '$1,800/month',
        area: '2000 sqft',
        beds: 3,
        baths: 2,
        location: 'Los Angeles, CA',
    },
    {
        id: 3,
        image: 'https://i.ibb.co/bNMxD70/south-sun-house03.jpg',
        title: 'Modern Apartment',
        description: 'Spacious apartment with city views.',
        rate: '$1,800/month',
        area: '2000 sqft',
        beds: 3,
        baths: 2,
        location: 'Los Angeles, CA',
    },
    {
        id: 4,
        image: 'https://i.ibb.co/bNMxD70/south-sun-house03.jpg',
        title: 'Modern Apartment',
        description: 'Spacious apartment with city views.',
        rate: '$1,800/month',
        area: '2000 sqft',
        beds: 3,
        baths: 2,
        location: 'Los Angeles, CA',
    },
    {
        id: 5,
        image: 'https://i.ibb.co/bNMxD70/south-sun-house03.jpg',
        title: 'Modern Apartment',
        description: 'Spacious apartment with city views.',
        rate: '$1,800/month',
        area: '2000 sqft',
        beds: 3,
        baths: 2,
        location: 'Los Angeles, CA',
    },
    {
        id: 6,
        image: 'https://i.ibb.co/bNMxD70/south-sun-house03.jpg',
        title: 'Modern Apartment',
        description: 'Spacious apartment with city views.',
        rate: '$1,800/month',
        area: '2000 sqft',
        beds: 3,
        baths: 2,
        location: 'Los Angeles, CA',
    },
];
export default Property;