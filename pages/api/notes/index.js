import dbConnect from "@/db/connect";
import Note from "@/db/models/Note";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const notes = await Note.find();
    return response.status(200).json(notes);
  }

  if (request.method === "POST") {
    try {
      const noteData = request.body;
      const note = new Note(noteData);
      await note.save();

      return response.status(201).json({ status: "note created" });
    } catch (error) {
      console.error(error);
      return response.staus(400).json({ error: error.message });
    }
  }
  return response.status(405).json({ status: "Method not allowed" });
}
