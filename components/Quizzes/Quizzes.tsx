import React from "react";
import AnimatedTextWord from "../AnimatedTextWord";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";

const Quizzes = () => {
	return (
		<div>
			<div className="flex flex-col items-center justify-center min-h-[60vh] pt-[10vh] m-0">
				<h1
					id="banner-text"
					className="text-mask bg-clip-text text-transparent text-[20rem] sixcaps m-0 mb-[2rem] tracking-[-0rem] leading-[20rem] font-extrabold"
					style={{
						backgroundImage: "url(/banner.jpg)",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						transform: "scale(1, 1.1)",
					}}
				>
					Quizzes
				</h1>

				<AnimatedTextWord
					className="text-[1.75rem] jura"
					text={"A great website for students studiying medicine!"}
				/>
			</div>
			{/* TURN INTO SEPERATE COMPONENT */}
			<div className="grid grid-cols-3 gap-4 w-[90vw] mx-auto">
				<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-full">
					<CardHeader>
						<CardTitle className="jura">Study</CardTitle>
						<CardDescription>
							Resources to study different topics
						</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<img
							src="/banner.jpg"
							className="w-full aspect-[3/2] object-fit rounded-[0.5rem]"
							alt=""
						/>
					</CardContent>
				</Card>
				<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-full">
					<CardHeader>
						<CardTitle className="jura">Study</CardTitle>
						<CardDescription>
							Resources to study different topics
						</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<img
							src="/banner.jpg"
							className="w-full aspect-[3/2] object-fit rounded-[0.5rem]"
							alt=""
						/>
					</CardContent>
				</Card>
				<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-full">
					<CardHeader>
						<CardTitle className="jura">Study</CardTitle>
						<CardDescription>
							Resources to study different topics
						</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<img
							src="/banner.jpg"
							className="w-full aspect-[3/2] object-fit rounded-[0.5rem]"
							alt=""
						/>
					</CardContent>
				</Card>
				<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-full">
					<CardHeader>
						<CardTitle className="jura">Study</CardTitle>
						<CardDescription>
							Resources to study different topics
						</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<img
							src="/banner.jpg"
							className="w-full aspect-[3/2] object-fit rounded-[0.5rem]"
							alt=""
						/>
					</CardContent>
				</Card>
				<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-full">
					<CardHeader>
						<CardTitle className="jura">Study</CardTitle>
						<CardDescription>
							Resources to study different topics
						</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<img
							src="/banner.jpg"
							className="w-full aspect-[3/2] object-fit rounded-[0.5rem]"
							alt=""
						/>
					</CardContent>
				</Card>
				<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-full">
					<CardHeader>
						<CardTitle className="jura">Study</CardTitle>
						<CardDescription>
							Resources to study different topics
						</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<img
							src="/banner.jpg"
							className="w-full aspect-[3/2] object-fit rounded-[0.5rem]"
							alt=""
						/>
					</CardContent>
				</Card>
				<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-full">
					<CardHeader>
						<CardTitle className="jura">Study</CardTitle>
						<CardDescription>
							Resources to study different topics
						</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<img
							src="/banner.jpg"
							className="w-full aspect-[3/2] object-fit rounded-[0.5rem]"
							alt=""
						/>
					</CardContent>
				</Card>
				<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-full">
					<CardHeader>
						<CardTitle className="jura">Study</CardTitle>
						<CardDescription>
							Resources to study different topics
						</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<img
							src="/banner.jpg"
							className="w-full aspect-[3/2] object-fit rounded-[0.5rem]"
							alt=""
						/>
					</CardContent>
				</Card>
				<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-full">
					<CardHeader>
						<CardTitle className="jura">Study</CardTitle>
						<CardDescription>
							Resources to study different topics
						</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<img
							src="/banner.jpg"
							className="w-full aspect-[3/2] object-fit rounded-[0.5rem]"
							alt=""
						/>
					</CardContent>
				</Card>
				<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-full">
					<CardHeader>
						<CardTitle className="jura">Study</CardTitle>
						<CardDescription>
							Resources to study different topics
						</CardDescription>
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
		</div>
	);
};

export default Quizzes;
