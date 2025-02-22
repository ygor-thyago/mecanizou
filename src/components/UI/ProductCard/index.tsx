import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useProductCard } from "./useProductCard";
import { ProductCardProps } from "./types";
import { faBolt, faTrashCan, faCartShopping, faPlus } from "@fortawesome/free-solid-svg-icons";
import cartArrowDown from "../../../assets/cart-arrow-down.svg";
import Button from "../Button";

import { 
  ProductWrapper,
  ProductImageWrapper,
  ProductBadge,
  ProductInfo,
  ProductBrand,
  ProductTitle,
  ProductCod,
  ProductPriceWrapper,
  ProductPriceBox,
  ProdDiscountPrice,
  ProdDiscountTag,
  ProductQuantityWrapper,
  QuantityInputWrapper,
} from "./styles";


const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  const { 
    discountPrice,
    discountPriceDec,
    installmentPrice,
    handleAddToCart,
    handleRemoveToCart,
    handleUpdateQuantity,
    productQuantity,
    quantity,
   } = useProductCard({product});

  return (
    <ProductWrapper>
      <ProductImageWrapper>
        <ProductBadge>
          <FontAwesomeIcon icon={faBolt} size="1x" color="#FAFAFA" />
          Express
        </ProductBadge>
        <img src={product.image} alt={product.title} width="100" />
      </ProductImageWrapper>
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductBrand>{product.category}</ProductBrand>
      </ProductInfo>
      <ProductCod>Cod.: OMSS15W40LUBX1024742CX24</ProductCod>
      <ProductPriceWrapper>
        <ProductPriceBox>
          <p>
            <s>R$ {product.price.toFixed(2).replace(".", ",")}</s>
          </p>
          <ProdDiscountPrice>
            R$ {discountPrice}
            <small>,{discountPriceDec}</small>
          </ProdDiscountPrice>
          <p>Em até 12x R${installmentPrice}</p>
        </ProductPriceBox>
        <ProdDiscountTag>5% OFF NO PIX</ProdDiscountTag>
      </ProductPriceWrapper>
      
      {quantity > 0 ? (
        <ProductQuantityWrapper>
          <button onClick={handleRemoveToCart}>
            <FontAwesomeIcon icon={faTrashCan} size="1x" />
          </button>
          <QuantityInputWrapper>
            <FontAwesomeIcon icon={faCartShopping} size="1x" />
            <input type="number" value={productQuantity} onChange={handleUpdateQuantity} />
          </QuantityInputWrapper>
          <button onClick={handleAddToCart}>
            <FontAwesomeIcon icon={faPlus} size="1x" />
          </button>
        </ProductQuantityWrapper>
      ) : (
        <Button onClick={quantity > 3 ? handleRemoveToCart : handleAddToCart}>
          <img src={cartArrowDown} alt="" />
          {"Adicionar ao Carrinho"}
        </Button>
      )}
    </ProductWrapper>
  );
};

export default ProductCard;
