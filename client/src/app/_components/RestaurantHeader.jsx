import Image from "next/image";
import Link from "next/link";

const RestaurantHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      {/* Logo Section */}
      <div className="logo">
        <Image
          src="/food-delivery.png"
          height={60}
          width={60}
          alt="Food Delivery Logo"
        />
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul className="flex space-x-6 text-lg font-semibold">
          <li>
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/restaurant" className="hover:text-blue-600 transition">
              Login / Signup
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-blue-600 transition">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default RestaurantHeader;
