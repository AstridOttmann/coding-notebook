import { useState } from "react";
import sessionNotes from "@/data";
import StyledDivider from "../Divider/StyledDivider";
import { StyledList, StyledTitle } from "../StyledListElements";
import { useRouter } from "next/router";
import useSWR from "swr";
import Button from "@/components/Button";
import Link from "next/link";
import SVGIcon from "../Icons/SVGIcon";
import styled from "styled-components";
import NoteLinkComponent from "../NoteLinkComponent";

export default function Journal() {
  //  const [notes, setNotes] = useState(sessionNotes);
  const router = useRouter();
  const { data } = useSWR("api/notes");
  console.log("data", data);

  // data.sort(
  //   (a, b) => new Date(a.date.split("-")) - new Date(b.date.split("-"))
  // );

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <StyledTitle>Journal</StyledTitle>
      <Button variant="plus" href="/create">
        <SVGIcon variant="plus" width="2.5rem" />
      </Button>

      {data.map((note) => (
        <StyledList variant="listitem" key={note._id}>
          <li>
            <time>{note.date}</time>
            <h2>{note.topic}</h2>
            <p>Description: {note.description}</p>
            <NoteLinkComponent text="Link: " href={note.link} />
            <NoteLinkComponent text="Challenges: " href={note.challenges} />
            <StyledDivider variant="note" />
            <StyledList variant="tags">
              {note.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </StyledList>
            <Button variant="more" href={`${note._id}`}>
              <SVGIcon variant="more" width="3rem" />
            </Button>
          </li>
        </StyledList>
      ))}
    </>
  );
}
