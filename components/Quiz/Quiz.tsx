"use client";
import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { MedicalPrefixesData } from "@/data/MedicalPrefixesData";

interface Question {
	question: string;
	choices: string[];
	correctAnswer: string;
}

const Quiz: React.FC = () => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
	const [score, setScore] = useState(0);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isQuizStarted, setIsQuizStarted] = useState(false);
	const [numQuestions, setNumQuestions] = useState(10);
	const [timerMinutes, setTimerMinutes] = useState(0);
	const [timeLeft, setTimeLeft] = useState(0);

	const questions = MedicalPrefixesData.slice(0, numQuestions);

	const currentQuestion = questions[currentQuestionIndex];
	const progressValue = ((currentQuestionIndex + 1) / questions.length) * 100;
	console.log(progressValue);

	const handleAnswerSelect = (choice: string) => {
		const updatedAnswers = [...selectedAnswers];
		updatedAnswers[currentQuestionIndex] = choice;
		setSelectedAnswers(updatedAnswers);
	};

	const handleNextQuestion = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		}
	};

	const handlePrevQuestion = () => {
		if (currentQuestionIndex > 0) {
			setCurrentQuestionIndex(currentQuestionIndex - 1);
		}
	};

	const handleSubmit = () => {
		let calculatedScore = 0;
		selectedAnswers.forEach((answer, index) => {
			if (answer === questions[index].correctAnswer) {
				calculatedScore += 1;
			}
		});
		setScore(calculatedScore);
		setIsSubmitted(true);
	};

	const handleStartQuiz = () => {
		setIsQuizStarted(true);
		if (timerMinutes > 0) {
			setTimeLeft(timerMinutes * 60);
		}
	};

	/* UHH??? WHAT EVEN IS THAT */
	/* 
	useEffect(() => {
		setCurrentQuestionIndex(currentQuestionIndex);
	}, [currentQuestionIndex]); */

	useEffect(() => {
		if (timeLeft > 0) {
			const timerId = setInterval(() => {
				setTimeLeft(timeLeft - 1);
			}, 1000);
			return () => clearInterval(timerId);
		} else if (timeLeft === 0 && timerMinutes > 0) {
			handleSubmit();
		}
	}, [timeLeft]);

	if (!isQuizStarted) {
		return (
			<div className="w-[100vw] h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-sky-100/75">
				<div className="w-[45vw] min-h-[60vh] bg-white/75 border-[1px] border-neutral-200 mx-auto rounded-[1rem] flex flex-col items-center justify-center px-12">
					<h2 className="jura text-[2.5rem] mb-8">Select Quiz Options</h2>
					<div className="mb-8 w-full">
						<label
							htmlFor="num-questions"
							className="block mx-auto text-center mb-4 text-[1.25rem] jura"
						>
							Number of Questions:
						</label>
						<select
							id="num-questions"
							value={numQuestions}
							onChange={(e) => setNumQuestions(parseInt(e.target.value))}
							className="w-full bg-sky-100 border-sky-200 border-[2px] rounded-full px-6 py-3 text-[1rem]"
						>
							<option value={10}>10</option>
							<option value={25}>25</option>
							<option value={50}>50</option>
							<option value={100}>100</option>
							<option value={150}>150</option>
							<option value={MedicalPrefixesData.length}>All</option>
						</select>
					</div>
					<div className="mb-8 w-full">
						<label
							htmlFor="timer"
							className="block mx-auto text-center mb-4 text-[1.25rem] jura"
						>
							Set Timer (minutes):
						</label>
						<select
							id="timer"
							value={timerMinutes}
							className="w-full bg-sky-100 border-sky-200 border-[2px] rounded-full px-6 py-3 text-[1rem]"
							onChange={(e) => setTimerMinutes(parseInt(e.target.value))}
						>
							<option value={0}>No Timer</option>
							{Array.from({ length: 90 }, (_, i) => i + 1).map((minute) => (
								<option key={minute} value={minute}>
									{minute}
								</option>
							))}
						</select>
					</div>
					<button onClick={handleStartQuiz}>Start Quiz</button>
				</div>
			</div>
		);
	}

	if (isSubmitted) {
		return (
			<div className="w-[100vw] h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-sky-100/75">
				<div className="w-[50vw] min-h-[60vh] bg-white/75 border-[1px] border-neutral-200 mx-auto rounded-[1rem] flex flex-col items-center justify-center">
					<h2 className="text-[1.5rem] mb-4">Quiz Completed!</h2>
					<p className="text-[1.2rem]">
						Your score: {score}/{questions.length}
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="w-[100vw] h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-sky-100/75">
			<div className="w-[50vw] min-h-[60vh] bg-white/75 border-[1px] border-neutral-200 mx-auto rounded-[1rem] flex flex-col">
				<div className="w-[90%] mx-auto flex items-center justify-center gap-4 mt-8">
					<Progress
						value={progressValue}
						className="bg-neutral-100 h-[1.5rem]"
					/>
					<p className="flex items-center justify-center">{`${
						currentQuestionIndex + 1
					}/${questions.length}`}</p>
				</div>
				{timerMinutes > 0 && (
					<div className="w-[90%] mx-auto flex items-center justify-center mt-4">
						<p className="text-[1rem]">
							Time left:{" "}
							{`${Math.floor(timeLeft / 60)}:${
								timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60
							}`}
						</p>
					</div>
				)}
				<h2 className="w-[90%] jura mx-auto mt-6 text-[1.3rem] pb-6 border-b-[1px] border-neutral-200">
					{currentQuestion.question}
				</h2>
				<div className="w-[90%] mx-auto">
					{currentQuestion.choices.map((choice, index) => (
						<div key={index} className="flex items-center space-x-2">
							<input
								type="radio"
								id={`choice-${index}`}
								name="choices"
								value={choice}
								checked={selectedAnswers[currentQuestionIndex] === choice}
								onChange={() => handleAnswerSelect(choice)}
							/>
							<label htmlFor={`choice-${index}`}>{choice}</label>
						</div>
					))}
				</div>
				<div className="w-[90%] mx-auto mt-auto mb-4 flex justify-between gap-4">
					<button
						onClick={handlePrevQuestion}
						disabled={currentQuestionIndex === 0}
						className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-full py-3 text-[1.1rem]"
					>
						Previous
					</button>
					{currentQuestionIndex < questions.length - 1 ? (
						<button
							onClick={handleNextQuestion}
							className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-full py-3 text-[1.1rem]"
						>
							Next
						</button>
					) : (
						<button
							onClick={handleSubmit}
							className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-full py-3 text-[1.1rem]"
						>
							Submit
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Quiz;
