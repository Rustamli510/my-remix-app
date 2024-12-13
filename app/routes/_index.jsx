import { useLoaderData, Link } from "@remix-run/react";
import React from "react";

function HomePage() {
  const users = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        User Directory
      </h1>
      <div className="flex justify-center mb-10">
        <Link
          to="/form"
          className="bg-blue-500 text-white py-2 px-4 rounded-md text-lg font-medium hover:bg-blue-600 transition duration-200"
        >
          Add New User
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {users.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-5"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {item.name}
            </h2>
            <p className="text-gray-600">
              Email: {item.email || "Not provided"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const loader = async () => {
  const users = await fetch("http://localhost:3000/users").then((res) =>
    res.json()
  );
  return users;
};

export default HomePage;
