import { useEffect, useState } from "react";
import axios from "axios";
import ContentLoader from "react-content-loader";
import Container from "../../components/Layout/Container";
import Breadcrumb from "../../components/Layout/Breadcrumb";
import ProductCard from "../../components/UI/ProductCard";
import Pagination from "../../components/Layout/Pagination";
import { Product } from "../../types";
import { motion } from "framer-motion";

import {
  ProductListHead,
  ProductListTitle,
  ProductListNumb,
  ProductList,
  ProductListFooter,
  ErrorTitle,
} from "./styles";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const totalPages = 90;

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setTimeout(() => {
          setProducts(response.data);
          setLoading(false);
        }, 2500);
      })
      .catch((err) => {
        console.error("Erro ao buscar produtos:", err);
        setError(
          "Não foi possível carregar os produtos. Tente novamente mais tarde."
        );
        setLoading(false);
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
        {!error ? (<ProductListNumb>12 de 9.999 resultados</ProductListNumb>) : ''}
      </ProductListHead>
      {error ? (
        <ErrorTitle>{error}</ErrorTitle>
      ) : (
        <>
        <ProductList>
          {loading ? (
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
                <rect x="0" y="0" rx="12" ry="12" width="271" height="271" />
                <rect x="0" y="287" rx="4" ry="4" width="50" height="12" />
                <rect x="0" y="307" rx="4" ry="4" width="247" height="20" />
                <rect x="0" y="333" rx="4" ry="4" width="221" height="20" />
                <rect x="0" y="363" rx="4" ry="4" width="128" height="12" />
                <rect x="0" y="390" rx="4" ry="4" width="59" height="12" />
                <rect x="0" y="410" rx="4" ry="4" width="144" height="24" />
                <rect x="0" y="441" rx="4" ry="4" width="69" height="12" />
                <rect x="0" y="466" rx="4" ry="4" width="271" height="40" />
              </ContentLoader>
            ))
          ) : (
            products.map((product, index) => (
              <motion.div
                key={product.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, scale: 0.3, filter: "blur(20px)" },
                  visible: (i) => ({
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.2, delay: i * 0.1 },
                  }),
                }}
              >
                <ProductCard {...product} />
              </motion.div>
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
      </>
      )}
    </Container>
  );
}

export default Products;
