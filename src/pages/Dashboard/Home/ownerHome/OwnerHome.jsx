import React from "react";

const OwnerHome = () => {
  return (
    <div className="p-4">
      {/* Owner Dashboard Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Owner Dashboard</h1>
        <p className="text-sm text-gray-500">Manage your flats and monitor their status</p>
      </header>

      {/* Owner Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Flats Listed */}
          <OverviewCard title="Flats Listed" value="8" color="bg-blue-100" />

          {/* Flats Rented */}
          <OverviewCard title="Flats Rented" value="5" color="bg-green-100" />

          {/* Pending Approvals */}
          <OverviewCard title="Pending Approvals" value="2" color="bg-yellow-100" />

          {/* Earnings */}
          <OverviewCard title="Total Earnings" value="$4,500" color="bg-indigo-100" />
        </div>

        {/* Recent Tenant Activities */}
        <RecentTenantActivities />

      </div>

      {/* Manage Flats Section */}
      <div className="mt-8">
        <ManageFlats />
      </div>

      {/* Owner Reports & Analytics */}
      <div className="mt-8">
        <OwnerReportsAnalytics />
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
const RecentTenantActivities = () => (
  <div className="p-4 bg-white rounded-lg shadow">
    <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Tenant Activities</h2>
    <p className="text-gray-500">Track tenant interactions (e.g., inquiries, rental agreements).</p>
  </div>
);

const ManageFlats = () => (
  <div className="p-4 bg-white rounded-lg shadow">
    <h2 className="text-xl font-semibold text-gray-700 mb-4">Manage Flats</h2>
    <p className="text-gray-500">View, edit, or remove your listed flats. Track their rental status and tenant feedback.</p>
    {/* Add functionality for listing or editing flats here */}
  </div>
);

const OwnerReportsAnalytics = () => (
  <div className="p-4 bg-white rounded-lg shadow">
    <h2 className="text-xl font-semibold text-gray-700 mb-4">Reports & Analytics</h2>
    <p className="text-gray-500">Visual reports on earnings, tenant engagement, and flat performance.</p>
  </div>
);

export default OwnerHome;
