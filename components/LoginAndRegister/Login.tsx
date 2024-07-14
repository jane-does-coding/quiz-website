import React from "react";
import { Button } from "../ui/button";

const Login = () => {
	return (
		<div className="w-[100vw] h-screen flex items-center justify-center">
			<div className="w-[35vw] h-[45vh] bg-neutral-100 border-[1px] border-neutral-200 mx-auto py-4 px-8 rounded-xl flex flex-col items-center justify-center">
				<h2 className="jura text-[3rem] mx-auto text-center mb-6 -mt-8">
					Login
				</h2>
				<input
					type="text"
					placeholder="Username"
					className="border-none focus:border-none outline-none w-full py-3 px-6 rounded-full mb-6"
				/>
				<input
					type="password"
					placeholder="Password"
					className="border-none focus:border-none outline-none w-full py-3 px-6 rounded-full mb-6"
				/>
				<Button className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-full py-6 text-[1.1rem]">
					Explore More
				</Button>
			</div>
		</div>
	);
};

export default Login;
