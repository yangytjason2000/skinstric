import type { Metadata } from "next";
import "./globals.css";
import toast, { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
	title: "Skinstric",
	description: "Using AI to help your skin",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-[#FCFCFC]">
				<Toaster
					position="top-left"
					containerStyle={{
						top: "3em",
						left: "2em",
					}}
				/>
				{children}
			</body>
		</html>
	);
}
