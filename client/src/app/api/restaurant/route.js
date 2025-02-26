import { MONGODB_URI } from "@/app/lib/config/db";
import Restaurant from "@/app/lib/models/restaurantModel";
import RestaurantSignUpModel from "@/app/lib/models/restaurantSignUpModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
    }

    const data = await Restaurant.find();
    console.log("Data inside Route.js:", data);

    return NextResponse.json({
      result: true,
      data,
    });
  } catch (error) {
    return NextResponse.json(
      { result: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    console.log("We are inside POST Request");
    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
    }
    const payload = await request.json();
    console.log("POST Request Payload:", payload);
    const newRestaurant = await RestaurantSignUpModel.create(payload);

    return NextResponse.json(
      {
        success: true,
        message: "Restaurant signed up successfully!",
        data: newRestaurant,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to sign up restaurant",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
