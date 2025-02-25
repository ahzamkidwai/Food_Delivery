import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const RestaurantLogin = () => {
  return (
    <div className="flex justify-center border-2 py-12 my-auto bg-gray-100">
      <div className="border-2 border-gray-300 p-6 rounded-lg shadow-lg bg-white w-96">
        <h2 className="text-xl font-bold text-center mb-4">Restaurant Login</h2>

        <div className="my-2">
          <label className="block text-gray-700 text-sm">Email</label>
          <Input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2  border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="my-2">
          <label className="block text-gray-700 text-sm">Password</label>
          <Input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2  border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mt-4">
          <Button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantLogin;
