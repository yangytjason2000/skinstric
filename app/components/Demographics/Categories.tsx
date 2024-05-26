import { FC } from "react";

interface Category {
	value: string;
	title: string;
}

interface CategoriesProps {
	categoryData: Category[];
	onClick: (index: number) => void;
	selectedCategoryIndex: number;
}

const Categories: FC<CategoriesProps> = ({
	categoryData,
	onClick,
	selectedCategoryIndex,
}) => {
	return (
		<ul>
			{categoryData.map((category, index) => {
				const isSelected = index === selectedCategoryIndex;
				return (
					<li key={index} className="mb-4">
						<button
							onClick={() => onClick(index)}
							className={`py-[10px] px-4 w-full ${isSelected ? "bg-[#1A1B1C] text-[#FCFCFC]" : "bg-[#f3f3f4] bg-opacity-50 text-[#1A1B1C] border-t-[#1A1B1C] border-t-2 hover:bg-[#E1E1E2]"}`}
						>
							<span className="flex justify-start flex-col">
								<span className="mb-8 uppercase font-roobert-trial font-semibold text-base text-left break-words">
									{category.value}
								</span>
								<span className="uppercase font-roobert-trial font-semibold text-base text-left">
									{category.title}
								</span>
							</span>
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export default Categories;