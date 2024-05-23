import { FC } from "react";

interface DemographicDetailProps {}

const DemographicDetail: FC<DemographicDetailProps> = ({}) => {
	return (
		<div className="flex-grow flex-col px-[14px] py-4 ml-4 bg-[#F3F3F4] border-t-[#1A1B1C] border-t-2">
			<div className="text-[#1A1B1C] uppercase font-roobert-trial font-semibold text-base mb-[82px]">
				A.I. confidence
			</div>
            <div className="flex flex-grow justify-end items-end">
                bottom right    
            </div>  
		</div>
	);
};

export default DemographicDetail;
