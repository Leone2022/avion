import { Product } from './products';

export interface CartItem {
  product: Product;
  quantity: number;
}

const CART_STORAGE_KEY = 'avion-cart';

export const getCart = (): CartItem[] => {
  if (typeof window === 'undefined') return [];
  
  // Use sessionStorage instead of localStorage so cart is empty in new browser sessions
  const cartData = sessionStorage.getItem(CART_STORAGE_KEY);
  if (!cartData) return [];
  
  try {
    return JSON.parse(cartData);
  } catch (error) {
    console.error('Error parsing cart data:', error);
    return [];
  }
};

export const saveCart = (cart: CartItem[]) => {
  if (typeof window === 'undefined') return;
  
  try {
    // Use sessionStorage instead of localStorage so cart is empty in new browser sessions
    sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart data:', error);
  }
};

export const addToCart = (product: Product, quantity: number = 1) => {
  const cart = getCart();
  const existingItem = cart.find(item => item.product.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }
  
  saveCart(cart);
  return cart;
};

export const removeFromCart = (productId: string) => {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.product.id !== productId);
  saveCart(updatedCart);
  return updatedCart;
};

export const updateCartQuantity = (productId: string, quantity: number) => {
  const cart = getCart();
  const item = cart.find(item => item.product.id === productId);
  
  if (item) {
    if (quantity <= 0) {
      return removeFromCart(productId);
    }
    item.quantity = quantity;
    saveCart(cart);
    return cart;
  }
  
  return cart;
};

export const clearCart = () => {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem(CART_STORAGE_KEY);
};

export const getCartTotal = (): number => {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
};

export const getCartCount = (): number => {
  const cart = getCart();
  return cart.reduce((count, item) => count + item.quantity, 0);
};



