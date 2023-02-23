import styled, { css } from "styled-components";
import { useState } from "react";
import sessionNotes from "@/data";
import StyledDivider from "../Divider/StyledDivider";
import StyledList from "../StyledListElements";

export default function Journal() {
  const [notes, setNotes] = useState(sessionNotes);

  return (
    <div>
      <h1>Journal</h1>
      {notes.map((note) => (
        <>
          <StyledList key={note.id}>
            <li>
              <date>{note.date}</date>
              <h2>{note.topic}</h2>
              <p>Notes: {note.notes}</p>
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
