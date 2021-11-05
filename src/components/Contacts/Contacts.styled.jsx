import styled from "@emotion/styled";

export const ContacstList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 600px;
`;

export const Contact = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  margin-bottom: 12px;
  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;
  background-color: rgb(93 203 152 / 20%);
`;

export const ContactName = styled.span`
  width: 40%;
  margin-right: 12px;
  font-weight: 600;
  font-size: 24px;
  color: rgb(75 75 75);
`;

export const ContactPhone = styled.span`
  margin-right: 12px;
  font-weight: 500;
  font-size: 20px;
  color: rgb(75 75 75);
`;

export const MessageNotFound = styled.p`
  font-weight: 600;
  font-size: 24px;
  color: rgb(75 75 75);
`;
