"use client";

import type { CartContextValue, CartItem } from "@/types/cart";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

const STORAGE_KEY = "bytespace-cart";
const EMPTY: CartItem[] = [];

const listeners = new Set<() => void>();

const readStore = (): CartItem[] => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    return Array.isArray(parsed) ? (parsed as CartItem[]) : EMPTY;
  } catch {
    return EMPTY;
  }
};

let store: CartItem[] = typeof window === "undefined" ? EMPTY : readStore();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const getSnapshot = () => store;
const getServerSnapshot = () => EMPTY;

const writeStore = (next: CartItem[]) => {
  store = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // storage unavailable — cart stays in memory
  }
  listeners.forEach((listener) => listener());
};

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isOpen, setIsOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [lastOrderTotal, setLastOrderTotal] = useState(0);

  const addItem = useCallback((item: CartItem) => {
    if (store.some((entry) => entry.id === item.id)) return;
    writeStore([...store, item]);
  }, []);

  const removeItem = useCallback((id: string) => {
    writeStore(store.filter((entry) => entry.id !== id));
  }, []);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const placeOrder = useCallback(() => {
    setLastOrderTotal(store.reduce((total, item) => total + item.price, 0));
    writeStore(EMPTY);
    setIsOpen(false);
    setOrderPlaced(true);
  }, []);

  const dismissOrder = useCallback(() => setOrderPlaced(false), []);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      count: items.length,
      subtotal: items.reduce((total, item) => total + item.price, 0),
      isOpen,
      orderPlaced,
      lastOrderTotal,
      addItem,
      removeItem,
      open,
      close,
      placeOrder,
      dismissOrder,
    }),
    [
      items,
      isOpen,
      orderPlaced,
      lastOrderTotal,
      addItem,
      removeItem,
      open,
      close,
      placeOrder,
      dismissOrder,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
