import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { toggleMiniCart } from "../../../features/cart/redux/cartSlice";

export const useMainNav = () => { 
  const dispatch = useDispatch();
  const { totalItems, isMiniCartOpen } = useSelector((state: RootState) => state.cart);
  const [totalCart, setTotalCArt] = useState<number>(totalItems);

  const toggleModalCart = useCallback(() => {
    dispatch(toggleMiniCart(isMiniCartOpen ? false : true)); // Toggle minicart modal
  },[dispatch, isMiniCartOpen],)

  useEffect(() => {
    setTotalCArt(totalItems) // Update cart total items
  }, [totalItems])

  useEffect(() => {
    dispatch(toggleMiniCart(false));
  }, [dispatch])
  return {
    totalCart,
    toggleModalCart
  };
};
