import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import './cart.styles.css';

const Cart = ({ modal, setModal }) => {
	const { addToCart, removeFromCart, removeItem, cartItems, cartCounter } = useContext(CartContext);

	let subTotal = 0;
	cartItems.forEach((item) => {
		subTotal += item.qty * item.productPrice;
	});
	return (
		<>
			<div className="overlay"></div>
			<div className="cart__container">
				<div className="cart__header">
					<h2>
						Your Bag <span>({cartCounter} ITEMS)</span>
					</h2>
					<div className="cart__close-icon" onClick={() => setModal(!modal)}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
							<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
						</svg>
					</div>
				</div>
				<div className="cart__items">
					{cartItems.map((item, idx) => (
						<div key={idx} className="cart__item">
							<div className="cart__cart-image">
								<img src={item.productImage} alt="" />
							</div>
							<div className="item-info">
								<p>
									<strong>{item.title}</strong>
								</p>
								<div className="d-flex justify-center gap-2">
									<p>
										Color: <strong>{item.productColor}</strong>
									</p>
									<p>
										Size: <strong>{item.productSize}</strong>
									</p>
								</div>
								<div className="cart__cart-product-btn">
									<div className="minus-btn" onClick={() => removeFromCart(item)}>
										-
									</div>
									<span className="quantity">{item.qty}</span>

									<div className="plus-btn" onClick={() => addToCart(item)}>
										+
									</div>
								</div>
							</div>

							<div className="item-remove-icon" onClick={() => removeItem(item)}>
								<div className="cart__close-icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
										<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
									</svg>
								</div>
								<h6>&#65284;{item.productPrice * item.qty}</h6>
							</div>
						</div>
					))}
				</div>
				{subTotal > 0 && (
					<div className="checkout">
						<div className="checkout__subtotal">
							<h3>Subtotal</h3>
							<h3>&#65284;{subTotal}</h3>
						</div>
						<button type="button" className="btn btn-dark rounded-0  w-100 fw-semibold text-uppercase mt-2 shadow-none">
							<svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 24 24" className="lock-icon">
								<path d="M10 16c0-1.104.896-2 2-2s2 .896 2 2c0 .738-.404 1.376-1 1.723v2.277h-2v-2.277c-.596-.347-1-.985-1-1.723zm11-6v14h-18v-14h3v-4c0-3.313 2.687-6 6-6s6 2.687 6 6v4h3zm-13 0h8v-4c0-2.206-1.795-4-4-4s-4 1.794-4 4v4zm11 2h-14v10h14v-10z" />
							</svg>
							checkout
						</button>
						<div className="text-center mt-3 checkout-info">
							<p>Have a prome code? Enter ypur code at checkout.</p>
							<p>Shipping & taxes are calculated during checkout.</p>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Cart;
