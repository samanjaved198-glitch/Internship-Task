import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl font-bold text-green-600">
         Welcome!
      </h1>

      <p className="mt-4 text-gray-600">
        Your account has been created successfully.
      </p>

      <Link
        to="/dashboard"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}

export default Success;