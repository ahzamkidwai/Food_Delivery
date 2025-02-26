import mongoose from "mongoose";

const restaurantSignUpSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    restaurantName: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    contactNumber: { type: String, required: true },
  },
  { timestamps: true }
);

const RestaurantSignUpModel =
  mongoose.models.RestaurantSignUpModel ||
  mongoose.model("RestaurantSignUpModel", restaurantSignUpSchema);

export default RestaurantSignUpModel;
