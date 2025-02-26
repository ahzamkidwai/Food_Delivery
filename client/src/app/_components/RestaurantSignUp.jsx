import { useReducer, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  restaurantName: "",
  city: "",
  address: "",
  contactNumber: "",
};

const reducer = (state, action) => {
  // console.log("We are inside reducer and state is : ", state);
  // console.log("We are inside reducer and action is : ", action);
  return { ...state, [action.field]: action.value };
};

const RestaurantSignUp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!state.email.includes("@")) {
      newErrors.email = "Invalid email address";
    }
    if (state.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (state.password !== state.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!state.restaurantName.trim()) {
      newErrors.restaurantName = "Restaurant name is required";
    }
    if (!state.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!state.address.trim()) {
      newErrors.address = "Full address is required";
    }
    if (!state.contactNumber.match(/^\d{10}$/)) {
      newErrors.contactNumber = "Enter a valid 10-digit contact number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle Submit is called!!!");
    if (validateForm()) {
      console.log("Form submitted successfully:", state);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="border-2 border-gray-300 p-6 rounded-lg shadow-lg bg-white w-96">
        <h2 className="text-xl font-bold text-center mb-4">
          Restaurant Signup
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="my-2">
            <label className="block text-gray-700 text-sm">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={state.email}
              onChange={(e) =>
                dispatch({ field: "email", value: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="my-2">
            <label className="block text-gray-700 text-sm">Password</label>
            <Input
              type="password"
              placeholder="Enter your password"
              value={state.password}
              onChange={(e) =>
                dispatch({ field: "password", value: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="my-2">
            <label className="block text-gray-700 text-sm">
              Confirm Password
            </label>
            <Input
              type="password"
              placeholder="Re-enter your password"
              value={state.confirmPassword}
              onChange={(e) =>
                dispatch({ field: "confirmPassword", value: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Restaurant Name */}
          <div className="my-2">
            <label className="block text-gray-700 text-sm">
              Restaurant Name
            </label>
            <Input
              type="text"
              placeholder="Enter restaurant name"
              value={state.restaurantName}
              onChange={(e) =>
                dispatch({ field: "restaurantName", value: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.restaurantName && (
              <p className="text-red-500 text-xs">{errors.restaurantName}</p>
            )}
          </div>

          {/* City */}
          <div className="my-2">
            <label className="block text-gray-700 text-sm">City</label>
            <Input
              type="text"
              placeholder="Enter city name"
              value={state.city}
              onChange={(e) =>
                dispatch({ field: "city", value: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.city && (
              <p className="text-red-500 text-xs">{errors.city}</p>
            )}
          </div>

          {/* Full Address */}
          <div className="my-2">
            <label className="block text-gray-700 text-sm">Full Address</label>
            <Input
              type="text"
              placeholder="Enter full address"
              value={state.address}
              onChange={(e) =>
                dispatch({ field: "address", value: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.address && (
              <p className="text-red-500 text-xs">{errors.address}</p>
            )}
          </div>

          {/* Contact Number */}
          <div className="my-2">
            <label className="block text-gray-700 text-xs">
              Contact Number
            </label>
            <Input
              type="number"
              placeholder="Enter contact number"
              value={state.contactNumber}
              onChange={(e) =>
                dispatch({ field: "contactNumber", value: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-xs">{errors.contactNumber}</p>
            )}
          </div>

          {/* Register Button */}
          <div className="mt-4">
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestaurantSignUp;
