import Footer from "@/components/Landing/Footer";
import Learn from "@/components/Learn/Learn";
import Quizzes from "@/components/Quizzes/Quizzes";
import React from "react";

const page = () => {
	return (
		<div className="bg-gradient-to-b from-neutral-50 to-sky-100">
			<Learn />
			<br />
			<br />
			<Footer />
		</div>
	);
};

export default page;
