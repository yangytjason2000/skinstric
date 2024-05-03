"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { FC, useRef, useState } from "react";
import NameInput from "./Inputs/NameInput";
import PlaceInput from "./Inputs/PlaceInput";

interface InfoFormProps {
	question: string;
	inputValue: string;
	placeholder: string;
	hintText: string;
	onInputChange: (inputValue: string) => void;
	onSubmit: () => void;
}

const InfoForm: FC<InfoFormProps> = ({
	question,
	inputValue,
	placeholder,
	hintText,
	onInputChange,
	onSubmit,
}) => {
    const [formHintText, setFormHintText] = useState<string>(hintText);
	const [label, setLabel] = useState<string>(question);
	const [formPlaceholder, setFormPlaceHolder] = useState<string>("");
	const labelRef = useRef(null);

	//Create the animation for the label to fade in and fade out when user click on input field
	const { contextSafe } = useGSAP({ scope: labelRef });
	const animateLabel = contextSafe((newLabel: string) => {
		const labelEl = labelRef.current;
		gsap.to(labelEl, {
			opacity: 0,
			duration: 0.08,
			onComplete: () => {
				setLabel(newLabel);
				gsap.to(labelEl, { opacity: 1, duration: 0.08 });
			},
		});
	});

	//Handle the effect when user click on input field
	const onInputFocus = () => {
		animateLabel("");
        setFormHintText(question.toUpperCase());
		setFormPlaceHolder(placeholder);
	};
	//Handle the effect when user click outside of the input field
	const onInputBlur = () => {
		if (inputValue === "") {
			animateLabel(question);
            setFormHintText("CLICK TO TYPE");
		}
		setFormPlaceHolder("");
	};

	return (
		<div className="relative flex flex-col justify-center items-center">
			<div className="font-roobert-trial font-normal text-sm text-[#1A1B1C] text-opacity-40 h-6 text-center">
				{formHintText}
			</div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					onSubmit();
				}}
			>
				<div className="relative flex justify-center items-center">
					<label
						ref={labelRef}
						className={`absolute pb-2 
								text-[#1A1B1C] text-6xl 
								pointer-events-none 
								tracking-very-tight whitespace-nowrap text-center`}
					>
						{inputValue === "" ? label : ""}
					</label>
					{question === "Introduce yourself" ? (
						<NameInput
							inputValue={inputValue}
							onInputFocus={onInputFocus}
							onInputBlur={onInputBlur}
							onInputChange={onInputChange}
							formPlaceholder={formPlaceholder}
						/>
					) : (
						<PlaceInput
							inputValue={inputValue}
							onInputFocus={onInputFocus}
							onInputBlur={onInputBlur}
							onInputChange={onInputChange}
							formPlaceholder={formPlaceholder}
						/>
					)}
				</div>
			</form>
		</div>
	);
};

export default InfoForm;
