import Header from "../Header";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <footer></footer>
    </>
  );
}
const StyledMain = styled.main`
  position: relative;
  width: 100%;
  max-width: 700px;
  top: 4.2rem;
  margin: 0 auto;
  padding: 2rem;
  word-wrap: break-word;
`;
