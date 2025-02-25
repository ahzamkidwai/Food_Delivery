import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const RestaurantSignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="border-2 border-gray-300 p-6 rounded-lg shadow-lg bg-white w-96">
        <h2 className="text-xl font-bold text-center mb-4">
          Restaurant Signup
        </h2>

        {/* Email */}
        <div className="my-2">
          <label className="block text-gray-700 text-sm">Email</label>
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password */}
        <div className="my-2">
          <label className="block text-gray-700 text-sm">Password</label>
          <Input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Confirm Password */}
        <div className="my-2">
          <label className="block text-gray-700 text-sm">
            Confirm Password
          </label>
          <Input
            type="password"
            placeholder="Re-enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Restaurant Name */}
        <div className="my-2">
          <label className="block text-gray-700 text-sm">Restaurant Name</label>
          <Input
            type="text"
            placeholder="Enter restaurant name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* City */}
        <div className="my-2">
          <label className="block text-gray-700 text-sm">City</label>
          <Input
            type="text"
            placeholder="Enter city name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Full Address */}
        <div className="my-2">
          <label className="block text-gray-700 text-sm">Full Address</label>
          <Input
            type="text"
            placeholder="Enter full address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Contact No. */}
        <div className="my-2">
          <label className="block text-gray-700 text-sm">Contact Number</label>
          <Input
            type="number"
            placeholder="Enter contact number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Register Button */}
        <div className="mt-4">
          <Button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSignUp;
