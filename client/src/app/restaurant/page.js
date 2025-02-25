"use client";
import { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignUp from "../_components/RestaurantSignUp";

const Restaurant = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="h-full ">
      {/* Title */}
      <div className="flex flex-col items-center justify-center  ">
        <h1 className="text-xl font-bold text-gray-800 mb-2">
          Restaurant Login / Signup
        </h1>

        {/* Login or Signup Form */}
        <div className="w-full max-w-md p-2 bg-white rounded-lg shadow-lg border border-gray-300">
          {login ? <RestaurantLogin /> : <RestaurantSignUp />}

          {/* Toggle Button */}
          <button
            className="w-full mt-2 py-2 px-4 border-2 border-red-600 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
            onClick={() => setLogin(!login)}
          >
            {login
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
