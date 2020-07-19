import styled from "styled-components";

interface StyledProps {
  error?: string;
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 300px;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: ${({ error }: StyledProps) =>
    error ? "1px solid red" : "1px solid #000"};
`;

export const Label = styled.label``;

export const Error = styled.div`
  color: red;
  font-size: 0.75em;
`;
