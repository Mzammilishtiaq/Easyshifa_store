"use client";

import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const Dashboard = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure components are only rendered on the client
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Notification Banner */}
      <div className="bg-orange-100 text-orange-700 p-4 rounded mb-6">
        We regret to inform you that our server is currently experiencing technical difficulties.
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Total Orders</h3>
          <p className="text-2xl font-bold">13,647</p>
          <p className="text-green-500 text-sm">+2.3% Last Week</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">New Leads</h3>
          <p className="text-2xl font-bold">9,526</p>
          <p className="text-green-500 text-sm">+8.1% Last Month</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Deals</h3>
          <p className="text-2xl font-bold">976</p>
          <p className="text-red-500 text-sm">-9.3% Last Month</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Booked Revenue</h3>
          <p className="text-2xl font-bold">$123.6k</p>
          <p className="text-red-500 text-sm">-10.5% Last Month</p>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <h3 className="text-lg font-semibold mb-4">Performance</h3>
        <div className="h-48 bg-gray-200 rounded"></div> {/* Placeholder for chart */}
      </div>

      {/* Conversions and Sessions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Conversions</h3>
          <div className="h-32 bg-gray-200 rounded"></div> {/* Placeholder for chart */}
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Sessions by Country</h3>
         
        </div>
      </div>

      {/* World Map Section */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <h3 className="text-lg font-semibold mb-4">World Map</h3>
        <div className="h-64">
          <ComposableMap projectionConfig={{ scale: 200 }}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: { fill: "#D6D6DA", outline: "none" },
                      hover: { fill: "#F53", outline: "none" },
                      pressed: { fill: "#E42", outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>

      {/* Top Pages */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <h3 className="text-lg font-semibold mb-4">Top Pages</h3>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border-b p-2">Page Path</th>
              <th className="border-b p-2">Page Views</th>
              <th className="border-b p-2">Exit Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">/larkon/ecommerce.html</td>
              <td className="p-2">465</td>
              <td className="p-2 text-green-500">4%</td>
            </tr>
            {/* ...other rows */}
          </tbody>
        </table>
      </div>

      {/* Recent Orders */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border-b p-2">Order ID</th>
              <th className="border-b p-2">Date</th>
              <th className="border-b p-2">Product</th>
              <th className="border-b p-2">Customer Name</th>
              <th className="border-b p-2">Email ID</th>
              <th className="border-b p-2">Phone No.</th>
              <th className="border-b p-2">Address</th>
              <th className="border-b p-2">Payment Type</th>
              <th className="border-b p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">#RB8525</td>
              <td className="p-2">29 April 2024</td>
              <td className="p-2">Product A</td>
              <td className="p-2">Anna M. Hines</td>
              <td className="p-2">anna.hines@mail.com</td>
              <td className="p-2">(+1)-555-1556-261</td>
              <td className="p-2">Burr Ridge/Illinois</td>
              <td className="p-2">Credit Card</td>
              <td className="p-2 text-green-500">Completed</td>
            </tr>
            {/* ...other rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
