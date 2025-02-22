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
  a {
    text-decoration: none;
    color: #71717A;
    &:hover {
      text-decoration: underline;
    }
  }
  ${({ $isLast }) => $isLast && "font-weight: bold; color: #27272A;"}
`;

export const Separator = styled.span`
  margin: 0 8px;
`;