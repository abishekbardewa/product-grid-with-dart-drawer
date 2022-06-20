import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import Variant from './Variant';
import './productImages.style.css';
const ProductImages = ({ title, variants, options }) => {
	const [id, setId] = useState('');
	const [productImage, setProductImage] = useState('');
	const [productPrice, setProductPrice] = useState('');
	const [productColor, setProductColor] = useState('');
	const [activeSize, setActiveSize] = useState('');
	const [productSize, setProductSize] = useState('');

	const { addToCart } = useContext(CartContext);

	useEffect(() => {
		getDefaultproduct();
	}, []);

	const getDefaultproduct = () => {
		const defaultProduct = variants.map((variant) => ({
			id: variant.id,
			price: variant.price,
			image: variant.featured_image.src,
		}));
		const { id, price, image } = defaultProduct[0];
		setId(id);
		setProductImage(image);
		setProductPrice(price);
	};

	const handleRadioChange = (e) => {
		const value = e.target.value;
		const priceAndImage = variants
			.map((variant) => {
				if (variant.option1 === value) {
					return { id: variant.id, price: variant.price, image: variant.featured_image.src };
				}
			})
			.filter((flt) => flt);
		const { id, price, image } = priceAndImage[0];
		setId(id);
		setProductImage(image);
		setProductPrice(price);
		setProductColor(value);
	};
	const handleSizeChange = (idx, size) => {
		setActiveSize(idx);
		setProductSize(size);
	};
	return (
		<>
			<div className="d-flex flex-column justify-content-between  mb-4">
				<div>
					<img className="card-img" src={productImage} alt="Product" style={{ width: '100%', height: '100%', objectFit: 'scale-down' }} />
				</div>
				<div className="mt-2 mh-100">
					<div className="d-flex justify-content-between product-title my-2">
						<p className="text-dark">{title}</p>
						<p className="text-dark"> &#x24;{productPrice}</p>
					</div>
					<Variant options={options} handleRadioChange={handleRadioChange} handleSizeChange={handleSizeChange} activeSize={activeSize} />

					<button
						disabled={!productSize || !productColor}
						type="button"
						className="btn btn-outline-secondary rounded-0 border border-dark border-2 w-100 fw-semibold text-dark text-uppercase mt-4 shadow-none"
						onClick={() => addToCart({ id, title, productPrice, productImage, productSize, productColor })}
					>
						add to cart
					</button>
				</div>
			</div>
		</>
	);
};

export default ProductImages;
