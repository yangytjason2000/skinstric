import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const RotatingDiamond = () => {
    const diamond1 = useRef(null);
    const diamond2 = useRef(null);
    const diamond3 = useRef(null);
    useGSAP(() => {
        const rotationDuration = [60, 50, 40];

        [diamond1.current, diamond2.current, diamond3.current].forEach((diamond, idx) => {
            gsap.fromTo(diamond, 
                {rotation: 45},
                {
                rotation: 405,
                duration: rotationDuration[idx],
                ease: "none",
                repeat: -1,
                transformOrigin: "center center"
            });
        });
    })
	return (
		<>
			<span
                ref = {diamond1}
				className={`absolute w-[426px] h-[426px] rotate-45
                    flex justify-center items-center 
                    border-2 border-dotted border-[#A0A4AB]`}
			></span>
			<span
                ref = {diamond2}
				className={`absolute w-[482px] h-[482px] rotate-45
                    flex justify-center items-center 
                    border-2 border-dotted border-[#A0A4AB] opacity-60`}
			></span>
            <span
                ref = {diamond3}
				className={`absolute w-[539px] h-[539px] rotate-45
                    flex justify-center items-center 
                    border-2 border-dotted border-[#A0A4AB] opacity-30`}
			></span>
		</>
	);
};

export default RotatingDiamond;
