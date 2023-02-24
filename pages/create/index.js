import { useRouter } from "next/router";
import NotesForm from "@/components/NotesForm";
import useSWR from "swr";
import Link from "next/link";
import Button from "@/components/Button";
import SVGIcon from "@/components/Icons/SVGIcon";

export default function CreatePage() {
  const router = useRouter();
  const { notes, mutate } = useSWR("/api/notes");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const noteData = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        body: JSON.stringify(noteData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        await response.json();
        mutate(notes);
        router.push("/");
      } else {
        console.error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
    event.target.reset();
  }

  return (
    <>
      <Button type="button" href="/">
        <SVGIcon variant="go_back" width="2.5rem" />
      </Button>
      <NotesForm onSubmit={handleSubmit} />
    </>
  );
}
