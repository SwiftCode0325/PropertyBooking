import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchField = () => {
  const [startDate, setStartDate] = useState(null);
  const [priceRange, setPriceRange] = useState(0);

  return (
    <div className="container mx-auto py-8 px-6 shadow-lg">
      <div className="flex text-right my-4">
        <input
          type="text"
          placeholder="Enter an address"
          className="border rounded px-4 py-2 w-full"
        />
        <button className="hover:bg-primary bg-[#5994FF] text-white px-4 py-2 rounded">SEARCH</button>
      </div>
      <div className="bg-white rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">

          <select className="border rounded px-4 py-2 w-full">
            <option>- Area -</option>
            <option>Kochukhet</option>
            <option>Badda</option>
            <option>Gulsan</option>
            <option>Banani</option>
            <option>Airport</option>
          </select>
          <select className="border rounded px-4 py-2 w-full">
            <option>- County/State -</option>
          </select>
          <select className="border rounded px-4 py-2 w-full">
            <option>- City -</option>
            <option>Dhaka</option>
          </select>
          <select className="border rounded px-4 py-2 w-full">
            <option>- Neighborhood -</option>
            <option>Students</option>
            <option>Employer</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <select className="border rounded px-4 py-2 w-full">
            <option>- Status -</option>
            <option>Elite</option>
            <option>High</option>
            <option>Middle</option>
            <option>Lower Middle</option>
          </select>
          <select className="border rounded px-4 py-2 w-full">
            <option>- Type -</option>
          </select>
          <select className="border rounded px-4 py-2 w-full">
            <option>- Labels -</option>
            <option>C Block</option>
            <option>F Block</option>
            <option>P Block</option>
            <option>Q Block</option>
          </select>

          {/* Date Picker Implementation */}
          <div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="border rounded px-4 py-2 w-full"
              placeholderText="Date Descending"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block mb-2">Bedrooms</label>
            <input type="range" min="1" max="6" className="w-full" />
          </div>
          <div>
            <label className="block mb-2">Bathrooms</label>
            <input type="range" min="1" max="4" className="w-full" />
          </div>
          <div>
            <label className="block mb-2">Area size</label>
            <input type="range" min="3" max="2030" className="w-full" />
          </div>
          <div>
            <label className="mb-2 flex items-center">Price ({priceRange}-100000) BDT</label>
            <input onChange={(e) => setPriceRange(e.target.value)} defaultValue={priceRange} type="range" min="570" max="100000" className="w-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <input type="checkbox" id="airConditioning" />
            <label className="ml-2" htmlFor="airConditioning">
              Air Conditioning
            </label>
          </div>
          <div>
            <input type="checkbox" id="kitchen" />
            <label className="ml-2" htmlFor="kitchen">
              Kitchen
            </label>
          </div>
          <div>
            <input type="checkbox" id="barbeque" />
            <label className="ml-2" htmlFor="barbeque">
              Barbeque
            </label>
          </div>
          <div>
            <input type="checkbox" id="laundry" />
            <label className="ml-2" htmlFor="laundry">
              Laundry
            </label>
          </div>
          <div>
            <input type="checkbox" id="cableTV" />
            <label className="ml-2" htmlFor="cableTV">
              Cable TV
            </label>
          </div>
          <div>
            <input type="checkbox" id="swimmingPool" />
            <label className="ml-2" htmlFor="swimmingPool">
              Swimming Pool
            </label>
          </div>
          <div>
            <input type="checkbox" id="dryer" />
            <label className="ml-2" htmlFor="dryer">
              Dryer
            </label>
          </div>
          <div>
            <input type="checkbox" id="wifi" />
            <label className="ml-2" htmlFor="wifi">
              Wi-Fi
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchField;
