import styled from "styled-components";

const StyledButton = styled.button`
  margin-right: 40px;
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
  &:hover {
    color: #636363;
  }
`;

const LoginButton = () => {
  return (
    <StyledButton>
    </StyledButton>
  );
};

export default LoginButton;
