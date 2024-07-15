"use client";
import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<{ email: string; password: string }> = async (
		data
	) => {
		const result = await signIn("credentials", {
			...data,
			redirect: false,
		});

		if (result?.ok) {
			toast.success("Logged in");
		} else if (result?.error) {
			toast.error(result.error);
		}
	};

	return (
		<div className="w-[100vw] h-screen flex items-center justify-center">
			<div className="w-[35vw] h-[45vh] bg-neutral-100 border-[1px] border-neutral-200 mx-auto py-4 px-8 rounded-xl flex flex-col items-center justify-center">
				<h2 className="jura text-[3rem] mx-auto text-center mb-6 -mt-8">
					Login
				</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="w-full flex flex-col items-center"
				>
					<input
						type="text"
						placeholder="Email"
						{...register("email", { required: "Email is required" })}
						className="border-none focus:border-none outline-none w-full py-3 px-6 rounded-full mb-6"
					/>
					{errors.email && (
						<span className="text-red-500">{errors.email.message}</span>
					)}
					<input
						type="password"
						placeholder="Password"
						{...register("password", { required: "Password is required" })}
						className="border-none focus:border-none outline-none w-full py-3 px-6 rounded-full mb-6"
					/>
					{errors.password && (
						<span className="text-red-500">{errors.password.message}</span>
					)}
					<Button
						type="submit"
						className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-full py-6 text-[1.1rem]"
					>
						Explore More
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Login;
