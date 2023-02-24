import StyledList from "../StyledListElements";
import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import StyledDivider from "../Divider/StyledDivider";
import Button from "../Button";
import SVGIcon from "../Icons/SVGIcon";

export default function SingleNote() {
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
    <StyledSingleNoteContainer>
      <time>{data.date}</time>
      <h2>{data.topic}</h2>
      <p>Description: {data.description}</p>
      <p>Link: {data.link}</p>
      <p>Challenges: {data.challenges}</p> <StyledDivider />
      <StyledList variant="tags">
        {data.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </StyledList>
      <Button type="button" onClick={() => handleDelete()}>
        <SVGIcon variant="bin" width="2rem" />
      </Button>
    </StyledSingleNoteContainer>
  );
}
const StyledSingleNoteContainer = styled.article`
  background-color: var(--light-background);
  border-radius: 20px;
  padding: 1rem;
`;
