import styled from "styled-components";
import StyledDivider from "../Divider/StyledDivider";

export default function Header() {
  return (
    <StyledHeaderContainer>
      <StyledHeader>Coding Notebook</StyledHeader>
      <StyledDivider></StyledDivider>
    </StyledHeaderContainer>
  );
}
const StyledHeader = styled.header`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2rem;
  padding: 1rem;
  margin: 0 auto;
`;
const StyledHeaderContainer = styled.div`
  width: 100%;
  max-width: 700px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background-color: var(--background-color);
`;
