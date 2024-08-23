const FullScreenLoading = () => {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div className="w-16 h-16 border-4 border-white rounded-full border-t-transparent animate-spin" />
		</div>
	);
};

export { FullScreenLoading };
