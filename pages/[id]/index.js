import Button from "@/components/Button";
import SingleNote from "@/components/SingleNote";
import Link from "next/link";
import SVGIcon from "@/components/Icons/SVGIcon";

export default function NoteDetails() {
  return (
    <>
      <Button type="button" href="/">
        <SVGIcon variant="go_back" width="2.5rem" />
      </Button>
      <SingleNote />
    </>
  );
}
