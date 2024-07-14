import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

const ThreeCards = () => {
	return (
		<div className="flex w-[90vw] mx-auto gap-4">
			<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-1/3">
				<CardHeader>
					<CardTitle className="jura">Study</CardTitle>
					<CardDescription>Resources to study different topics</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4">
					<img
						src="/banner.jpg"
						className="w-full aspect-[3/2] object-fit rounded-[0.5rem]"
						alt=""
					/>
				</CardContent>
			</Card>
			<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-1/3">
				<CardHeader>
					<CardTitle className="jura">Quiz</CardTitle>
					<CardDescription>Test your knowledge with quizzes</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4">
					<img
						src="/banner.jpg"
						className="w-full aspect-[3/2] object-fit rounded-[0.5rem]"
						alt=""
					/>
				</CardContent>
			</Card>
			<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-1/3">
				<CardHeader>
					<CardTitle className="jura">Tools</CardTitle>
					<CardDescription>Use tools for better understanding</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4">
					<img
						src="/banner.jpg"
						className="w-full aspect-[3/2] object-fit rounded-[0.5rem]"
						alt=""
					/>
				</CardContent>
			</Card>
		</div>
	);
};

export default ThreeCards;
