"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);

		const callback = await signIn("credentials", {
			redirect: false,
			email,
			password,
		});

		setIsLoading(false);

		if (callback?.ok) {
			toast.success("Logged in");
			router.push("/");
			router.refresh();
		} else if (callback?.error) {
			toast.error(callback.error);
		}
	};

	return (
		<div className="w-[100vw] h-screen flex items-center justify-center">
			<div className="w-[35vw] h-[45vh] bg-neutral-100 border-[1px] border-neutral-200 mx-auto py-4 px-8 rounded-xl flex flex-col items-center justify-center">
				<h2 className="jura text-[3rem] mx-auto text-center mb-6 -mt-8">
					Login
				</h2>
				<form onSubmit={handleSubmit} className="gap-2 flex flex-col w-full">
					<div className="w-full relative my-1">
						<input
							id="email"
							type="text"
							disabled={isLoading}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							placeholder="Email"
							className="border-none focus:border-none outline-none w-full py-3 px-6 rounded-full w-full"
						/>
					</div>

					<div className="w-full relative my-1">
						<input
							id="password"
							type="password"
							disabled={isLoading}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							placeholder="Password"
							className="border-none focus:border-none outline-none w-full py-3 px-6 rounded-full w-full"
						/>
					</div>

					<button
						type="submit"
						disabled={isLoading}
						className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-full py-4 text-[1.1rem]"
					>
						{isLoading ? "Logging in..." : "Submit"}
					</button>
				</form>
				<div className="mt-4 text-neutral-500 text-sm flex gap-2 text-center items-center justify-center mx-auto">
					Don&apos;t have an account?{" "}
					<a href="/register" className="text-neutral-900">
						Register
					</a>
				</div>
			</div>
		</div>
	);
};

export default Login;
