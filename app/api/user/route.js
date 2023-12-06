// import { getServerSession } from "next-auth";
// import connectMongoDB from "../../../lib/mongodb";
// import User from "../../../models/user";
// import { NextResponse } from "next/server";
// import { authOptions } from "../auth/[...nextauth]/route";

// export async function GET(req) {
//   const session = await getServerSession(authOptions);
//   return NextResponse.json({ error: session }, { status: 401 });
//   if (!session) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   try {
//     await connectMongoDB();

//     // Retrieve user data from MongoDB using the session email
//     const userData = await User.findOne({ email: session.user.email });

//     return NextResponse.json({ user: userData }, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching user data from MongoDB:", error);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }
