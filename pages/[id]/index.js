import Button from "@/components/Button";
import SingleNote from "@/components/SingleNote";
import Link from "next/link";

export default function NoteDetails() {
  return (
    <>
      <Button>
        <Link href="/">go back</Link>
      </Button>
      <SingleNote />
    </>
  );
}
