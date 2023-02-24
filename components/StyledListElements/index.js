import styled, { css } from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  position: relative;

  ${({ variant }) => {
    if (variant === "listitem") {
      return css`
        background-color: var(--light-background);
        border-radius: 20px;
        padding: 1rem;
      `;
    }
    if (variant === "tags") {
      return css`
        display: flex;
        gap: 1rem;
      `;
    }
  }}
`;

export const StyledTitle = styled.h1`
  text-align: center;
`;
