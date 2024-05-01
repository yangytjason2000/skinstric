import Header from "../components/Header";
import InfoForm from "../components/InfoForm";

const page = async () => {

	return (
        <div className="relative flex flex-col h-screen bg-[#fcfcfc]">
            <div className="z-10">
                <Header />
                <h1 className="ml-6 font-roobert-trial font-semibold text-sm text-[#1A1B1C]">TO START ANALYSIS</h1>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <InfoForm />
            </div>
        </div>
	);
};

export default page;