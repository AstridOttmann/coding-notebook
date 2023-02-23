import dbConnect from "@/db/connect";
import Note from "@/db/models/Note";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const notes = await Note.find();
    return response.status(200).json(notes);
  }
}
