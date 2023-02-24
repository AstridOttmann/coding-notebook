import NotesForm from "@/components/NotesForm";
import { useRouter } from "next/router";
import useSWR from "swr";
import Button from "@/components/Button";
import SVGIcon from "@/components/Icons/SVGIcon";

export default function Editpage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, mutate } = useSWR(id ? `/api/notes/${id}` : null);

  if (!data) {
    return <h1>Loading...</h1>;
  }
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const editData = Object.fromEntries(formData);
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: "PATCH",
        body: JSON.stringify(editData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        await response.json();
        mutate();
        router.push(`/${id}`);
        event.target.reset();
      } else {
        console.error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Button type="button" href={`/${id}`}>
        <SVGIcon variant="go_back" width="2.5rem" />
      </Button>
      <NotesForm isEditMode={true} note={data} onSubmit={handleSubmit} />
    </>
  );
}
