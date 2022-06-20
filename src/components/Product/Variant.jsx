import ColorVariant from './ColorVariant';
import SizeVariant from './SizeVariant';

const Variant = ({ options, handleRadioChange, handleSizeChange, activeSize }) => {
	const colorVariant = options?.filter((variant) => variant.position === 1 && variant.name === 'Color').map((color) => color.values);

	const sizeVariant = options?.filter((variant) => variant.position === 2 && variant.name === 'Size').map((size) => size.values);

	return (
		<>
			{colorVariant.map((color, idx) => (
				<ColorVariant key={idx} colors={color} handleRadioChange={handleRadioChange} />
			))}

			{sizeVariant.map((sizes, idx) => (
				<SizeVariant key={idx} sizes={sizes} activeSize={activeSize} handleSizeChange={handleSizeChange} />
			))}
		</>
	);
};

export default Variant;
