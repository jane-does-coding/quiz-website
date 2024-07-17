import React from "react";
import AnimatedTextWord from "../AnimatedTextWord";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";
import AllCardsGrid from "../Landing/AllCardsGrid";
import SectionBigText from "../SectionBigText";

const Tools = ({ tools }: any) => {
	return (
		<div>
			<div className="flex flex-col items-center justify-center min-h-[60vh] pt-[10vh] m-0">
				{/* 	<h1
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
					Tools
				</h1> */}
				<SectionBigText text="Tools" />

				<AnimatedTextWord
					className="text-[1.75rem] jura"
					text={"A great website for students studiying medicine!"}
				/>
			</div>
			{/* TURN INTO SEPERATE COMPONENT */}
			<div className="mt-14"></div>

			<AllCardsGrid cards={tools} />
		</div>
	);
};

export default Tools;
