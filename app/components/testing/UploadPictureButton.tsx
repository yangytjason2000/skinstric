import { FC } from "react";
import RotatingDiamond from "../RotatingDiamond";

interface UploadPictureButtonProps {
    onClick: () => void;
}
const UploadPictureButton:FC<UploadPictureButtonProps> = ({
    onClick
}) => {
	return (
		<button className="relative flex items-center justify-center" onClick={onClick}>
			<RotatingDiamond widths={[287, 314, 341]} />
			<span className="absolute text-base font-roobert-trial font-normal top-36 -left-44 uppercase text-nowrap text-right">
				allow A.I.
				<br></br>
				access gallery
			</span>
			<span className="absolute bg-[#1A1B1C] w-[1px] h-[80px] rotate-45 top-[84px] -left-[12px]">
				<span
					className={`
                    absolute bg-white border border-[#1A1B1C] 
                    rounded-full w-[5px] h-[5px] 
                    top-[80px] -left-[2px]`}
				/>
			</span>
			<img
				src="icons/gallery.svg"
				alt="take picture"
				className="hover:scale-80 ease-custom duration-300"
			/>
		</button>
	);
};

export default UploadPictureButton;