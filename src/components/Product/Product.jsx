import ProductImages from './ProductImages';

const Product = ({ renderProduct }) => {
	return (
		<>
			<div className="row">
				{renderProduct?.map((render) => (
					<div key={render.id} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
						<ProductImages title={render.title} variants={render.variants} options={render.options} />
					</div>
				))}
			</div>
		</>
	);
};

export default Product;
