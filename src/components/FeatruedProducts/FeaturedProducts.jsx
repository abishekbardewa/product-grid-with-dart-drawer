import Product from '../Product/Product';

const FeaturedProducts = ({ products }) => {
	const newProduct = products
		?.filter((product) => {
			return product.variants.length > 1;
		})
		.slice(0, 4)
		.map((product) => ({
			id: product.id,
			title: product.title,
			handle: product.handle,
			variants: product.variants,

			options: product.options,
		}));
	return (
		<>
			<div className="container">
				<div className="col-lg-6 offset-lg-3 text-center mb-4">
					<h3>Featured Collection</h3>
					<p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar ac tortor imperdiet commodo.</p>
				</div>
				<>
					<Product renderProduct={newProduct} />
				</>
			</div>
		</>
	);
};

export default FeaturedProducts;
