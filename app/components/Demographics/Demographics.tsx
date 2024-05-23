"use client";
import { FC, useEffect, useState } from "react";
import Categories from "./Categories";
import DemographicDetail from "./DemographicDetail";
interface Race {
	[key: string]: number;
}

interface Age {
	[key: string]: number;
}

interface Gender {
	[key: string]: number;
}

interface DemographicsData {
	race: Race;
	age: Age;
	gender: Gender;
}

interface ApiResponse {
	message: string;
	data: DemographicsData;
}

interface DemographicsProps {
	jsonData: ApiResponse;
}

const Demographics: FC<DemographicsProps> = ({ jsonData }) => {
	const [demographicData, setDemographicData] = useState<
		[Array<[string, number]>, Array<[string, number]>, Array<[string, number]>]
	>([[], [], []]);
	const [selectedDemographicData, setSelectedDemographicData] = useState<
		Array<[string, number]>
	>([]);
	const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

	useEffect(() => {
		if (jsonData && jsonData.data) {
			const { race, age, gender } = jsonData.data;
			const sortedracesEntries = Object.entries(race)
				.sort(([, a], [, b]) => b - a)
				.map(
					([key, value]) =>
						[key, parseFloat(value.toFixed(4))] as [string, number]
				);
			const sortedAgesEntries = Object.entries(age)
				.sort(([, a], [, b]) => b - a)
				.map(
					([key, value]) =>
						[key, parseFloat(value.toFixed(4))] as [string, number]
				);
			const sortedGendersEntries = Object.entries(gender)
				.sort(([, a], [, b]) => b - a)
				.map(
					([key, value]) =>
						[key, parseFloat(value.toFixed(4))] as [string, number]
				);
			setDemographicData([
				sortedracesEntries,
				sortedAgesEntries,
				sortedGendersEntries,
			]);
			setSelectedDemographicData([
				sortedracesEntries[0],
				sortedAgesEntries[0],
				sortedGendersEntries[0],
			]);
		}
	}, [jsonData]);

	if (selectedDemographicData.length === 0) {
		return null;
	}

	return (
		<div className="mt-[120px] flex">
			<Categories
				categoryData={[
					{ value: selectedDemographicData[0][0], title: "race" },
					{ value: selectedDemographicData[1][0], title: "age" },
					{ value: selectedDemographicData[2][0], title: "gender" },
				]}
				onClick={setSelectedCategoryIndex}
				selectedCategoryIndex={selectedCategoryIndex}
			/>
			<DemographicDetail
				percentage={selectedDemographicData[selectedCategoryIndex][1] * 100}
			/>
		</div>
	);
};

export default Demographics;
