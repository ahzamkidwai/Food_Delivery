import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  name: String,
});

// Avoid model overwrite error by checking if the model already exists
const Restaurant =
  mongoose.models.Restaurant || mongoose.model("Restaurant", RestaurantSchema);

export default Restaurant;
