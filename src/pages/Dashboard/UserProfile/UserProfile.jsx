import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import uploadImageToImgBB from '../../../utils/helper';
import axios from 'axios';
import toast from 'react-hot-toast';

const UserProfile = () => {
  const { user, setUserUpdateTrigger, userUpdateTrigger, setUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('profile');
  const handleTabSwitch = (tab) => setActiveTab(tab);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.displayName.value;
    const imageFile = form.image.files[0];

    if (imageFile) {
      const image = await uploadImageToImgBB(imageFile);
      try {
        const { data: res } = await axios.put(`http://localhost:5000/api/users/update/profile/${user._id}`, { displayName, photoURL: image });
        setUser(res.user);

        toast.success("profile updated successfully");
        handleTabSwitch('profile')

      } catch (error) {
        toast.error("something went wrong, try again");
        console.log("something went wrong,", error);
      }
    } else {
      try {
        const { data: res } = await axios.put(`http://localhost:5000/api/users/update/profile/${user._id}`, { displayName, photoURL: null });
        setUser(res.user);

        toast.success("profile updated successfully");
        handleTabSwitch('profile')
      } catch (error) {
        toast.error("something went wrong, try again");
        console.log("something went wrong,", error);

      }
    }
  }
  return (
    <div className='container mx-auto px-4 py-6 '>
      <h1 className='text-center my-5 font-bold text-primary text-2xl' >User Profile</h1>
      <div className='px-4'>
        <div className="flex justify-center items-center p-4">
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
            {/* User Image */}
            <div className="flex justify-center">
              <img
                src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/fF7ZYLL/user-icon-1024x1024-dtzturco.png'}
                alt="User Avatar"
                className="rounded-full w-24 h-24 object-cover"
              />
            </div>

            {/* User Info */}
            <div className="text-center mt-4">
              <h1 className="text-2xl font-bold">{user?.displayName || 'User Name'}</h1>
              <p className="text-gray-600">{user?.email || 'user@example.com'}</p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mt-6">
              <button
                className={`px-4 py-2 text-sm font-semibold ${activeTab === 'profile' ? 'border-b-2 border-blue-500' : 'text-gray-500'}`}
                onClick={() => handleTabSwitch('profile')}
              >
                Profile
              </button>
              <button
                className={`ml-4 px-4 py-2 text-sm font-semibold ${activeTab === 'update' ? 'border-b-2 border-blue-500' : 'text-gray-500'}`}
                onClick={() => handleTabSwitch('update')}
              >
                Update Profile
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-6">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-4">Profile Info</h2>
                  <p className="text-gray-700">Name: {user?.displayName || 'N/A'}</p>
                  <p className="text-gray-700">Email: {user?.email || 'N/A'}</p>
                </div>
              )}

              {/* Update Profile Tab */}
              {activeTab === 'update' && (
                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
                  <form onSubmit={handleUpdateProfile}>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Update Name</label>
                      <input
                        type="text"
                        name='displayName'
                        required
                        defaultValue={user?.displayName}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Update Image</label>
                      <input
                        type="file"
                        name='image'
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter your email"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-primary text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                    >
                      Save Changes
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;