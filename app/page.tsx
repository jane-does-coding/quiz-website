import AnimatedTextWord from "@/components/AnimatedTextWord";
import CardsGrid from "@/components/Landing/CardsGrid";
import Circle from "@/components/Landing/Circle";
import Footer from "@/components/Landing/Footer";
import ThreeCards from "@/components/Landing/ThreeCards";
import gsap from "gsap";
import Marquee from "react-fast-marquee";
import SplitType from "split-type";
import getCurrentUser from "./actions/getCurrentUser";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import SignOutBtn from "@/components/SignOutBtn";

export default async function Home() {
	/* 	useEffect(() => {
		const myText = new SplitType("#banner-text", { types: "chars" });

		gsap.to(".char", {
			y: 0,
			scale: 1,
			opacity: 1,
			stagger: 0.05,
			delay: 0.2,
			duration: 0.1,
		});
	}, []); */

	const currentUser = await getCurrentUser();
	console.log(currentUser);

	return (
		<div className="bg-gradient-to-b from-neutral-50 to-sky-100">
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
					STUDY BETTER {currentUser?.username}
				</h1>

				<AnimatedTextWord
					className="text-[1.75rem] jura"
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
			<br />
			<br />
			<br />
			<br />
			<Marquee
				className="bg-neutral-100/65 border-[3px] border-white py-6"
				speed={80}
			>
				<h2 className="jura text-[1.75rem] mx-8">
					Find Quizzes, Explanations, Tools and More
				</h2>
				<h2 className="jura text-[1.75rem] mx-8">
					Find Quizzes, Explanations, Tools and More
				</h2>
				<h2 className="jura text-[1.75rem] mx-8">
					Find Quizzes, Explanations, Tools and More
				</h2>
			</Marquee>
			<h2 className="text-neutral-700 text-[10rem] sixcaps m-0 mb-[2rem] leading-[10rem] font-light mx-auto text-center mt-28">
				What can you do?
			</h2>
			<br />
			<ThreeCards />
			<div className=" my-32">
				<Circle />
			</div>{" "}
			<SignOutBtn />
			<Footer />
		</div>
	);
}
