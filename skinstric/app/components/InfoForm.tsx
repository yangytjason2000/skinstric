"use client";

import { useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

const InfoForm = () => {
	const questions = useMemo(
		() => [
			{ question: "Introduce yourself", placeholder: "" },
			{ question: "Where are you from?", placeholder: "Enter a location" },
		],
		[]
	);
	const [questionIndex, setQuestionIndex] = useState<number>(0);
	const [name, setName] = useState<string>("");
	const [hintText, setHintText] = useState<string>("CLICK TO TYPE");
	const [label, setLabel] = useState<string>(
		questions[questionIndex].question
	);
    const [placeholder, setPlaceHolder] = useState<string>("");
	const labelRef = useRef(null);

	const animateLabel = (newLabel: string) => {
		const labelEl = labelRef.current;
		gsap.to(labelEl, {
			opacity: 0,
			duration: 0.08,
			onComplete: () => {
				setLabel(newLabel);
				gsap.to(labelEl, { opacity: 1, duration: 0.08 });
			},
		});
	};

	const onInputFocus = () => {
		animateLabel("");
		setHintText(questions[questionIndex].question.toUpperCase());
        setPlaceHolder(questions[questionIndex].placeholder);
	};

	const onInputBlur = () => {
		animateLabel(questions[questionIndex].question);
		setHintText("CLICK TO TYPE");
        setPlaceHolder("");
	};
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="font-roobert-trial font-normal text-sm text-[#1A1B1C] text-opacity-40 h-6 text-center">
				{hintText}
			</div>
			{questionIndex === 0 && (
				<form>
					<div className="relative">
                        <label
							ref={labelRef}
							className={`absolute left-0 top-0 text-[#1A1B1C] pointer-events-none text-6xl tracking-very-tight white-space: nowrap text-center`}
						>
							{label}
						</label>
						<input
							type="text"
							value={name}
							onFocus={onInputFocus}
							onBlur={onInputBlur}
							onChange={(e) => setName(e.target.value)}
							className={`bg-transparent  
                            w-[420px]
                            tracking-very-tight 
                            border-b-2 
                            border-[#1A1B1C]  
                            text-center 
                            focus:outline-none 
                            pb-2
                            font-roobert-trial 
                            font-normal 
                            text-6xl
                            placeholder-[#1A1B1C]
                            placeholder-opacity-40`}
                            placeholder={placeholder}
						/>
					</div>
				</form>
			)}
		</div>
	);
};

export default InfoForm;
