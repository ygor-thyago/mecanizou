import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectProductQuantity, addItem, removeItem, updateQuantity } from "../features/cart/cartSlice";
import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faTrashCan, faCartShopping, faPlus } from "@fortawesome/free-solid-svg-icons";
import cartArrowDown from "../assets/cart-arrow-down.svg";
import Button from "../components/Button";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
  };
}

const ProductWrapper = styled.div``;

const ProductImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 271px;
  border-radius: 12px;
  background: #f4f4f5;
  position: relative;
`;

const ProductBadge = styled.p`
  width: 89px;
  height: 24px;
  color: #fafafa;
  font-weight: 700;
  font-style: italic;
  font-size: 12px;
  line-height: 15.6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 24px;
  background: #23dfc0;
  position: absolute;
  top: 12px;
  left: 12px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductBrand = styled.h3`
  color: #0958b5;
  font-size: 12px;
  font-weight: 500;
  line-height: 15.6px;
  text-transform: uppercase;
  margin-top: 16px;
  order: 2;
`;

const ProductTitle = styled.h2`
  color: #52525b;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  min-height: 48px;
  margin-top: 5px;
  order: 3;
`;

const ProductCod = styled.p`
  color: #52525b;
  font-size: 12px;
  line-height: 15.6px;
  margin-top: 4px;
`;

const ProductPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductPriceBox = styled.div`
  color: #52525ba6;
  font-size: 12px;
  line-height: 15.6px;
  margin-top: 14px;
`;

const ProdDiscountPrice = styled.p`
  color: #52525b;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  display: flex;
  align-items: flex-start;
  margin-top: 2px;

  small {
    font-size: 12px;
    line-height: 27px;
  }
`;

const ProdDiscountTag = styled.p`
  width: 101px;
  height: 24px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15.6px;
  text-align: center;
  color: #1e5d2da6;
  background: #dff9e4;
  margin-top: 12px;
  padding-top: 5px;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    background: #dff9e4;
    position: absolute;
    left: 4px;
    top: 50%;
    transform: rotate(45deg) translateX(-50%);
    transform-origin: top;
    border-radius: 5px;
    z-index: -1;
  }

  &::after {
    content: "";
    width: 4px;
    height: 4px;
    background: #fff;
    position: absolute;
    left: -8px;
    top: 10px;
    border-radius: 100%;
  }
`;

const ProductQuantityWrapper = styled.div`
  color: #3F3F46;
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: space-between;
  background: #F4F4F5;
  border-radius: 40px;
  padding: 4px 14px;
  margin-top: 12px;

  button {
    color: #3F3F46;
  }
`;

const QuantityInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 183px;
  background: #FFFFFF;
  border: none;
  padding: 8px 0;
  border-radius: 24px;

  input {
    max-width: 25px;
    color: #52525B;
    text-align: center;
    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button { 
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      margin: 0; 
    }
  }    
`;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Get cart item quantity
  const quantity = useSelector(selectProductQuantity(product.id));

  const [discountPrice, setDiscountPrice] = useState<number>();
  const [discountPriceDec, setDiscountPriceDec] = useState<number>();
  const [installmentPrice, setInstallmentPrice] = useState<string>();
  const [productQuantity, setProductQuantity] = useState<number>(quantity);

  useEffect(() => {
    if (product.price) {
      const discount = (product.price - (product.price * 5) / 100)
        .toFixed(2)
        .split(".");
      setDiscountPrice(parseInt(discount[0]));
      setDiscountPriceDec(parseInt(discount[1]));

      const installment = (
        Math.ceil(((product.price - (product.price * 5) / 100) / 12) * 100) /
        100
      )
        .toFixed(2)
        .replace(".", ",");
      setInstallmentPrice(installment);
    }
  }, [product.price]);

  const dispatch = useDispatch();
  
  const handleAddToCart = useCallback(() => {
      const addProduct = Object.assign(product, { quantity: 1 });
      dispatch(addItem(addProduct));
      setProductQuantity(productQuantity + 1)
    },
    [dispatch, product, productQuantity]
  );

  const handleRemoveToCart = useCallback(() => {
      const addProduct = Object.assign(product, { quantity: 1 });
      dispatch(removeItem(addProduct));
      setProductQuantity(0)
    },
    [dispatch, product]
  );

  const handleUpdateQuantity = useCallback((element: React.FormEvent<HTMLInputElement>) => {
      const newQuantity = parseInt(element.currentTarget.value)
      const addProduct = Object.assign(product, { quantity: newQuantity });

      if (newQuantity === null || newQuantity === 0) {
        dispatch(removeItem(addProduct));
      }

      dispatch(updateQuantity(addProduct));
      setProductQuantity(newQuantity)
    },
    [dispatch, product]
  );

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
