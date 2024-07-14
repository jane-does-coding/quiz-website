import Footer from "@/components/Landing/Footer";
import Quizzes from "@/components/Quizzes/Quizzes";
import Tools from "@/components/Tools/Tools";
import React from "react";

const page = () => {
	const sampleTools = [
		{
			title: "Study",
			description: "Resources to study different topics",
			imageUrl: "/banner.jpg",
		},
		{
			title: "Review",
			description: "Quick reviews of key concepts",
			imageUrl: "/banner.jpg",
		},
		{
			title: "Study",
			description: "Resources to study different topics",
			imageUrl: "/banner.jpg",
		},
		{
			title: "Review",
			description: "Quick reviews of key concepts",
			imageUrl: "/banner.jpg",
		},
		{
			title: "Study",
			description: "Resources to study different topics",
			imageUrl: "/banner.jpg",
		},
		{
			title: "Review",
			description: "Quick reviews of key concepts",
			imageUrl: "/banner.jpg",
		},
		{
			title: "Study",
			description: "Resources to study different topics",
			imageUrl: "/banner.jpg",
		},
		{
			title: "Review",
			description: "Quick reviews of key concepts",
			imageUrl: "/banner.jpg",
		},
		{
			title: "Study",
			description: "Resources to study different topics",
			imageUrl: "/banner.jpg",
		},
		{
			title: "Review",
			description: "Quick reviews of key concepts",
			imageUrl: "/banner.jpg",
		},
		{
			title: "Study",
			description: "Resources to study different topics",
			imageUrl: "/banner.jpg",
		},
		{
			title: "Review",
			description: "Quick reviews of key concepts",
			imageUrl: "/banner.jpg",
		},
		{
			title: "Study",
			description: "Resources to study different topics",
			imageUrl: "/banner.jpg",
		},
		{
			title: "Review",
			description: "Quick reviews of key concepts",
			imageUrl: "/banner.jpg",
		},
	];

	return (
		<div className="bg-gradient-to-b from-neutral-50 to-sky-100">
			<Tools tools={sampleTools} />
			<br />
			<br />
			<Footer />
		</div>
	);
};

export default page;
