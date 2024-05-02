import { FC } from "react";

interface BackButtonProps {
	onClick: () => void;
}

const BackButton: FC<BackButtonProps> = ({ onClick }) => {
	return (
		<button
			className="flex justify-center items-center gap-4 group"
			onClick={onClick}
		>
			<span
				className={`relative w-[31px] h-[31px] rotate-45 
					flex justify-center items-center 
					border-x border-y border-[#1A1B1C] border-dotted
					group-hover:scale-150 duration-500 ease-custom`}
			>
				<span
					className={`absolute w-[31px] h-[31px] 
						flex justify-center items-center 
						border-x border-y border-[#1A1B1C] 
						group-hover:scale-125 duration-500 ease-custom`}
				/>
				<span className="-rotate-45 pr-1 group-hover:scale-80 duration-500 ease-custom">
					<img src="icons/Polygon.svg" alt="back button icon" />
				</span>
			</span>
			<span className={`font-roobert-trial font-semibold 
				text-sm text-[#1A1B1C] 
				group-hover:translate-x-7 duration-500 ease-custom 
				uppercase`}>
				Back
			</span>
		</button>
	);
};

export default BackButton;
