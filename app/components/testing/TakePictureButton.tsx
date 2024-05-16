import RotatingDiamond from "../RotatingDiamond";

const TakePictureButton = () => {
	return (
		<button className="relative flex items-center justify-center">
			<RotatingDiamond widths={[287, 314, 341]} />
			<span className="absolute text-base font-roobert-trial font-normal -top-8 left-44 uppercase text-nowrap text-left">
				allow A.I.
				<br></br>
				to scan your face
			</span>
			<span className="absolute bg-[#1A1B1C] w-[1px] h-[80px] rotate-45 -top-8 left-[144px]">
				<span
					className={`
                    absolute bg-white border border-[#1A1B1C] 
                    rounded-full w-[5px] h-[5px] 
                    top-[2px] left-[1px] 
                    -translate-x-2/4 -translate-y-2/4`}
				/>
			</span>
			<img
				src="icons/shutter.svg"
				alt="take picture"
				className="hover:scale-80 ease-custom duration-300"
			/>
		</button>
	);
};

export default TakePictureButton;
