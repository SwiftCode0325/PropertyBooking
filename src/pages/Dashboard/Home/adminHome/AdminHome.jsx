import React from "react";

const AdminHome = () => {
  return (
    <div className="p-4">
      {/* Dashboard Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-sm text-gray-500">Manage flats, users, and system settings</p>
      </header>

      {/* Dashboard Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Total Flats */}
          <OverviewCard title="Total Flats" value="120" color="bg-blue-100" />

          {/* Active Users */}
          <OverviewCard title="Active Users" value="45" color="bg-green-100" />

          {/* Pending Requests */}
          <OverviewCard title="Pending Requests" value="5" color="bg-yellow-100" />

          {/* Earnings Overview */}
          <OverviewCard title="Earnings Overview" value="$12,000" color="bg-indigo-100" />
        </div>

        {/* Recent Activities Section */}
        <RecentActivities />

      </div>

      {/* User and Flat Management Section */}
      <div className="mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Management */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">User Management</h2>
            <UserManagement />
          </div>

          {/* Flat Management */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Flat Management</h2>
            <FlatManagement />
          </div>
        </div>
      </div>

      {/* Reports & Analytics */}
      <div className="mt-8">
        <ReportsAnalytics />
      </div>

    </div>
  );
};

// Reusable Overview Card Component
const OverviewCard = ({ title, value, color }) => (
  <div className={`${color} p-4 rounded-lg shadow`}>
    <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
    <p className="text-2xl font-bold text-gray-900">{value}</p>
  </div>
);

// Placeholder components for sections
const RecentActivities = () => (
  <div className="p-4 bg-white rounded-lg shadow">
    <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activities</h2>
    <p className="text-gray-500">Activity logs for user actions and flat updates.</p>
  </div>
);

const UserManagement = () => (
  <div>
    <p className="text-gray-500">User list and management controls (e.g., activate, deactivate, delete users).</p>
  </div>
);

const FlatManagement = () => (
  <div>
    <p className="text-gray-500">Approve or reject flat listings. View and manage flats.</p>
  </div>
);

const ReportsAnalytics = () => (
  <div className="p-4 bg-white rounded-lg shadow">
    <h2 className="text-xl font-semibold text-gray-700 mb-4">Reports & Analytics</h2>
    <p className="text-gray-500">Visual reports on rentals, earnings, and user growth.</p>
  </div>
);

export default AdminHome;
