"use client";
import React from "react";
import { motion } from "framer-motion";
import { DrawerComponent } from "./Drawer";
import { NavComponent } from "./Nav";

const Navbar = () => {
	return (
		<motion.div
			className="w-[80vw] p-4 px-12 bg-neutral-300/25 backdrop-blur-md fixed top-4 left-[10vw] rounded-full border-neutral-200 border-2 z-20 flex"
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.3, delay: 0.75, ease: "easeOut" }}
		>
			<div className="w-[50%] mx-auto flex justify-between items-center">
				{/* ADD JURA FONT */}
				<NavComponent />

				<DrawerComponent />
			</div>
		</motion.div>
	);
};

export default Navbar;
