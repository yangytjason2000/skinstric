"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FC, useRef } from "react";

interface RotatingDiamondProps {
    widths: number[];
}
const RotatingDiamond: FC<RotatingDiamondProps> = ({
    widths
}) => {
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
                style={{
                    width: `${widths[0]}px`,
                    height: `${widths[0]}px`
                }}
				className={`absolute rotate-45 pointer-events-none
                    flex justify-center items-center 
                    border-2 border-dotted border-[#A0A4AB]`}
			></span>
			<span
                ref = {diamond2}
                style={{
                    width: `${widths[1]}px`,
                    height: `${widths[1]}px`
                }}
				className={`absolute rotate-45 pointer-events-none
                    flex justify-center items-center 
                    border-2 border-dotted border-[#A0A4AB] opacity-60`}
			></span>
            <span
                ref = {diamond3}
                style={{
                    width: `${widths[2]}px`,
                    height: `${widths[2]}px`
                }}
				className={`absolute rotate-45 pointer-events-none
                    flex justify-center items-center 
                    border-2 border-dotted border-[#A0A4AB] opacity-30`}
			></span>
		</>
	);
};

export default RotatingDiamond;
