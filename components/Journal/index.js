import styled, { css } from "styled-components";
import { useState } from "react";
import sessionNotes from "@/data";
import StyledDivider from "../Divider/StyledDivider";
import StyledList from "../StyledListElements";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function Journal() {
  //  const [notes, setNotes] = useState(sessionNotes);
  const router = useRouter();
  const { data } = useSWR("api/notes");
  console.log("data", data);
  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Journal</h1>
      {data.map((note) => (
        <>
          <StyledList variant="listitem" key={note._id}>
            <li>
              <time>{note.date}</time>
              <h2>{note.topic}</h2>
              <p>Description: {note.description}</p>
              <p>Link: {note.link}</p>
              <p>Challenges: {note.challenges}</p>
              <StyledList variant="tags">
                {note.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </StyledList>
              <StyledDivider></StyledDivider>
            </li>
          </StyledList>
        </>
      ))}
    </div>
  );
}
