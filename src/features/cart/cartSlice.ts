import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface CartItem {
  image: string;
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
  isMiniCartOpen: boolean;
  totalItems: number;
}

const STORAGE_KEY = "cart";
const EXPIRATION_TIME = 5 * 60 * 1000;

// Load localStorage cart data
const loadCart = (): CartState => {
  try {
    const storedCart = localStorage.getItem(STORAGE_KEY);
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      const now = new Date().getTime();

      // If the cart was saved less than 5 minutes ago, return the data
      if (now - parsedCart.timestamp < EXPIRATION_TIME) {
        return parsedCart.data;
      }
    }
  } catch (error) {
    console.error("Erro ao carregar o carrinho:", error);
  }
  return { items: [], totalAmount: 0, isMiniCartOpen: false, totalItems: 0 };
};

// Save cart data on localStorage 
const saveCart = (cartState: CartState) => {
  try {
    const dataToStore = {
      data: cartState,
      timestamp: new Date().getTime(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToStore));
  } catch (error) {
    console.error("Erro ao salvar o carrinho:", error);
  }
};

const initialState: CartState = loadCart();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem:  (state, action: PayloadAction<CartItem>) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
      state.isMiniCartOpen = true;
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);

      saveCart(state); // Save Cart data on localStorage
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity -= 1;
      }

      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
      state.isMiniCartOpen = true;
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);

      saveCart(state); // Save Cart data on localStorage
    },
    updateQuantity:  (state, action: PayloadAction<CartItem>) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity = product.quantity;
      }

      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
      state.isMiniCartOpen = true;
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);

      saveCart(state); // Save Cart data on localStorage
    },
    toggleMiniCart: (state, action: PayloadAction<boolean>) => {
      state.isMiniCartOpen = action.payload;
      saveCart(state); // Save Cart data on localStorage
    },
  },
});

export const selectProductQuantity = (productId: number) => (state: RootState) => {
  const product = state.cart.items.find((item) => item.id === productId);
  return product ? product.quantity : 0;
};

export const { addItem, removeItem, updateQuantity, toggleMiniCart } = cartSlice.actions;
export default cartSlice.reducer;
