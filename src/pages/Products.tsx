import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import ContentLoader from "react-content-loader"
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

const ProductListHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0 22px;
  border-bottom: 1px solid #e4e4e7;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProductListTitle = styled.h1`
  font-weight: 400;
  font-size: 24px;
  line-height: 31.68px;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
    line-height: auto;
  }
`;

const ProductListNumb = styled.p`
  font-size: 14px;
  line-height: 19.6px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ProductList = styled.div`
  flex-wrap: wrap;
  gap: 32px;
  padding-top: 26px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(271px, 1fr));
  justify-items: center;
`;

const ProductListFooter = styled(ProductListHead)`
  border-bottom: none;
  border-top: 1px solid #e4e4e7;
  margin-top: 33px;
  padding: 24px 0;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 90;

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setTimeout(() => {
        setProducts(response.data);
      }, 2500);
    });
  }, []);

  return (
    <Container>
      <Breadcrumb
        items={[
          { label: "Home", link: "/" },
          { label: "Óleos e Lubrificantes", link: "/oleos-e-lubrificantes" },
          { label: "Óleo do Motor" },
        ]}
      />
      <ProductListHead>
        <ProductListTitle>
          Resultados para: <strong>Óleo do Motor</strong>
        </ProductListTitle>

        <ProductListNumb>12 de 9.999 resultados</ProductListNumb>
      </ProductListHead>
      <ProductList>
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          )) 
        ) : (
          Array.from({ length: 11 }, (_, x) => (
            <ContentLoader
              key={x}
              speed={5}
              width={271}
              height={506}
              viewBox="0 0 271 506"
              backgroundColor="#E6E4E7"
              foregroundOpacity={.5}
              title="Carregando..."
            >
              <rect x="0" y="0" rx="12  " ry="12" width="271" height="271" />
              <rect x="0" y="287" rx="4  " ry="4" width="50" height="12" />
              <rect x="0" y="307" rx="4  " ry="4" width="247" height="20" />
              <rect x="0" y="333" rx="4  " ry="4" width="221" height="20" />
              <rect x="0" y="363" rx="4  " ry="4" width="128" height="12" />
              <rect x="0" y="390" rx="4  " ry="4" width="59" height="12" />
              <rect x="0" y="410" rx="4  " ry="4" width="144" height="24" />
              <rect x="0" y="441" rx="4  " ry="4" width="69" height="12" />
              <rect x="0" y="466" rx="4  " ry="4" width="271" height="40" />
            </ContentLoader>
          ))
        )}
      </ProductList>
      <ProductListFooter>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

        <ProductListNumb>12 de 9.999 resultados</ProductListNumb>
      </ProductListFooter>
    </Container>
  );
}

export default Products;
