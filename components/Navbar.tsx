import React from "react";

const Navbar = () => {
	return (
		<div className="w-[80vw] p-4 px-12 bg-neutral-300/25 backdrop-blur-md fixed top-4 left-[10vw] rounded-full border-neutral-200 border-2 z-20 flex">
			<div className="w-[50%] mx-auto flex justify-between items-center">
				{/* ADD JURA FONT */}
				<a href="">Link 1</a>
				<a href="">Link 2</a>
				<a href="">Link 3</a>
				<a href="">Link 4</a>
			</div>
		</div>
	);
};

export default Navbar;
