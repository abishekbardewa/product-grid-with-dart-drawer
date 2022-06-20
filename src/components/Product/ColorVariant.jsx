const ColorVariant = ({ colors, handleRadioChange }) => {
	return (
		<>
			{colors.map((color, idx) => (
				<div key={idx} className="form-check d-inline-flex">
					<input
						className="form-check-input"
						type="radio"
						name="flexRadioDefault"
						id="flexRadioDefault1"
						value={color}
						style={{ backgroundColor: color }}
						onClick={(e) => handleRadioChange(e)}
					/>
				</div>
			))}
		</>
	);
};

export default ColorVariant;
