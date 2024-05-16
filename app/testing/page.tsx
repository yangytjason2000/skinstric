import Header from "../components/testing/Header";
import ImageUploadPanel from "../components/testing/ImageUploadPanel";
import PreferredWay from "../components/testing/PreferredWay";

const page = () => {
	return (
		<div className="relative flex flex-col h-screen">
            <Header />
            <div className="flex flex-col flex-grow bg-[#fcfcfc] px-8 pb-9">
                <h1 className="font-roobert-trial font-semibold text-base text-[#1A1B1C] mt-5">
                    TO START ANALYSIS
                </h1>
                <ImageUploadPanel/>
            </div>
            <PreferredWay/>
        </div>
	);
};

export default page;