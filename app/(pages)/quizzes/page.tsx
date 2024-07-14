import Footer from "@/components/Landing/Footer";
import Quizzes from "@/components/Quizzes/Quizzes";
import React from "react";

const page = () => {
	const sampleQuizzes = [
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
			<Quizzes quizzes={sampleQuizzes} />
			<br />
			<br />
			<Footer />
		</div>
	);
};

export default page;
