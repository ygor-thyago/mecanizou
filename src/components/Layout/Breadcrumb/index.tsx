import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { BreadcrumbProps } from "../../../types";

import {
  BreadcrumbWrapper,
  BreadcrumbItem,
  Separator,
} from "./styles";

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <BreadcrumbWrapper>
      {items.map((item, index) => (
        <BreadcrumbItem key={index} $isLast={index === items.length - 1}>
          {item.link ? <Link onClick={(e) => {e.preventDefault()}} to={item.link}>{item.label}</Link> : item.label}
          {index < items.length - 1 && <Separator><FontAwesomeIcon icon={faAngleRight} size="2xs" /></Separator>}
        </BreadcrumbItem>
      ))}
    </BreadcrumbWrapper>
  );
};

export default Breadcrumb;
