import styled, { css } from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;

  ${({ variant }) => {
    if (variant === "tags") {
      return css`
        display: flex;
        gap: 1rem;
      `;
    }
  }}
`;
export default StyledList;
