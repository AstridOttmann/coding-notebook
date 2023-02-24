import styled, { css } from "styled-components";

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
const StyledButton = styled.button`
  width: 30%;
  margin: 1rem auto;
  background-color: var(--button-color);
  font-weight: bold;
  border-radius: 10px;
  padding: 0.3rem;
`;
