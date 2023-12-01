import { hash } from "bcrypt";
import connectMongoDB from "../../../../lib/mongodb";
import User from "../../../../models/user";
import { NextResponse } from "next/server";

connectMongoDB();

export async function POST(req) {
  try {
    const { fullName, email, password } = await req.json();

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await hash(password, 12);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
