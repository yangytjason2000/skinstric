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
	const [races, setRaces] = useState<[string, number][]>([]);
	const [ages, setAges] = useState<[string, number][]>([]);
	const [genders, setGenders] = useState<[string, number][]>([]);
	const [selectedRace, setSelectedRace] = useState<string>("");
	const [selectedAge, setSelectedAge] = useState<string>("");
	const [selectedGender, setSelectedGender] = useState<string>("");
	const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

	useEffect(() => {
		if (jsonData && jsonData.data) {
			const { race, age, gender } = jsonData.data;
			const sortedracesEntries = Object.entries(race).sort(
				([, a], [, b]) => b - a
			);
			const sortedAgesEntries = Object.entries(age).sort(
				([, a], [, b]) => b - a
			);
			const sortedGendersEntries = Object.entries(gender).sort(
				([, a], [, b]) => b - a
			);
			setRaces(sortedracesEntries);
			setAges(sortedAgesEntries);
			setGenders(sortedGendersEntries);
			setSelectedRace(sortedracesEntries[0][0]);
			setSelectedAge(sortedAgesEntries[0][0]);
			setSelectedGender(sortedGendersEntries[0][0]);
		}
	}, [jsonData]);

	return (
		<div className="mt-[120px] flex">
			<Categories
				categoryData={[
					{value: selectedRace, title: "race"},
					{value: selectedAge, title: "age"},
					{value: selectedGender, title: "gender"},
				]}
                onClick={setSelectedCategoryIndex}
                selectedCategoryIndex = {selectedCategoryIndex}
			/>
            <DemographicDetail/>
		</div>
	);
};

export default Demographics;
