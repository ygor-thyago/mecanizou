import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media only screen and (max-width: 768px) {
    gap: 4px;
  }
`;

export const PageButton = styled.button<{ $isActive?: boolean; disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 15px;
  border-radius: 6px;
  color: ${({ disabled }) => (disabled ? "#A1A1AA" : ({ theme }) => theme.colors.textSecondary)};
  font-size: 14px;
  font-weight: 500;
  padding: 8px 12px;
  border: ${({ $isActive }) => ($isActive ? "1px solid #E4E4E7" : "none")};
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 6px 10px;
  }
`;