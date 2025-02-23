import styled from "styled-components";

export const BreadcrumbWrapper = styled.nav`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 7px 0;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const BreadcrumbItem = styled.span<{ $isLast?: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textGrey};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textGrey};
    &:hover {
      text-decoration: underline;
    }
  }

  font-weight: ${({ $isLast }) => ($isLast ? "bold" : "")};
  color: ${({ $isLast }) => ($isLast ? ({ theme }) => theme.colors.textGrey : "")};
`;

export const Separator = styled.span`
  margin: 0 8px;
`;