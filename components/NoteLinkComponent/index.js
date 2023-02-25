import Button from "../Button";
import { StyledNoteLink } from "../StyledNoteElements";

export default function NoteLinkComponent({ text, href }) {
  return (
    <StyledNoteLink>
      <p>{text}</p>
      <Button variant="text" href={href} target="_blank">
        <small>{href}</small>
      </Button>
    </StyledNoteLink>
  );
}
