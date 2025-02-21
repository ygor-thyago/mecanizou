import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface BreadcrumbProps {
  items: { label: string; link?: string }[];
}

const BreadcrumbWrapper = styled.nav`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 7px 0;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const BreadcrumbItem = styled.span<{ isLast?: boolean }>`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: #71717A;
    &:hover {
      text-decoration: underline;
    }
  }
  ${({ isLast }) => isLast && "font-weight: bold; color: #27272A;"}
`;

const Separator = styled.span`
  margin: 0 8px;
`;

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <BreadcrumbWrapper>
      {items.map((item, index) => (
        <BreadcrumbItem key={index} isLast={index === items.length - 1}>
          {item.link ? <Link to={item.link}>{item.label}</Link> : item.label}
          {index < items.length - 1 && <Separator><FontAwesomeIcon icon={faAngleRight} size="2xs" color="#71717A" /></Separator>}
        </BreadcrumbItem>
      ))}
    </BreadcrumbWrapper>
  );
};

export default Breadcrumb;
