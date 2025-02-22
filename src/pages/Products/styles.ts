import styled from "styled-components";

export const ProductListHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0 22px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProductListTitle = styled.h1`
  font-weight: 400;
  font-size: 24px;
  line-height: 31.68px;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
    line-height: auto;
  }
`;

export const ProductListNumb = styled.p`
  font-size: 14px;
  line-height: 19.6px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ProductList = styled.div`
  flex-wrap: wrap;
  gap: 32px;
  padding-top: 26px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(271px, 1fr));
  justify-items: center;
`;

export const ProductListFooter = styled(ProductListHead)`
  border-bottom: none;
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
  margin-top: 33px;
  padding: 24px 0;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

export const ErrorTitle = styled.h2`
  padding: 25px 0;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;