import StyledList from "../StyledListElements";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function SingleNote() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(id ? `/api/notes/${id}` : null);
  console.log("sg_note_front", data);

  if (!data) {
    return <h1>Loading... </h1>;
  }
  return (
    <article>
      <time>{data.date}</time>
      <h2>{data.topic}</h2>
      <p>Description: {data.description}</p>
      <p>Link: {data.link}</p>
      <p>Challenges: {data.challenges}</p>
      <StyledList variant="tags">
        {data.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </StyledList>
    </article>
  );
}
