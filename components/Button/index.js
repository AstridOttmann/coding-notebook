import StyledButton from "./StyledButton";

export default function Button(props) {
  return (
    <StyledButton as={props.href && "a"} {...props}>
      {props.children}
    </StyledButton>
  );
}
