import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  color: var(--button-color);
  font-weight: bold;
  padding: 0.5rem 0.5rem 0.2rem 0.5rem;
  margin: 0.3rem;

  ${({ variant }) => {
    if (variant === "link") {
      return css`
        background: transparent;
        color: var(--button-color);
        text-decoration: none;
        margin-bottom: 1rem;
      `;
    }
    if (variant === "bin") {
      return css`
        border: none;
        position: absolute;
        right: 1rem;
        bottom: 1rem;
      `;
    }
    if (variant === "more") {
      return css`
        position: absolute;
        right: 1rem;
        bottom: 0.2rem;
      `;
    }
    if (variant === "plus") {
      return css`
        position: fixed;
        top: 6rem;
        z-index: 1;
      `;
    }
  }}
`;
export default StyledButton;
