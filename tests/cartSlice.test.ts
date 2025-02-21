import cartReducer, { addItem, removeItem } from "../src/features/cart/cartSlice";

describe("cartSlice", () => {
  it("should add an item to the cart", () => {
    const initialState = { items: [] };
    const newState = cartReducer(initialState, addItem({ id: 1, name: "Produto", price: 10, quantity: 1 }));
    expect(newState.items.length).toBe(1);
  });

  it("should remove an item from the cart", () => {
    const initialState = { items: [{ id: 1, name: "Produto", price: 10, quantity: 1 }] };
    const newState = cartReducer(initialState, removeItem(1));
    expect(newState.items.length).toBe(0);
  });
});