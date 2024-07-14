"use client";

import AnimatedTextWord from "@/components/AnimatedTextWord";
import CardsGrid from "@/components/Landing/CardsGrid";
import gsap from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";

export default function Home() {
	useEffect(() => {
		const myText = new SplitType("#banner-text", { types: "chars" });

		gsap.to(".char", {
			y: 0,
			scale: 1,
			opacity: 1,
			stagger: 0.05,
			delay: 0.2,
			duration: 0.1,
		});
	}, []);

	return (
		<div className="bg-gradient-to-b from-neutral-50 to-sky-200">
			<div className="flex flex-col items-center justify-center min-h-screen  p-0 m-0">
				<h1
					id="banner-text"
					className="text-mask bg-clip-text text-transparent text-[40rem] sixcaps m-0 mb-[4rem] tracking-[-1rem] leading-[40rem] font-extrabold"
					style={{
						backgroundImage: "url(/banner.jpg)",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						transform: "scale(0.8, 1.1)",
					}}
				>
					STUDY BETTER
				</h1>

				<AnimatedTextWord
					className="text-[1.5rem]"
					text={"A great website for students studiying medicine!"}
				/>
			</div>
			<CardsGrid
				cards={[
					{
						title: "hey",
					},
					{
						title: "hey",
					},
					{
						title: "hey",
					},
				]}
			/>
		</div>
	);
}
