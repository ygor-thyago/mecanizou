export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}
  
export interface MiniCartState {
  items: CartItem[];
  totalAmount: number;
  isMiniCartOpen: boolean;
}
