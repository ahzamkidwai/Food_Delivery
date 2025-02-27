import { useReducer, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { hashPassword } from "../lib/utils/hashing";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { fields, initialState } from "../lib/utils/signup";

const reducer = (state, action) => {
  return { ...state, [action.field]: action.value };
};

const RestaurantSignUp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = useState({});
  const [registerLoading, setRegisterLoading] = useState(false);
  const [showAlertMessage, setShowAlertMessage] = useState(null);

  const validateForm = () => {
    let newErrors = {};
    if (!state.name.trim()) newErrors.name = "Name is required";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setRegisterLoading(true);
        let enteredPassword = state.password;
        const hashedPassword = await hashPassword(enteredPassword);
        const userData = {
          name: state.name,
          email: state.email,
          password: hashedPassword,
          restaurantName: state.restaurantName,
          city: state.city,
          address: state.address,
          contactNumber: state.contactNumber,
        };

        const response = await fetch("http://localhost:3000/api/restaurant", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          setShowAlertMessage({
            type: "error",
            title: "ERROR OCCURRED",
            message: `HTTP error! Status: ${response.status}`,
          });
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log("Response Data is:", responseData);
        console.log("Form submitted successfully:", state);
        setRegisterLoading(false);
        setShowAlertMessage({
          type: "success",
          title: "REGISTRATION SUCCESSFULL",
          message: "Registration Successfull. You can login now.",
        });
        setTimeout(() => {
          setShowAlertMessage(null);
        }, 5000);
      } catch (error) {
        console.error("Error submitting form:", error.message);
        setRegisterLoading(false);
        setShowAlertMessage({
          type: "error",
          title: "REGISTRATION FAILED",
          message: error.message,
        });
        setTimeout(() => {
          setShowAlertMessage(null);
        }, 5000);
      }
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
              className={`w-full text-white font-semibold py-2 rounded-lg transition ${
                registerLoading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-600"
              }`}
              disabled={registerLoading}
            >
              {registerLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  {/* Processing... */}
                </>
              ) : (
                "Register"
              )}
            </Button>
            <div className="mt-4">
              {showAlertMessage && (
                <Alert
                  variant={
                    showAlertMessage.type === "error"
                      ? "destructive"
                      : "default"
                  }
                >
                  {showAlertMessage.type === "error" && (
                    <AlertCircle className="h-4 w-4" />
                  )}
                  <AlertTitle>{showAlertMessage.title}</AlertTitle>
                  <AlertDescription>
                    {showAlertMessage.message}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestaurantSignUp;
