"use client";
import { FC, useEffect, useState } from "react";
import Categories from "./Categories";
import DemographicDetail from "./DemographicDetail";
import { ApiResponse, DemographicCategory } from "@/app/types/categoryType";
interface DemographicsProps {
	jsonData: ApiResponse;
}

const Demographics: FC<DemographicsProps> = ({ jsonData }) => {
	const [demographicData, setDemographicData] = useState<DemographicCategory[]>([]);
	const [selectedDemographicData, setSelectedDemographicData] = useState<number[]>([0, 0, 0]);
	const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

	useEffect(() => {
		if (jsonData && jsonData.data) {
			const { race, age, gender } = jsonData.data;
			setDemographicData([
				{ key: "race", data: sortEntries(race) },
				{ key: "age", data: sortEntries(age) },
				{ key: "gender", data: sortEntries(gender) },
			]);
		}
	}, [jsonData]);

	const sortEntries = (data: Record<string, number>) =>
		Object.entries(data)
			.sort(([, a], [, b]) => b - a)
			.map(([key, value]) => [key, parseFloat(value.toFixed(4))] as [string, number]);

	const setSelectedCategoryDetailedIndex = (newIndex: number) => {
		const tempArray = [...selectedDemographicData];
		tempArray[selectedCategoryIndex] = newIndex;
		setSelectedDemographicData(tempArray);
	};

	const hasData = demographicData.length > 0 && demographicData.every(category => category.data.length > 0);

	if (!hasData) {
		return null;
	}

	return (
		<div className="mt-[120px] flex">
			<Categories
				categoryData={demographicData.map(category => ({
					value: category.data[selectedDemographicData[selectedCategoryIndex]][0],
					title: category.key,
				}))}
				onClick={setSelectedCategoryIndex}
				selectedCategoryIndex={selectedCategoryIndex}
			/>
			<DemographicDetail
				demographicDetailData={demographicData[selectedCategoryIndex]}
				selectedDetailedDataIndex={selectedDemographicData[selectedCategoryIndex]}
				setSelectedDetailedDataIndex={setSelectedCategoryDetailedIndex}
			/>
		</div>
	);
};

export default Demographics;