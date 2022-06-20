const SizeVariant = ({ sizes, activeSize, handleSizeChange }) => {
	return (
		<>
			<div className="d-flex gap-1">
				{sizes.map((size, idx) => (
					<button
						key={idx}
						type="button"
						className={`btn btn-outline-secondary rounded-0 shadow-none px-2 py-0 ${activeSize === idx ? 'text-white btn-dark' : ''}`}
						onClick={() => handleSizeChange(idx, size)}
					>
						{size}
					</button>
				))}
			</div>
		</>
	);
};

export default SizeVariant;
