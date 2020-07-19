import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Fieldset = styled.fieldset`
  margin: 0 15px 10px;
  padding-top: 10px;
`;

export const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 260px;
`;

export const Input = styled.input`
  display: flex;
  margin: 10px 0;
  width: 260px;
`;

export const Error = styled.div`
  color: red;
  margin-bottom: 10px;
`;
