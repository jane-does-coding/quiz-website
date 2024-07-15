"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		signIn("credentials", {
			email,
			password,
		});
	};

	return (
		<div className="w-[100vw] h-screen flex items-center justify-center">
			<form
				onSubmit={handleSubmit}
				className="w-[35vw] h-[45vh] bg-neutral-100 border-[1px] border-neutral-200 mx-auto py-4 px-8 rounded-xl flex flex-col items-center justify-center"
			>
				<h2 className="jura text-[3rem] mx-auto text-center mb-6 -mt-8">
					Login
				</h2>
				<input
					type="text"
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="border-none focus:border-none outline-none w-full py-3 px-6 rounded-full mb-6"
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="border-none focus:border-none outline-none w-full py-3 px-6 rounded-full mb-6"
				/>
				<Button
					type="submit"
					className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-full py-6 text-[1.1rem]"
				>
					Explore More
				</Button>
			</form>
		</div>
	);
};

export default Login;
