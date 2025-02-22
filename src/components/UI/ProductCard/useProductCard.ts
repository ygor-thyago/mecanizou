import { useDispatch, useSelector } from "react-redux";
import { selectProductQuantity, addItem, removeItem, updateQuantity } from "../../../features/cart/redux/cartSlice";
import { useCallback, useEffect, useState } from "react";
import { Product } from "../../../types";


export const useProductCard = (product: Product) => {
  // Get cart item quantity
  const quantity = useSelector(selectProductQuantity(product.id));

  const [discountPrice, setDiscountPrice] = useState<number>();
  const [discountPriceDec, setDiscountPriceDec] = useState<number>();
  const [installmentPrice, setInstallmentPrice] = useState<string>();
  const [productQuantity, setProductQuantity] = useState<string>(quantity.toString());

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
      const addProduct = Object.assign(product);
      const newQuantity = productQuantity !== null ? parseInt(productQuantity) + 1 : 1;
      dispatch(addItem(addProduct));
      setProductQuantity(newQuantity.toString())
    },
    [dispatch, product, productQuantity]
  );

  const handleRemoveToCart = useCallback(() => {
      const addProduct = Object.assign(product);
      dispatch(removeItem(addProduct));
      setProductQuantity('0')
    },
    [dispatch, product]
  );

  const handleUpdateQuantity = useCallback((element: React.FormEvent<HTMLInputElement>) => {
      const newQuantity = parseInt(element.currentTarget.value)
      const addProduct = { ...product, quantity: newQuantity};

      if (!isNaN(newQuantity)) {
        dispatch(newQuantity === 0 ? removeItem(addProduct) : dispatch(updateQuantity(addProduct)));
      }

      setProductQuantity(newQuantity.toString())
    },
    [dispatch, product]
  );

  return {
    discountPrice,
    discountPriceDec,
    installmentPrice,
    handleAddToCart,
    handleRemoveToCart,
    handleUpdateQuantity,
    productQuantity,
    quantity,
  };
};
