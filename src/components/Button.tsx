import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #0958B5;
  font-weight: 600;
  font-size: 14px;
  line-height: 23.8px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  background: #EDFAFF;
  padding: ${({ theme }) => theme.spacing.medium};
  margin-top: 10px;
`;

export default Button;
