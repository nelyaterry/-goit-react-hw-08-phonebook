import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 35%;
  padding: 24px 32px;
  background-color: rgba(67, 67, 67, 0.3);

  & > button {
    margin-top: 40px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;
`;

export const InputName = styled.span`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 24px;
  color: rgb(75 75 75);
`;

export const Input = styled.input`
  height: 40px;
  padding: 8px 24px;
  font-size: 18px;
  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;
  background-color: rgba(228, 228, 228, 0.5);
  outline: none;
  border: none;
`;
