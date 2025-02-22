import cartReducer, { addItem, removeItem, updateQuantity, toggleMiniCart } from './cartSlice';
import type { MiniCartState, CartItem } from '../../../types';
import { describe, expect, test } from 'vitest';

const initialState: MiniCartState = {
  items: [],
  totalAmount: 0,
  isMiniCartOpen: false,
  totalItems: 0,
};

describe('cartSlice reducer', () => {
  test('should return the initial state', () => {
    expect(cartReducer(undefined, { type: '' })).toEqual(initialState);
  });

  test('should handle addItem', () => {
    const product: CartItem = { id: 1, title: 'Product 1', price: 100, quantity: 1, image: 'image.png', category: 'Test Category' };
    const nextState = cartReducer(initialState, addItem(product));
    
    expect(nextState.items.length).toBe(1);
    expect(nextState.items[0]).toEqual({ ...product, quantity: 1 });
    expect(nextState.totalAmount).toBe(100);
    expect(nextState.isMiniCartOpen).toBe(true);
    expect(nextState.totalItems).toBe(1);
  });

  test('should handle removeItem', () => {
    const stateWithItem: MiniCartState = {
      ...initialState,
      items: [{ id: 1, title: 'Product 1', price: 100, quantity: 1, image: 'image.png', category: 'Test Category' }],
      totalAmount: 100,
      totalItems: 1,
    };
    
    const nextState = cartReducer(stateWithItem, removeItem({ id: 1, title: 'Product 1', price: 100, quantity: 1, image: 'image.png', category: 'Test Category' }));
    
    expect(nextState.items.length).toBe(0);
    expect(nextState.totalAmount).toBe(0);
    expect(nextState.totalItems).toBe(0);
  });

  test('should handle updateQuantity', () => {
    const stateWithItem: MiniCartState = {
      ...initialState,
      items: [{ id: 1, title: 'Product 1', price: 100, quantity: 1, image: 'image.png', category: 'Test Category' }],
      totalAmount: 100,
      totalItems: 1,
    };
    
    const nextState = cartReducer(stateWithItem, updateQuantity({ id: 1, title: 'Product 1', price: 100, quantity: 3, image: 'image.png', category: 'Test Category' }));
    
    expect(nextState.items[0].quantity).toBe(3);
    expect(nextState.totalAmount).toBe(300);
    expect(nextState.totalItems).toBe(3);
  });

  test('should handle toggleMiniCart', () => {
    const nextState = cartReducer(initialState, toggleMiniCart(true));
    expect(nextState.isMiniCartOpen).toBe(true);
  });
});