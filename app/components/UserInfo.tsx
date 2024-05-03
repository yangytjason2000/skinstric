"use client";

import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import InfoForm from "./InfoForm";
import BackButton from "./Buttons/BackButton";
import ProceedButton from "./Buttons/ProceedButton";
import RotatingDiamond from "./RotatingDiamond";
import toast from "react-hot-toast";
import BackToHomeToaster from "./BackToHomeToaster";

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
			toast.custom(<BackToHomeToaster id={'back-to-home-toast'} onConfirm={()=>router.push("/")}/>, {
				id: 'back-to-home-toast',
				duration: Infinity
			});
			// router.push("/");
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
		}
	};

	return (
		<div className="h-full flex flex-col justify-between items-center">
			<div className="flex flex-col flex-grow justify-center items-center">
				<RotatingDiamond />
				<div className={questionIndex == 0 ? "" : "hidden"}>
					<InfoForm
						question={questions[0].question}
						inputValue={name}
						placeholder={questions[0].placeholder}
						hintText="CLICK TO TYPE"
						onInputChange={setName}
						onSubmit={onClickProceedButton}
					/>
				</div>
				<div className={questionIndex == 1 ? "" : "hidden"}>
					<InfoForm
						question={questions[1].question}
						inputValue={location}
						placeholder={questions[1].placeholder}
						hintText="CLICK TO TYPE"
						onInputChange={setLocation}
						onSubmit={onClickProceedButton}
					/>
				</div>
			</div>
			<div className="flex w-full justify-between items-center">
				<BackButton onClick={onClickBackButton}/>
				{((questionIndex === 0 && name !== "") || (questionIndex === 1 && location !== "")) && (
					<ProceedButton onClick={onClickProceedButton} />
				)}
			</div>
		</div>
	);
};

export default UserInfo;
