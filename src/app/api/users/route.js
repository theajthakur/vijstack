import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  await dbConnect();
  const users = await User.find({});
  return Response.json(users);
}

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  const user = await User.create(body);
  return Response.json(user);
}
