import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media only screen and (max-width: 768px) {
    gap: 4px;
  }
`;

const PageButton = styled.button<{ active?: boolean; disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 15px;
  border-radius: 6px;
  color: ${({ disabled }) => (disabled ? "#A1A1AA" : "#3F3F46")};
  font-size: 14px;
  font-weight: 500;
  padding: 8px 12px;
  border: ${({ active }) => (active ? "1px solid #E4E4E7" : "none")};
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 6px 10px;
  }
`;

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
          active={page === currentPage}
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
