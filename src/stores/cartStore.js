import { create } from 'zustand';

const getCartFromLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

export const useCartStore = create((set, get) => ({
  cart: getCartFromLocalStorage(),
  addToCart: (product) => {
    if (get().cart.find((item) => item.id === product.id)) return;
    const _cart = get().cart;
    set({ cart: [..._cart, product] });
    localStorage.setItem('cart', JSON.stringify([..._cart, product]));
  },
  removeFromCart: (product) => {
    const _cart = get().cart.filter((item) => item.id !== product.id);
    set({ cart: _cart });
    localStorage.setItem('cart', JSON.stringify(_cart));
  },
  clearCart: () => {
    set({ cart: [] });
    localStorage.removeItem('cart');
  },
}));
