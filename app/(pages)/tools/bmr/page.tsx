"use client";
import React, { useState } from "react";

const BmrCalculator = () => {
	const [weight, setWeight]: any = useState("");
	const [height, setHeight]: any = useState("");
	const [age, setAge]: any = useState("");
	const [gender, setGender]: any = useState("male");
	const [bmr, setBmr]: any = useState(null);

	const calculateBmr = () => {
		if (weight && height && age && gender) {
			let calculatedBmr;
			/* Found random formulas somewhere hope this works right */
			if (gender === "male") {
				calculatedBmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
			} else {
				calculatedBmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
			}
			setBmr(calculatedBmr.toFixed(2));
		}
	};

	return (
		<div className="w-[100vw] h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-sky-100">
			<div className="w-[35vw] min-h-[55vh] bg-white border-[1px] border-neutral-200 mx-auto py-4 px-8 rounded-xl flex flex-col items-center justify-center shadow-lg">
				<h2 className="text-[3rem] mx-auto text-center mb-6  jura mt-4">
					BMR Calculator
				</h2>
				<div className="mb-4 w-full">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Weight (kg):
					</label>
					<input
						className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-full"
						type="number"
						value={weight}
						onChange={(e) => setWeight(e.target.value)}
					/>
				</div>
				<div className="mb-4 w-full">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Height (cm):
					</label>
					<input
						className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-full"
						type="number"
						value={height}
						onChange={(e) => setHeight(e.target.value)}
					/>
				</div>
				<div className="mb-4 w-full">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Age:
					</label>
					<input
						className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-full"
						type="number"
						value={age}
						onChange={(e) => setAge(e.target.value)}
					/>
				</div>
				<div className="mb-6 w-full">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Gender:
					</label>
					<select
						className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-full"
						value={gender}
						onChange={(e) => setGender(e.target.value)}
					>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</div>
				<button
					className="w-full bg-blue-200 hover:bg-blue-300 rounded-full py-4 text-[1.1rem]"
					onClick={calculateBmr}
				>
					Calculate BMR
				</button>
				{bmr && (
					<div className="mt-4">
						<h3 className="text-xl">Your BMR: {bmr}</h3>
					</div>
				)}
			</div>
		</div>
	);
};

export default BmrCalculator;
