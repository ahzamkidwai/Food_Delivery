import { MONGODB_URI } from "@/app/lib/config/db";
import Restaurant from "@/app/lib/models/restaurantModel";
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

    // Fetch restaurant data from MongoDB
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
