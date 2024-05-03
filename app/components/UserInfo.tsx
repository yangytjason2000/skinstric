"use client";

import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import InfoForm from "./InfoForm";
import BackButton from "./Buttons/BackButton";
import ProceedButton from "./Buttons/ProceedButton";
import RotatingDiamond from "./RotatingDiamond";
import toast from "react-hot-toast";
import BackToHomeToaster from "./Toasters/BackToHomeToaster";
import { UserInfoRequest } from "../lib/validators/UserInfoValidator";
import axios from "axios";

interface InfoFormProps {
	questions: any[];
}

const UserInfo: FC<InfoFormProps> = ({ questions }) => {
	const [questionIndex, setQuestionIndex] = useState<number>(0);
	const [name, setName] = useState<string>("");
	const [location, setLocation] = useState<string>("");
	const router = useRouter();

	//API call to submit the user's name and location
	async function submitUserInfo(payload: UserInfoRequest) {
		try {
			const { data } = await axios.post(
				"https://wk7wmfz7x8.execute-api.us-east-2.amazonaws.com/live/FES_Virtual_Internship_1/level1",
				payload
			);
			toast.success('Submission Sucessfull: ', data);
			return
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.error('Error message:', error.message);
				toast.error(`UserInfo Submission Failed: ${error.message}`);
			} else {
				console.error('Unexpected error:', error);
				toast.error('UserInfo Submission Failed');
			}
		}
	}

	
	//On click function when user click on back, if it's in name form, it will bring
	//user back to the home page; if it's in place form, it will bring user back to name form
	const onClickBackButton = () => {
		if (questionIndex === 0) {
			//Using toaster to inform and confirm user action of going back to home page
			toast.custom(
				<BackToHomeToaster
					id={"back-to-home-toast"}
					onConfirm={() => router.push("/")}
				/>,
				{
					id: "back-to-home-toast",
					duration: Infinity,
				}
			);
		} else if (questionIndex === 1) {
			setQuestionIndex(0);
		}
	};

	//On click function when user click on proceed button, if user is in name form
	//it will bring user to place form; if user is in place form, it will use the api
	//call to submit user's name and location 
	const onClickProceedButton = () => {
		if (questionIndex === 0) {
			setQuestionIndex((questionIndex) => questionIndex + 1);
		} else if (questionIndex === 1) {
			if (name !== "" && location !== "") {
				const payload: UserInfoRequest = {
					name: name,
					location: location,
				};
				submitUserInfo(payload);
			}
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
				<BackButton onClick={onClickBackButton} />
				{((questionIndex === 0 && name !== "") ||
					(questionIndex === 1 && location !== "")) && (
					<ProceedButton onClick={onClickProceedButton} />
				)}
			</div>
		</div>
	);
};

export default UserInfo;
