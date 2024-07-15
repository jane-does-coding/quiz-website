"use client";
import React, { useState } from "react";

const Bmi = () => {
	const [weight, setWeight]: any = useState("");
	const [height, setHeight]: any = useState("");
	const [bmi, setBmi]: any = useState(null);

	const calculateBmi = () => {
		if (weight && height) {
			const heightInMeters = height / 100;
			const calculatedBmi = (
				weight /
				(heightInMeters * heightInMeters)
			).toFixed(2);
			setBmi(calculatedBmi);
		}
	};

	return (
		<div className="w-[100vw] h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-sky-100">
			<div className="w-[35vw] h-[45vh] bg-white border-[1px] border-neutral-200 mx-auto py-4 px-8 rounded-xl flex flex-col items-center justify-center shadow-lg">
				<h2 className="jura text-[3rem] mx-auto text-center mb-6 -mt-8">
					BMI Calculator
				</h2>
				<div className="mb-4 w-full">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Weight (kg):
					</label>
					<input
						className="sheen-input w-full py-2 px-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
						type="number"
						value={weight}
						onChange={(e) => setWeight(e.target.value)}
					/>
				</div>
				<div className="mb-6 w-full">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Height (cm):
					</label>
					<input
						className="sheen-input w-full py-2 px-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
						type="number"
						value={height}
						onChange={(e) => setHeight(e.target.value)}
					/>
				</div>
				<button
					className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-full py-4 text-[1.1rem]"
					onClick={calculateBmi}
				>
					Calculate BMI
				</button>
				{bmi && (
					<div className="mt-4">
						<h3 className="text-xl">Your BMI: {bmi}</h3>
					</div>
				)}
			</div>
		</div>
	);
};

export default Bmi;
