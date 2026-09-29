export type CartItem = {
  id: string;
  title: string;
  image: string;
  price: number;
  author?: string;
};

export type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  orderPlaced: boolean;
  lastOrderTotal: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  open: () => void;
  close: () => void;
  placeOrder: () => void;
  dismissOrder: () => void;
};
