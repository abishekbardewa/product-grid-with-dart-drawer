import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import Cart from '../Cart/Cart';

const Navbar = () => {
	const cartHandbag = {
		backgroundColor: '#D9F5F4',
		borderRadius: '0px 0px 0px 10px',
		padding: '8px 8px 10px 15px',
		display: 'flex',
		alignItems: 'center',
	};
	const handbagIcon = {
		color: '#00A9A2',
	};
	const cartCount = {
		background: '#fff',
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '15px',
		width: '15px',
		paddingTop: '1px',
		marginLeft: '-5px',
		marginTop: '20px',
		color: '#000',
		fontSize: ' 10px',
		fontWeight: 'bold',
	};

	const [modal, setModal] = useState(false);
	const { cartCounter } = useContext(CartContext);
	return (
		<>
			<div className="d-flex justify-content-end align-items-center">
				<div className="cart-handbag" style={cartHandbag} onClick={() => setModal(!modal)}>
					<svg
						style={handbagIcon}
						xmlns="http://www.w3.org/2000/svg"
						width="23"
						height="29"
						fill="currentColor"
						className="bi bi-handbag"
						viewBox="0 0 16 16"
					>
						<path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
					</svg>
					<span style={cartCount}>{cartCounter}</span>
				</div>
			</div>
			{modal && <Cart modal={modal} setModal={setModal} />}
		</>
	);
};

export default Navbar;
