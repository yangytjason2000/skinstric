import Header from "../components/Introduction/Header";
import UserInfo from "../components/Introduction/UserInfo";

const page = () => {
	const questions = [
		{ question: "Introduce yourself", placeholder: "" },
		{ question: "Where are you from?", placeholder: "Enter a location" },
	];
	return (
		<div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-col flex-grow bg-[#fcfcfc] px-8 pb-9 mt-16">
                <h1 className="font-roobert-trial font-semibold text-base text-[#1A1B1C] mt-5">
                    TO START ANALYSIS
                </h1>
                <UserInfo questions={questions}/>
            </div>
        </div>
	);
};

export default page;
