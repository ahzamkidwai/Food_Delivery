const RestaurantFooter = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-12 absolute w-full mb-1">
      <div className="container mx-auto">
        <p className="text-lg font-semibold">
          © {new Date().getFullYear()} Resto App. All Rights Reserved.
        </p>
        <p className="text-sm text-gray-400 mt-1">
          Designed with ❤️ by{" "}
          <span className="text-blue-400 font-medium">Your Brand</span>
        </p>
      </div>
    </footer>
  );
};

export default RestaurantFooter;
