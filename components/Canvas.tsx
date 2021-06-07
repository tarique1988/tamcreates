function Canvas({ width, height, minHeight }) {
	return (
		<canvas
			className="bg-blue-200"
			style={{ width, height, minHeight }}
		></canvas>
	);
}

export default Canvas;
