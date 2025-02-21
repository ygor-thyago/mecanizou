import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { toggleMiniCart } from "../../redux/cartSlice";
import { useAnimate, stagger } from "framer-motion";

export const useMiniCart = () => {
  const dispatch = useDispatch();
  const { isMiniCartOpen, items, totalAmount } = useSelector(
    (state: RootState) => state.cart
  );
  const [scope, animate] = useAnimate();
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

  useEffect(() => {
    if (!scope.current) return;
  
    const miniCartElement = scope.current.querySelector("#mini-cart");
    const menuItems = scope.current.querySelectorAll("li");
  
    if (!miniCartElement || menuItems.length === 0) return; // If Element DOM dont exist
  
    // MiniCart animation
    animate(
      miniCartElement,
      {
        clipPath: isMiniCartOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );
  
    // MiniCart Items animation
    animate(
      [...menuItems], // All Items in Array
      isMiniCartOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isMiniCartOpen ? staggerMenuItems : 0,
      }
    );
  
  }, [isMiniCartOpen, animate, scope, staggerMenuItems]);
  

  const closeMiniCart = () => {
    dispatch(toggleMiniCart(false));
  };

  return {
    isMiniCartOpen,
    items,
    totalAmount,
    closeMiniCart,
    scope,
  };
};
