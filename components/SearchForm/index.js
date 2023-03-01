import { StyledForm, StyledInput } from "../StyledFormElements";
export default function SearchForm({ onChange, value }) {
  return (
    <StyledForm variant="search">
      <label htmlFor="search"></label>
      <StyledInput
        id="search"
        name="search"
        value={value}
        placeholder="🔍 SEARCH IN TAGS"
        onChange={onChange}
      ></StyledInput>
    </StyledForm>
  );
}
