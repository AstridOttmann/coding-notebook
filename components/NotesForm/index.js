import Button from "../Button";
import SVGIcon from "../Icons/SVGIcon";
import {
  StyledForm,
  StyledInput,
  StyledInputDate,
} from "../StyledFormElements";

export default function NotesForm({ onSubmit, isEditMode, note }) {
  return (
    <div>
      <h1>{isEditMode ? "Edit note" : "Add note"}</h1>
      <StyledForm onSubmit={onSubmit}>
        <label htmlFor="date">Date</label>
        {isEditMode ? (
          <StyledInput id="date" name="date" defaultValue={note.date} />
        ) : (
          <StyledInputDate
            id="date"
            name="date"
            type="date"
            min="2020-01-01"
            max="2030-12-31"
          />
        )}

        <label htmlFor="topic">Topic</label>
        <StyledInput
          id="topic"
          name="topic"
          defaultValue={isEditMode ? note.topic : null}
        />
        <label htmlFor="description">Description</label>
        <StyledInput
          id="description"
          name="description"
          defaultValue={isEditMode ? note.description : ""}
        />
        <label htmlFor="link">Link</label>
        <StyledInput
          id="link"
          name="link"
          defaultValue={isEditMode ? note.link : ""}
        />
        <label htmlFor="challenges">Challenges</label>
        <StyledInput
          id="challenges"
          name="challenges"
          defaultValue={isEditMode ? note.challenges : ""}
        />
        <label htmlFor="tags">tags</label>
        <StyledInput
          id="tags"
          name="tags"
          defaultValue={isEditMode ? note.tags : ""}
        />
        <Button variant="" type="submit">
          <SVGIcon variant="yes" width="2.5rem" />
        </Button>
      </StyledForm>
    </div>
  );
}
