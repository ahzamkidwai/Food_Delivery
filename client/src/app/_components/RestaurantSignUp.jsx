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
  return { ...state, [action.field]: action.value };
};

const fields = [
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
  },
  {
    name: "confirmPassword",
    type: "password",
    label: "Confirm Password",
    placeholder: "Re-enter your password",
  },
  {
    name: "restaurantName",
    type: "text",
    label: "Restaurant Name",
    placeholder: "Enter restaurant name",
  },
  { name: "city", type: "text", label: "City", placeholder: "Enter city name" },
  {
    name: "address",
    type: "text",
    label: "Full Address",
    placeholder: "Enter full address",
  },
  {
    name: "contactNumber",
    type: "number",
    label: "Contact Number",
    placeholder: "Enter contact number",
  },
];

const RestaurantSignUp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!state.email.includes("@")) newErrors.email = "Invalid email address";
    if (state.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (state.password !== state.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!state.restaurantName.trim())
      newErrors.restaurantName = "Restaurant name is required";
    if (!state.city.trim()) newErrors.city = "City is required";
    if (!state.address.trim()) newErrors.address = "Full address is required";
    if (!state.contactNumber.match(/^\d{10}$/))
      newErrors.contactNumber = "Enter a valid 10-digit contact number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          {fields.map(({ name, type, label, placeholder }) => (
            <div className="my-2" key={name}>
              <label className="block text-gray-700 text-sm">{label}</label>
              <Input
                type={type}
                placeholder={placeholder}
                value={state[name]}
                onChange={(e) =>
                  dispatch({ field: name, value: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg"
              />
              {errors[name] && (
                <p className="text-red-500 text-xs">{errors[name]}</p>
              )}
            </div>
          ))}
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
