export interface Race {
	[key: string]: number;
}

export interface Age {
	[key: string]: number;
}

export interface Gender {
	[key: string]: number;
}

export interface DemographicsData {
	race: Race;
	age: Age;
	gender: Gender;
}

export interface ApiResponse {
	message: string;
	data: DemographicsData;
}

export interface DemographicCategory {
	key: string;
	data: Array<[string, number]>;
}

export interface Category {
	value: string;
	title: string;
}