import dbConnect from "@/db/connect";
import Note from "@/db/models/Note";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const note = await Note.findById(id);
    console.log("sg_note", note);

    if (!note) {
      return response.stauts(404).json({ status: "Not found" });
    }
    return response.status(200).json(note);
  }
}
