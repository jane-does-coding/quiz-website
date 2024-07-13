import React from "react";
import { DrawerDemo } from "./Drawer";

const Navbar = () => {
	return (
		<div className="w-[80vw] p-4 px-12 bg-neutral-300/25 backdrop-blur-md fixed top-4 left-[10vw] rounded-full border-neutral-200 border-2 z-20 flex">
			<div className="w-[50%] mx-auto flex justify-between items-center">
				{/* ADD JURA FONT */}
				<a
					href=""
					className="jura font-bold transition-all hover:scale-[0.8] text-[1.25rem]"
				>
					Quizzes
				</a>
				<a
					href=""
					className="jura font-bold transition-all hover:scale-[0.8] text-[1.25rem]"
				>
					Learn
				</a>
				<a
					href=""
					className="jura font-bold transition-all hover:scale-[0.8] text-[1.25rem]"
				>
					Tools
				</a>
				<DrawerDemo />
			</div>
		</div>
	);
};

export default Navbar;
