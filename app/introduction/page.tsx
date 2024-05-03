import Header from "../components/Header";
import UserInfo from "../components/UserInfo";

const page = () => {
	const questions = [
		{ question: "Introduce yourself", placeholder: "" },
		{ question: "Where are you from?", placeholder: "Enter a location" },
	];
	return (
		<div className="flex flex-col h-screen bg-[#fcfcfc] px-8 pb-9">
			<Header />
			<h1 className="font-roobert-trial font-semibold text-sm text-[#1A1B1C]">
				TO START ANALYSIS
			</h1>
			<UserInfo questions={questions}/>
		</div>
	);
};

export default page;
