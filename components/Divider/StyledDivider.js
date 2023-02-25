import styled, { css } from "styled-components";

const StyledDivider = styled.div`
  border: none;
  border-radius: 50px;
  width: 50%;
  margin: 0.2rem auto;
  height: 5px;
  background: var(--font-color);

  ${({ variant }) => {
    if (variant === "note") {
      return css`
        margin: 1.5rem auto;
      `;
    }
  }}
`;
export default StyledDivider;
