"use client";
import React, { useState } from "react";

const RnaDnaConvertor: React.FC = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value.toUpperCase());
	};

	const rnaToDna = (rna: string): string => {
		return rna.replace(/U/g, "T");
	};

	const dnaToRna = (dna: string): string => {
		return dna.replace(/T/g, "U");
	};

	const handleRnaToDna = () => {
		setResult(rnaToDna(input));
	};

	const handleDnaToRna = () => {
		setResult(dnaToRna(input));
	};

	return (
		<div style={{ textAlign: "center", marginTop: "50px" }}>
			<h1>RNA-DNA Converter</h1>
			<input
				type="text"
				value={input}
				onChange={handleInputChange}
				placeholder="Enter RNA or DNA sequence"
				style={{ padding: "10px", fontSize: "16px", width: "300px" }}
			/>
			<div style={{ marginTop: "20px" }}>
				<button
					onClick={handleRnaToDna}
					style={{ padding: "10px", marginRight: "10px" }}
				>
					Convert RNA to DNA
				</button>
				<button onClick={handleDnaToRna} style={{ padding: "10px" }}>
					Convert DNA to RNA
				</button>
			</div>
			<div style={{ marginTop: "20px" }}>
				<h2>Result:</h2>
				<p>{result}</p>
			</div>
		</div>
	);
};

export default RnaDnaConvertor;
