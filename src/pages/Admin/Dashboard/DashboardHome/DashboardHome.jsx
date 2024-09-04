


const DashboardHome = () => {

  const handleEdit = () => {

    alert('you can add something')

  }
  const handleDelete = () => {
    <button className="text-green-500">{deletebutton}</button>
  }
  return (
    <div>
      <h2>hello dashboard hoem. we are creating new things</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs font-medium text-gray-500 uppercase">Profile</th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs font-medium text-gray-500 uppercase">Flat ID</th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs font-medium text-gray-500 uppercase">Area (sq ft)</th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs font-medium text-gray-500 uppercase">Bedrooms</th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs font-medium text-gray-500 uppercase">Bathrooms</th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs font-medium text-gray-500 uppercase">Rent ($)</th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-2 py-3 md:px-4 md:py-4">
                <img src="https://via.placeholder.com/40" alt="Profile" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" />
              </td>
              <td className="px-2 py-3 md:px-4 md:py-4">001</td>
              <td className="px-2 py-3 md:px-4 md:py-4">Dhanmondi, Dhaka</td>
              <td className="px-2 py-3 md:px-4 md:py-4">1200</td>
              <td className="px-2 py-3 md:px-4 md:py-4">3</td>
              <td className="px-2 py-3 md:px-4 md:py-4">2</td>
              <td className="px-2 py-3 md:px-4 md:py-4">$800</td>
              <td className="px-2 py-3 md:px-4 md:py-4">
                <button onClick={handleEdit} className="text-blue-500 hover:text-blue-700">Edit</button>
                <button onClick={handleDelete} className="text-red-500 hover:text-red-700 ml-2">Delete

                </button>
              </td>
            </tr>
            {/* Repeat rows as needed */}
          </tbody>
        </table>
      </div>


    </div>
  );
};

export default DashboardHome;