"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

const Register = () => {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const response = await fetch("/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, username, email, password }),
		});
		const data = await response.json();
		console.log(data);
	};

	return (
		<div className="w-[100vw] h-screen flex items-center justify-center">
			<form
				onSubmit={handleSubmit}
				className="w-[35vw] min-h-[50vh] bg-neutral-100 border-[1px] border-neutral-200 mx-auto py-4 px-8 rounded-xl flex flex-col items-center justify-center"
			>
				<h2 className="jura text-[3rem] mx-auto text-center mb-6 -mt-8">
					Register
				</h2>
				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="border-none focus:border-none outline-none w-full py-3 px-6 rounded-full mb-6"
				/>
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className="border-none focus:border-none outline-none w-full py-3 px-6 rounded-full mb-6"
				/>
				<input
					type="email"
					placeholder="Email"
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

export default Register;
