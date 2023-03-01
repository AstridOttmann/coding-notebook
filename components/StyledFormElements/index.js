import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.6em;
  padding: 1rem;
  background-color: var(--light-background);
  border-radius: 20px;

  ${({ variant }) => {
    if (variant === "search") {
      return css`
        gap: 0;
      `;
    }
  }}
`;
export const StyledInput = styled.input`
  border-radius: 5px;
  background-color: var(--background-color);
  color: var(--font-color);
  padding: 0.3rem;
`;
export const StyledInputDate = styled.input`
  background-color: var(--button-color);
`;
