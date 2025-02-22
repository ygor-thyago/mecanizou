export interface BreadcrumbProps {
  items: { label: string; link?: string }[];
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface MiniCartState {
  items: CartItem[];
  totalAmount: number;
  isMiniCartOpen: boolean;
  totalItems: number;
}