import { useEffect } from 'react';
import { useState } from 'react';
import FeaturedProducts from './components/FeatruedProducts/FeaturedProducts';
import Navbar from './components/Navbar/Navbar';

function App() {
	const [products, setProducts] = useState();
	useEffect(() => {
		getProducts();
	}, []);

	const getProducts = async () => {
		const url = './products.json';
		const response = await fetch(url);
		const json = await response.json();
		setProducts(json.products);
	};

	return (
		<main>
			<Navbar />
			<FeaturedProducts products={products} />
		</main>
	);
}

export default App;
