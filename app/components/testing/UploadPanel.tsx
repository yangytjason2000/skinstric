import { useGSAP } from "@gsap/react";
import { FC, useRef } from "react";
import gsap from "gsap";

interface UploadPanelProps {
	onLeave: () => void;
}

const UploadPanel: FC<UploadPanelProps> = ({ onLeave }) => {
	const panelRef = useRef<HTMLDivElement>(null);
    const imageUploadRef = useRef<HTMLInputElement>(null);
	const UploadHints = [
		{title: "neutral expression", content: "smiling may distort wrinkles"},
		{title: "frontal pose", content: "take the image from an arm's length away at eye level"},
		{title: "adequate lightning", content: "avoid harsh downlighting and aim for natural or soft light"}
	]

	useGSAP(() => {
		if (panelRef.current) {
			// Expand toast animation
			const targetHeight = panelRef.current.scrollHeight
			gsap.fromTo(
				panelRef.current,
				{ width: "0px", height: "1px" },
				{ width: "432px", height: "1px", duration: 0.5 }
			);

			gsap.fromTo(
				panelRef.current,
				{ height: "1px" },
				{ height: targetHeight, duration: 0.5, delay: 0.4 }
			);
		}
	});

	const { contextSafe } = useGSAP({ scope: panelRef });
	const collapse = contextSafe((completionCallback: () => void) => {
		if (panelRef.current) {
			//Collapse toast animation
			gsap.to(panelRef.current, {
				height: "1px",
				duration: 0.5,
				onComplete: () => {
					gsap.to(panelRef.current, {
						width: "0px",
						duration: 0.5,
						onComplete: completionCallback,
					});
				},
			});
		}
	});

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const file = event.target.files?.[0];
        if (file) {
            console.log("file uploaded: ", file);
        }
    }

    const handleUploadButtonClick = () => {
        imageUploadRef.current?.click();
        onLeave();
    }

	return (
		<div
			ref={panelRef}
			className="flex flex-col w-[432px] bg-[#1A1B1C] text-[#FCFCFC] overflow-hidden"
		>
			<div className="flex flex-col justify-center">
				<strong className="my-2 ml-4 font-roobert-trial font-semibold text-base uppercase">
					PLEASE ENSURE YOUR SELFIE HAS:
				</strong>
			</div>
			<hr className="border-[#FCFCFC]"></hr>
			<ul className="w-[300px]">
				{UploadHints.map((hint, index)=> {
					return (
						<>
							<li className="font-roobert-trial text-xs uppercase upload-instruction-list-items ml-2 mt-8" key={index}>
								{hint.title}
							</li>
							<p className="font-roobert-trial text-base lowercase opacity-40 ml-6 mb-8 text-wrap w-auto">
								{hint.content}
							</p>
						</>
					)
				})}
			</ul>
			<hr className="border-[#FCFCFC]"></hr>
			<div className="flex justify-end gap-2 mr-2 font-roobert-trial font-semibold text-base">
				<button
					className="py-2 px-4 text-opacity-80 text-[#FCFCFC] uppercase"
					onClick={() => {
						collapse(onLeave);
					}}
				>
					cancel
				</button>
				<button
					className="py-2 px-4 text-[#FCFCFC] uppercase"
					onClick={() => {
						collapse(handleUploadButtonClick);
					}}
				>
					upload
				</button>
                <input
                    type="file"
                    ref={imageUploadRef}
                    className="hidden"
                    onChange={handleFileUpload}
                    accept="image/*"
                />
			</div>
		</div>
	);
};

export default UploadPanel;
