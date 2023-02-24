import styled from "styled-components";
import StyledButton from "../Button";

export default function NotesForm({ onSubmit }) {
  return (
    <div>
      <h1>Add note</h1>
      <StyledForm onSubmit={onSubmit}>
        <label htmlFor="date">Date</label>
        <StyledInput id="date" name="date" />
        <label htmlFor="topic">Topic</label>
        <StyledInput id="topic" name="topic" />
        <label htmlFor="description">Description</label>
        <StyledInput id="description" name="description" />
        <label htmlFor="link">Link</label>
        <StyledInput id="link" name="link" />
        <label htmlFor="challenges">Challenges</label>
        <StyledInput id="challenges" name="challenges" />
        <label htmlFor="tags">tags</label>
        <StyledInput id="tags" name="tags" />
        <StyledButton type="submit">add</StyledButton>
      </StyledForm>
    </div>
  );
}
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.57em;
  padding: 1rem;
  background-color: var(--light-background);
  border-radius: 20px;
`;
const StyledInput = styled.input`
  border-radius: 5px;
  background-color: var(--font-color);
  padding: 0.3rem;
`;
