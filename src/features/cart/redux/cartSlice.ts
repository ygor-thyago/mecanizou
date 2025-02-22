import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { CartItem, MiniCartState } from "../../../types";

const STORAGE_KEY = "cart";
const EXPIRATION_TIME = 5 * 60 * 1000;

// Load localStorage cart data
const loadCart = (): MiniCartState => {
  try {
    const storedCart = localStorage.getItem(STORAGE_KEY);
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);

      // If the cart was saved less than 5 minutes ago, return the data
      if (Date.now() - parsedCart.timestamp < EXPIRATION_TIME) return parsedCart.data;
    }
  } catch (error) {
    console.error("Erro ao carregar o carrinho:", error);
  }
  return { items: [], totalAmount: 0, isMiniCartOpen: false, totalItems: 0 };
};

// Save cart data on localStorage 
const saveCart = (state: MiniCartState) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ data: state, timestamp: Date.now() }));
  } catch (error) {
    console.error("Erro ao salvar o carrinho:", error);
  }
};

const updateCartState = (state: MiniCartState) => {
  state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
  state.isMiniCartOpen = true;
  saveCart(state); // Save Cart data on localStorage
};

const initialState: MiniCartState = loadCart();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      updateCartState(state);
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      const product = action.payload;
      state.items = state.items.filter((item) => item.id !== product.id);
      updateCartState(state);
    },
    updateQuantity: (state, action: PayloadAction<CartItem>) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity = product.quantity;
      }
      updateCartState(state);
    },
    toggleMiniCart: (state, action: PayloadAction<boolean>) => {
      state.isMiniCartOpen = action.payload;
      saveCart(state); // Save Cart data on localStorage
    },
  },
});

export const selectProductQuantity = (productId: number) => (state: RootState) =>
  state.cart.items.find((item) => item.id === productId)?.quantity || 0;

export const { addItem, removeItem, updateQuantity, toggleMiniCart } = cartSlice.actions;
export default cartSlice.reducer;
