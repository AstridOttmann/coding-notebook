import { StyledList } from "../StyledListElements";
import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import StyledDivider from "../Divider/StyledDivider";
import Button from "../Button";
import SVGIcon from "../Icons/SVGIcon";
import { useState } from "react";
import Link from "next/link";
import NoteLinkComponent from "../NoteLinkComponent";
import { StyledButtonWrapper } from "../StyledNoteElements";

export default function SingleNote() {
  const [popUp, setPopUp] = useState(false);

  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(id ? `/api/notes/${id}` : null);
  console.log("sg_note_front", data);

  if (!data) {
    return <h1>Loading... </h1>;
  }

  async function handleDelete() {
    try {
      await fetch(`/api/notes/${id}`, { method: "DELETE" });
      router.push("/");
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <StyledSingleNoteContainer>
        <time>{data.date}</time>
        <h2>{data.topic}</h2>
        <p>Description: {data.description}</p>
        <NoteLinkComponent text="Link: " href={data.link} />
        <NoteLinkComponent text="Challenges: " href={data.challenges} />
        <StyledDivider variant="note" />
        <StyledList variant="tags">
          {data.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </StyledList>
        <StyledButtonWrapper>
          <Button type="button" href={`/${id}/edit`}>
            <SVGIcon variant="pencil" width="2rem" />
          </Button>
          <Button type="button" onClick={() => setPopUp(true)}>
            <SVGIcon variant="bin" width="2rem" />
          </Button>
        </StyledButtonWrapper>
      </StyledSingleNoteContainer>
      {popUp && (
        <StyledPopUpContainer>
          <p>Do you want to delete your note?</p>
          <Button
            type="button"
            onClick={() => {
              handleDelete();
              setPopUp(false);
            }}
          >
            <SVGIcon variant="yes" width="2rem" />
          </Button>
          <Button type="button" onClick={() => setPopUp(false)}>
            <SVGIcon variant="cancel" width="2rem" />
          </Button>
        </StyledPopUpContainer>
      )}
    </>
  );
}
const StyledSingleNoteContainer = styled.article`
  position: relative;
  background-color: var(--light-background);
  border-radius: 20px;
  padding: 1rem;
`;

const StyledPopUpContainer = styled.div`
  text-align: center;
`;
// const StyledButtonWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
