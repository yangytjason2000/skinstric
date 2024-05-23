"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FC, useRef } from "react";

interface CircleProgressProps {
	percentage: number;
}

const CircleProgress: FC<CircleProgressProps> = ({ percentage }) => {
	const circleRef = useRef<SVGCircleElement | null>(null);
	useGSAP(() => {
		const circle = circleRef.current;
		if (!circle) return;

		const radius = circle.r.baseVal.value;
		const circumference = radius * 2 * Math.PI;
		const offset = circumference - (percentage / 100) * circumference;

		circle.style.strokeDasharray = `${circumference} ${circumference}`;
		circle.style.strokeDashoffset = `${circumference}`;

		gsap.to(circle, {
			strokeDashoffset: offset,
			duration: 0.4,
			ease: "power1.inOut",
		});
	}, [percentage]);
	return (
		<svg
			width="100"
			height="100"
			viewBox="0 0 100 100"
			className="w-full h-auto will-change-transform"
		>
			<circle
				cx="50"
				cy="50"
				r="48"
				fill="none"
				stroke="#C1C2C3"
				strokeWidth="1"
			/>
			<circle
				ref={circleRef}
				cx="50"
				cy="50"
				r="48"
				fill="none"
				strokeWidth="1"
				stroke="#1A1B1C"
				transform="rotate(-90 50 50)"
			/>
		</svg>
	);
};

export default CircleProgress;
