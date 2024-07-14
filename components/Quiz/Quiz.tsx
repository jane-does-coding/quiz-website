import React from "react";
import { Progress } from "@/components/ui/progress";
import { RadioGroupComponent } from "./Question";

const Quiz = () => {
	return (
		<div className="w-[100vw] h-screen flex items-center justfiy-center bg-gradient-to-b from-neutral-50 to-sky-100/75">
			<div className="w-[50vw] min-h-[60vh] bg-white/75 border-[1px] border-neutral-200 mx-auto rounded-[1rem] flex flex-col">
				<div className="w-[90%] mx-auto flex items-center justify-center gap-4 mt-8">
					<Progress value={33} className="bg-neutral-100 h-[1.5rem] " />
					<p className="flex items-center justify-center">4/20</p>
				</div>
				<h2 className="w-[90%] jura mx-auto mt-6 text-[1.3rem] pb-6 border-b-[1px] border-neutral-200">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
					animi, voluptates qui praesentium delectus porro quasi inventore
					repellendus laborum reprehenderit?
				</h2>
				{/* Options */}
				<div className="w-[90%] mx-auto">
					<RadioGroupComponent />
				</div>
			</div>
		</div>
	);
};

export default Quiz;
