import { useLoaderData, useParams } from "react-router-dom";


const DetailsPage = () => {
  const items = useLoaderData();

  const { id } = useParams()

  const item = items.find(item => item.id == id);

  const { image, title, description, rate, area, beds, baths, location } = item;
  console.log(title);

  return (
    <div>
      <h2 className=" text-primary text-3xl font-bold text-center">Flat Details</h2>
      <div className="flex flex-col lg:flex-row items-center max-w-3xl mx-auto bg-secondary border-2 border-primary rounded-lg shadow-lg mt-8 mb-8 overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <img src={image} alt={title} className="w-full h-48 sm:h-64 lg:h-auto lg:w-1/2 object-cover lg:max-h-96" />
        <div className="p-6 sm:p-8 flex-1 text-primary">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent mb-4">{title}</h2>
          <p className="text-sm sm:text-base mb-4">{description}</p>
          <div className="space-y-2">
            <p className="text-sm sm:text-base">Rate: {rate}</p>
            <p className="text-sm sm:text-base">Area: {area} sq ft</p>
            <p className="text-sm sm:text-base">Beds: {beds}</p>
            <p className="text-sm sm:text-base">Baths: {baths}</p>
            <p className="text-sm sm:text-base">Location: {location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;