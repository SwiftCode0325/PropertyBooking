import React, { useContext } from 'react';
import uploadImageToImgBB from '../../../utils/helper';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../provider/AuthProvider';
import axios from 'axios';

const AddRoom = () => {
    const { user } = useContext(AuthContext);
    const handleAddRoom = async (e) => {
        e.preventDefault();
        const form = e.target;
        const id = form.id.value;
        const title = form.title.value;
        const propertyType = form.propertyType.value;
        const propertyFor = form.propertyFor.value;
        const status = form.status.value;
        const description = form.description.value;
        const availableFrom = form.availableFrom.value;
        const price = form.price.value;
        const advanceFee = form.advanceFee.value;
        const currency = form.currency.value;
        const image1 = form.image1.files[0];
        const image2 = form.image2.files[0];
        if (!image1 || !image2) {
            return toast.error("image1 and image2 must be required");
        }

        const newImage1 = await uploadImageToImgBB(image1);
        const newImage2 = await uploadImageToImgBB(image2);
        if (!newImage1 || !newImage2) {
            return toast.error("something failed! try again");
        }
        const location = {
            block: form.block.value,
            road: form.road.value,
            area: form.area.value,
            city: form.city.value,
            district: form.district.value,
            division: form.division.value,
            postalCode: form.postalCode.value,
            lat: form.lat.value,
            long: form.long.value,
            number: form.number.value,
        };
        const features = {
            bedRoom: form.bedRoom.value,
            bathRoom: form.bathRoom.value,
            kitchen: form.kitchen.value,
            livingRoom: form.livingRoom.value,
            attachedBathRoom: form.attachedBathRoom.value,
            squareFeet: form.squareFeet.value,
            parking: form.parking.value,
            hasWifi: form.wifi.checked,
            hasFridge: form.hasFridge.checked,
            hasAirConditioning: form.ac.checked,
            hasElevator: form.hasElevator.checked,
            hasGarden: form.hasGarden.checked,
            hasPool: form.hasPool.checked,
            hasBalcony: form.hasBalcony.checked,
            furnished: form.furnished.checked,
        };

        const security = {
            restriction: {
                pets: form.pets.checked,
                smoking: form.smoking.checked,
                drink: form.drink.checked,
                drugs: form.drugs.checked,
                girlsAllowed: form.girlsAllowed.checked,
                boysAllowed: form.boysAllowed.checked,
            },
            securityGarage: form.securityGarage.checked,
        }
        const amenities =
            [
                form.cctv.value,
                form.guards.value,
            ]
        const image = [newImage1, newImage2]
        const newData = {
            id,
            title,
            propertyType,
            propertyFor,
            status,
            description,
            availableFrom,
            price,
            advanceFee,
            currency,
            location,
            features,
            security,
            amenities,
            image,
            auth: {
                id: user._id,
                name: user.displayName,
                email: user.email,
            }
        }

        try {
            const { data: res } = await axios.post('https://room-psi-ten.vercel.app/api/rooms/add-room', newData);
            console.log(res);
            if (res.success) {
                toast.success("added room successfully");
                form.reset();
            }

        } catch (error) {
            toast.error("something went wrong, try again");
            console.log("something went wrong,", error);

        }
    };
    return (
        <>
            <div className='container mx-auto px-4 py-6'>
                <h1 className='text-center my-5 font-bold text-primary text-2xl'>Add Room</h1>
                <div className='px-4'>
                    <div className="dark:bg-gray-100 dark:text-gray-900 mb-3">
                        <form
                            onSubmit={handleAddRoom}
                            className="container flex flex-col mx-auto space-y-12"
                        >
                            {/* Property Details Section */}
                            <fieldset className="grid grid-cols-4 gap-6 rounded-md shadow-sm dark:bg-gray-50">
                                <div className="space-y-2 col-span-full lg:col-span-1">
                                    <p className="font-medium text-lg">Property Details</p>
                                    <p className="text-xs text-gray-500">
                                        Provide details about the property.
                                    </p>
                                </div>
                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="id" className="text-sm font-semibold">
                                            ID
                                        </label>
                                        <input
                                            id="id"
                                            name="id"
                                            type="text"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="title" className="text-sm font-semibold">
                                            Title
                                        </label>
                                        <input
                                            id="title"
                                            name="title"
                                            type="text"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="description" className="text-sm font-semibold">
                                            Description
                                        </label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows="3"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        ></textarea>
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="propertyType" className="text-sm font-semibold">
                                            Property Type
                                        </label>
                                        <input
                                            id="propertyType"
                                            name="propertyType"
                                            type="text"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="propertyFor" className="text-sm font-semibold">
                                            For
                                        </label>
                                        <input
                                            id="propertyFor"
                                            name="propertyFor"
                                            type="text"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="status" className="text-sm font-semibold">
                                            Status
                                        </label>
                                        <input
                                            id="status"
                                            name="status"
                                            type="text"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="availableFrom" className="text-sm font-semibold">
                                            Available From
                                        </label>
                                        <input
                                            id="availableFrom"
                                            name="availableFrom"
                                            type="date"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="price" className="text-sm font-semibold">
                                            Price
                                        </label>
                                        <input
                                            id="price"
                                            name="price"
                                            type="number"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="advanceFee" className="text-sm font-semibold">
                                            Advance Fee
                                        </label>
                                        <input
                                            id="advanceFee"
                                            name="advanceFee"
                                            type="number"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-6">
                                        <label htmlFor="currency" className="text-sm font-semibold">
                                            Currency
                                        </label>
                                        <input
                                            id="currency"
                                            name="currency"
                                            type="text"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                </div>
                            </fieldset>

                            {/* Location Section */}
                            <fieldset className="grid grid-cols-4 gap-6  rounded-md shadow-sm dark:bg-gray-50">
                                <div className="space-y-2 col-span-full lg:col-span-1">
                                    <p className="font-medium text-lg">Location</p>
                                    <p className="text-xs text-gray-500">
                                        Enter the property location details.
                                    </p>
                                </div>
                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="block" className="text-sm font-semibold">
                                            Block
                                        </label>
                                        <input
                                            id="block"
                                            name="block"
                                            type="text"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="road" className="text-sm font-semibold">
                                            Road
                                        </label>
                                        <input
                                            id="road"
                                            name="road"
                                            type="text"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="area" className="text-sm font-semibold">
                                            Area
                                        </label>
                                        <input
                                            id="area"
                                            name="area"
                                            type="text"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="city" className="text-sm font-semibold">
                                            City
                                        </label>
                                        <input
                                            id="city"
                                            name="city"
                                            type="text"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="district" className="text-sm font-semibold">
                                            District
                                        </label>
                                        <input
                                            id="district"
                                            name="district"
                                            type="text"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="division" className="text-sm font-semibold">
                                            Division
                                        </label>
                                        <input
                                            id="division"
                                            name="division"
                                            type="text"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="postalCode" className="text-sm font-semibold">
                                            Postal Code
                                        </label>
                                        <input
                                            id="postalCode"
                                            name="postalCode"
                                            type="number"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="lat" className="text-sm font-semibold">
                                            Latitude
                                        </label>
                                        <input
                                            id="lat"
                                            name="lat"
                                            type="number"
                                            step="0.000001"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="long" className="text-sm font-semibold">
                                            Longitude
                                        </label>
                                        <input
                                            id="long"
                                            name="long"
                                            type="number"
                                            step="0.000001"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="number" className="text-sm font-semibold">
                                            Contact Number
                                        </label>
                                        <input
                                            id="number"
                                            name="number"
                                            type="number"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                </div>
                            </fieldset>

                            {/* Features Section */}
                            <fieldset className="grid grid-cols-4 gap-6  rounded-md shadow-sm dark:bg-gray-50">
                                <div className="space-y-2 col-span-full lg:col-span-1">
                                    <p className="font-medium text-lg">Features</p>
                                    <p className="text-xs text-gray-500">
                                        Select the features of the property.
                                    </p>
                                </div>
                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="bedRoom" className="text-sm font-semibold">
                                            Bed Room
                                        </label>
                                        <input
                                            id="bedRoom"
                                            name="bedRoom"
                                            type="number"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="bathRoom" className="text-sm font-semibold">
                                            Bath Room
                                        </label>
                                        <input
                                            id="bathRoom"
                                            name="bathRoom"
                                            type="number"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="kitchen" className="text-sm font-semibold">
                                            Kitchen
                                        </label>
                                        <input
                                            id="kitchen"
                                            name="kitchen"
                                            type="number"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="livingRoom" className="text-sm font-semibold">
                                            Living Room
                                        </label>
                                        <input
                                            id="livingRoom"
                                            name="livingRoom"
                                            type="number"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label
                                            htmlFor="attachedBathRoom"
                                            className="text-sm font-semibold"
                                        >
                                            Attached Bath Room
                                        </label>
                                        <input
                                            id="attachedBathRoom"
                                            name="attachedBathRoom"
                                            type="number"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="squareFeet" className="text-sm font-semibold">
                                            Square Feet
                                        </label>
                                        <input
                                            id="squareFeet"
                                            name="squareFeet"
                                            type="text"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-6">
                                        <label htmlFor="parking" className="text-sm font-semibold">
                                            Parking
                                        </label>
                                        <input
                                            id="parking"
                                            name="parking"
                                            type="text"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>

                                    {/* checkbox area */}
                                    <div>
                                        <div className="flex items-center">
                                            <input
                                                id="wifi"
                                                name="wifi"
                                                type="checkbox"
                                                className="rounded-md bg-[#01204E] border border-white text-white"
                                            />
                                            <label htmlFor="wifi" className="ml-2 text-sm font-semibold">
                                                WiFi
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="ac"
                                                name="ac"
                                                type="checkbox"
                                                className="rounded-md bg-[#01204E] border border-white text-white"
                                            />
                                            <label htmlFor="ac" className="ml-2 text-sm font-semibold">
                                                Air Conditioning
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="hasFridge"
                                                name="hasFridge"
                                                type="checkbox"
                                                className="rounded-md bg-[#01204E] border border-white text-white"
                                            />
                                            <label
                                                htmlFor="hasFridge"
                                                className="ml-2 text-sm font-semibold"
                                            >
                                                Fridge
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="hasElevator"
                                                name="hasElevator"
                                                type="checkbox"
                                                className="rounded-md bg-[#01204E] border border-white text-white"
                                            />
                                            <label
                                                htmlFor="hasElevator"
                                                className="ml-2 text-sm font-semibold"
                                            >
                                                Elevator
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="hasGarden"
                                                name="hasGarden"
                                                type="checkbox"
                                                className="rounded-md bg-[#01204E] border border-white text-white"
                                            />
                                            <label
                                                htmlFor="hasGarden"
                                                className="ml-2 text-sm font-semibold"
                                            >
                                                Garden
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="hasPool"
                                                name="hasPool"
                                                type="checkbox"
                                                className="rounded-md bg-[#01204E] border border-white text-white"
                                            />
                                            <label htmlFor="hasPool" className="ml-2 text-sm font-semibold">
                                                Pool
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="hasBalcony"
                                                name="hasBalcony"
                                                type="checkbox"
                                                className="rounded-md bg-[#01204E] border border-white text-white"
                                            />
                                            <label
                                                htmlFor="hasBalcony"
                                                className="ml-2 text-sm font-semibold"
                                            >
                                                Balcony
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="furnished"
                                                name="furnished"
                                                type="checkbox"
                                                className="rounded-md bg-[#01204E] border border-white text-white"
                                            />
                                            <label
                                                htmlFor="furnished"
                                                className="ml-2 text-sm font-semibold"
                                            >
                                                Furnished
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            {/* Security Section */}

                            <fieldset className="grid grid-cols-4 gap-6  rounded-md shadow-sm dark:bg-gray-50">
                                <div className="space-y-2 col-span-full lg:col-span-1">
                                    <p className="font-medium text-lg">Security Restrictions</p>
                                    <p className="text-xs text-gray-500">
                                        Specify security and restriction details.
                                    </p>
                                </div>
                                <div className="grid grid-cols-3 gap-4 col-span-full lg:col-span-3">
                                    {/* Pets */}
                                    <div className="flex items-center">
                                        <input
                                            id="pets"
                                            name="pets"
                                            type="checkbox"
                                            className="rounded-md bg-[#01204E] border border-white text-white"
                                        />
                                        <label htmlFor="pets" className="ml-2 text-sm font-semibold">
                                            Pets
                                        </label>
                                    </div>

                                    {/* Smoking */}
                                    <div className="flex items-center">
                                        <input
                                            id="smoking"
                                            name="smoking"
                                            type="checkbox"
                                            className="rounded-md bg-[#01204E] border border-white text-white"
                                        />
                                        <label htmlFor="smoking" className="ml-2 text-sm font-semibold">
                                            Smoking
                                        </label>
                                    </div>

                                    {/* Drinking */}
                                    <div className="flex items-center">
                                        <input
                                            id="drink"
                                            name="drink"
                                            type="checkbox"
                                            className="rounded-md bg-[#01204E] border border-white text-white"
                                        />
                                        <label htmlFor="drink" className="ml-2 text-sm font-semibold">
                                            Drinking
                                        </label>
                                    </div>
                                    {/* Drugs */}
                                    <div className="flex items-center">
                                        <input
                                            id="drugs"
                                            name="drugs"
                                            type="checkbox"
                                            className="rounded-md bg-[#01204E] border border-white text-white"
                                        />
                                        <label htmlFor="drugs" className="ml-2 text-sm font-semibold">
                                            Drugs
                                        </label>
                                    </div>

                                    {/* Girls Allowed */}
                                    <div className="flex items-center">
                                        <input
                                            id="girlsAllowed"
                                            name="girlsAllowed"
                                            type="checkbox"
                                            className="rounded-md bg-[#01204E] border border-white text-white"
                                        />
                                        <label
                                            htmlFor="girlsAllowed"
                                            className="ml-2 text-sm font-semibold"
                                        >
                                            Girls Allowed
                                        </label>
                                    </div>

                                    {/* Boys Allowed */}
                                    <div className="flex items-center">
                                        <input
                                            id="boysAllowed"
                                            name="boysAllowed"
                                            type="checkbox"
                                            className="rounded-md bg-[#01204E] border border-white text-white"
                                        />
                                        <label
                                            htmlFor="boysAllowed"
                                            className="ml-2 text-sm font-semibold"
                                        >
                                            Boys Allowed
                                        </label>
                                    </div>

                                    {/* Security Garage */}
                                    <div className="flex items-center">
                                        <input
                                            id="securityGarage"
                                            name="securityGarage"
                                            type="checkbox"
                                            className="rounded-md bg-[#01204E] border border-white text-white"
                                        />
                                        <label
                                            htmlFor="securityGarage"
                                            className="ml-2 text-sm font-semibold"
                                        >
                                            Security Garage
                                        </label>
                                    </div>
                                </div>
                            </fieldset>


                            {/* amenities */}
                            <fieldset className="grid grid-cols-4 gap-6  rounded-md shadow-sm dark:bg-gray-50">
                                <div className="space-y-2 col-span-full lg:col-span-1">
                                    <p className="font-medium text-lg">Amenities</p>
                                    <p className="text-xs text-gray-500">
                                        Provide amenities details for the property.
                                    </p>
                                </div>
                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                    <div className="col-span-full">
                                        <label htmlFor="cctv" className="text-sm font-semibold">
                                            CCTV
                                        </label>
                                        <input
                                            id="cctv"
                                            name="cctv"
                                            type="text"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="guards" className="text-sm font-semibold">
                                            Security Guards
                                        </label>
                                        <input
                                            id="guards"
                                            name="guards"
                                            type="text"
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                </div>
                            </fieldset>

                            {/* Media Section */}
                            <fieldset className="grid grid-cols-4 gap-6  rounded-md shadow-sm dark:bg-gray-50">
                                <div className="space-y-2 col-span-full lg:col-span-1">
                                    <p className="font-medium text-lg">Media</p>
                                    <p className="text-xs text-gray-500">
                                        Upload media related to the property.
                                    </p>
                                </div>
                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                    <div className="col-span-full">
                                        <label htmlFor="images" className="text-sm font-semibold">
                                            Image 1
                                        </label>
                                        <input
                                            id="image"
                                            name="image1"
                                            type="file"
                                            multiple
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="videos" className="text-sm font-semibold">
                                            Image 2
                                        </label>
                                        <input
                                            id="videos"
                                            name="image2"
                                            type="file"
                                            multiple
                                            className="w-full rounded-md p-2 border-2 border-[#01204EA3]"
                                        />
                                    </div>
                                </div>
                            </fieldset>

                            {/* Form Actions */}
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#01204E] text-white rounded-md"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default AddRoom;