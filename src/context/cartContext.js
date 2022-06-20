import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [cartCounter, setCartCounter] = useState(0);

	const addToCart = (product) => {
		const itemExist = cartItems.find(
			(cart) => cart.id === product.id && cart.productColor === product.productColor && cart.productSize === product.productSize,
		);
		if (itemExist) {
			setCartItems(cartItems.map((cartItem) => (cartItem.id === product.id ? { ...itemExist, qty: itemExist.qty + 1 } : cartItem)));
		} else {
			setCartItems([...cartItems, { ...product, qty: 1 }]);
		}
		setCartCounter(cartCounter + 1);
	};
	//Remove from Cart Handler
	const removeFromCart = (product) => {
		const itemExist = cartItems.find((cartItem) => cartItem.id === product.id);

		if (itemExist.qty === 1) {
			setCartItems(cartItems.filter((cartItem) => cartItem.id !== product.id));
		} else {
			setCartItems(cartItems.map((cartItem) => (cartItem.id === product.id ? { ...itemExist, qty: itemExist.qty - 1 } : cartItem)));
		}
		if (cartCounter > 0) {
			setCartCounter(cartCounter - 1);
		}
	};

	// Remove Item Handler
	const removeItem = (product) => {
		setCartItems(cartItems.filter((cartItem) => cartItem.id !== product.id));
		setCartCounter(Math.abs(product.qty - cartCounter));
	};
	return <CartContext.Provider value={{ addToCart, removeFromCart, removeItem, cartItems, cartCounter }}>{children}</CartContext.Provider>;
};
