import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { PaginationProps } from "./types";

import { 
  PaginationWrapper,
  PageButton,
 } from "./styles";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [pages, setPages] = useState<(number | string)[]>([]);

  useEffect(() => {
    let pagesArray;
    if (currentPage && totalPages > 6) {
      pagesArray = [1, 2, 3, "...", totalPages];
    } else {
      pagesArray = [1, 2, 3, 4, 5, 6];
    }
    setPages(pagesArray);
  }, [currentPage, totalPages]);

  return (
    <PaginationWrapper>
      <PageButton
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <FontAwesomeIcon icon={faAngleLeft} size="1x" />
        {"Anterior"}
      </PageButton>

      {pages.map((page, index) => (
        <PageButton
          key={index}
          $isActive={page === currentPage}
          onClick={() => onPageChange(Number(page))}
        >
          {page}
        </PageButton>
      ))}

      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {"Próxima"}
        <FontAwesomeIcon icon={faAngleRight} size="1x" />
      </PageButton>
    </PaginationWrapper>
  );
};

export default Pagination;
