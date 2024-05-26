import { FC } from "react";
import CircleProgress from "./CircleProgress";
import { DemographicCategory } from "@/app/types/categoryType";

interface DemographicDetailProps {
	demographicDetailData: DemographicCategory;
	selectedDetailedDataIndex: number;
	setSelectedDetailedDataIndex: (newIndex: number) => void;
}

const DemographicDetail: FC<DemographicDetailProps> = ({
	demographicDetailData,
	selectedDetailedDataIndex,
	setSelectedDetailedDataIndex,
}) => {
	return (
		<div className="flex flex-auto">
			<div className="flex-auto flex-col px-[14px] py-4 ml-4 bg-[#F3F3F4] border-t-[#1A1B1C] border-t-2">
				<div className="text-[#1A1B1C] uppercase font-roobert-trial font-semibold text-4xl mb-[82px]">
					A.I. confidence
				</div>
				<div className="ml-auto mt-auto w-[384px] max-lg:w-[176px] relative">
					<CircleProgress percentage={demographicDetailData.data[selectedDetailedDataIndex][1] * 100} />
					<div
						className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 
						text-[#1A1B1C] uppercase font-roobert-trial font-semibold text-4xl"
					>
						{Math.round(demographicDetailData.data[selectedDetailedDataIndex][1] * 100)}
						<span className="font-roobert-trial font-semibold text-2xl">%</span>
					</div>
				</div>
			</div>
			<div className="w-[400px] px-[14px] py-4 ml-4 bg-[#F3F3F4] border-t-[#1A1B1C] border-t-2">
				<div className="flex justify-between text-[#1A1B1C] uppercase font-roobert-trial font-semibold text-base">
					<div>{demographicDetailData.key}</div>
					<div>a.i. confidence</div>
				</div>
			</div>
		</div>
	);
};

export default DemographicDetail;
