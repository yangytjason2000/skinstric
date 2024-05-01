"use client";

import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import InfoForm from "./InfoForm";

interface InfoFormProps {
	questions: any[];
}

const UserInfo: FC<InfoFormProps> = ({
	questions
}) => {
	const [questionIndex, setQuestionIndex] = useState<number>(0);
	const [name, setName] = useState<string>("");
	const [location, setLocation] = useState<string>("");
	const router = useRouter();

	const onClickBackButton = () => {
		if (questionIndex === 0) {
			router.push("/");
		}
		else if (questionIndex === 1) {
			setQuestionIndex(0);
		}
	};

	const onClickProceedButton = () => {
		if (questionIndex === 0) {
			setQuestionIndex((questionIndex) => questionIndex + 1);
		}
		else if (questionIndex === 1) {
			console.log("haha")
		}
	};

	return (
		<div className="h-full flex flex-col justify-between items-center">
			<div className="flex flex-col flex-grow justify-center items-center">
				<div className={questionIndex == 0 ? "" : "hidden"}>
					<InfoForm
						question={questions[questionIndex].question}
						inputValue={name}
						placeholder={questions[questionIndex].placeholder}
						hintText="CLICK TO TYPE"
						onInputChange={setName}
						onSubmit={onClickProceedButton}
					/>
				</div>
				<div className={questionIndex == 1 ? "" : "hidden"}>
					<InfoForm
						question={questions[questionIndex].question}
						inputValue={location}
						placeholder={questions[questionIndex].placeholder}
						hintText="CLICK TO TYPE"
						onInputChange={setLocation}
						onSubmit={onClickProceedButton}
					/>
				</div>
			</div>
			<div className="flex w-full justify-between items-center">
				<button
					className="flex justify-center items-center gap-4 group"
					onClick={onClickBackButton}
				>
					<span
						className={`w-[31px] h-[31px] rotate-45 
						flex justify-center items-center 
						border-x border-y border-[#1A1B1C] 
						group-hover:scale-150 duration-500 ease-custom`}
					>
						<span className="-rotate-45 pr-1">
							<img src="icons/Polygon.svg" alt="back button icon" />
						</span>
					</span>
					<span className="font-roobert-trial font-semibold text-sm text-[#1A1B1C] group-hover:translate-x-4 duration-500 ease-custom uppercase">
						Back
					</span>
				</button>
				{((questionIndex === 0 && name !== "") || (questionIndex === 1 && location !== "")) && (
					<button
						className="flex justify-center items-center gap-4 group"
						onClick={onClickProceedButton}
					>
						<span className="font-roobert-trial font-semibold text-sm text-[#1A1B1C] group-hover:-translate-x-4 duration-500 ease-custom uppercase">
							Proceed
						</span>
						<span className={`w-[31px] h-[31px] rotate-45 
							flex justify-center items-center 
							border-x border-y border-[#1A1B1C]
							group-hover:scale-150 duration-500 ease-custom`}>
							<span className="rotate-135 pr-1">
								<img src="icons/Polygon.svg" alt="back button icon" />
							</span>
						</span>
					</button>
				)}
			</div>
		</div>
	);
};

export default UserInfo;
