import { FC } from "react";
import CircleProgress from "./CircleProgress";

interface DemographicDetailProps {
	percentage: number;
}

const DemographicDetail: FC<DemographicDetailProps> = ({ percentage }) => {
	return (
		<div className="flex flex-grow flex-col px-[14px] py-4 ml-4 bg-[#F3F3F4] border-t-[#1A1B1C] border-t-2">
			<div className="text-[#1A1B1C] uppercase font-roobert-trial font-semibold text-base mb-[82px]">
				A.I. confidence
			</div>
			<div className="ml-auto mt-auto w-[384px] max-lg:w-[176px] relative">
				<CircleProgress percentage={percentage} />
				<div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 
					text-[#1A1B1C] uppercase font-roobert-trial font-semibold text-4xl">
					{Math.round(percentage)}
					<span className="font-roobert-trial font-semibold text-2xl">%</span>
				</div>
			</div>
		</div>
	);
};

export default DemographicDetail;
