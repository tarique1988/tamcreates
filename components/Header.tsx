function Header({ height, width }) {
	return (
		<header className="flex-none" style={{ height, width }}>
			<div className="flex flex-row justify-between items-center bg-gray-700 h-full">
				<div className="flex-none h-full mx-4 py-1">
					<img src="logo.png" className="h-full" />
				</div>
				<div className="flex text-white h-full gap-2 mx-4">
					<a href="#" className="h-full">
						<div className="flex justify-center items-center h-full px-4 hover:bg-blue-400 hover:text-gray-900">
							Home
						</div>
					</a>
					<a href="#" className="h-full">
						<div className="flex justify-center items-center h-full px-4 hover:bg-blue-400 hover:text-gray-900">
							About
						</div>
					</a>
					<a href="#" className="h-full">
						<div className="flex justify-center items-center h-full px-4 hover:bg-blue-400 hover:text-gray-900">
							Contact
						</div>
					</a>
					<a href="#" className="h-full">
						<div className="flex justify-center items-center h-full px-4 hover:bg-blue-400 hover:text-gray-900">
							Projects
						</div>
					</a>
				</div>
			</div>
		</header>
	);
}

export default Header;
