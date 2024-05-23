import Demographics from "@/app/components/Demographics/Demographics";
import Header from "@/app/components/testing/Header";

const page = () => {
	const jsonData = {
		message:
			"SUCCESS: You hit the Level 2 API. Image is a valid Base64 String.",
		data: {
			race: {
				"black": 0.11956584717786628,
				"white": 0.1280179046276461,
				"southeast asian": 0.06297961651829671,
				"south asian": 0.1425948353728242,
				"latino hispanic": 0.0619650872094126,
				"east asian": 0.2525825951799374,
				"middle eastern": 0.23229411391401664,
			},
			age: {
				"20-29": 0.031678993030692736,
				"30-39": 0.14951751927400894,
				"40-49": 0.21423285073736906,
				"10-19": 0.060884420054723574,
				"50-59": 0.14185781411091578,
				"3-9": 0.11754071465957916,
				"60-69": 0.0640062076182385,
				"70+": 0.10014548458462194,
				"0-2": 0.12013599592985022,
			},
			gender: {
				"male": 0.520499217733165,
				"female": 0.47950078226683496,
			},
		},
	};
	return (
		<div className="relative flex flex-col h-screen">
			<Header />
			<div className="flex flex-col flex-grow bg-[#fcfcfc] px-8 pb-9 mt-16">
				<div className="flex flex-col">
					<h1 className="uppercase font-roobert-trial text-7xl text-[#1A1B1C]">
						demographics
					</h1>
					<p className="uppercase font-roobert-trial text-base text-[#1A1B1C] mt-1">
						predicted race & age
					</p>
				</div>
				<Demographics jsonData={jsonData}/>
			</div>
		</div>
	);
};

export default page;
