import dbConnect from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function GET() {
  await dbConnect();
  const users = await Contact.find({});
  return Response.json(users);
}

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  const user = await Contact.create(body);
  return Response.json(user);
}
