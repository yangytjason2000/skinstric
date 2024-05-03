import { FC } from "react";

interface PlaceInputProps {
    inputValue: string,
    onInputFocus: () => void;
    onInputBlur: () => void;
    onInputChange: (input: string) => void;
    formPlaceholder: string,
}

const PlaceInput: FC<PlaceInputProps> = ({
    inputValue,
    onInputFocus,
    onInputBlur,
    onInputChange,
    formPlaceholder,
}) => {
	return (
		<input
			type="text"
			value={inputValue}
			onFocus={onInputFocus}
			onBlur={onInputBlur}
			onChange={(e) => onInputChange(e.target.value)}
			className={`bg-transparent  
              w-[480px]
              tracking-very-tight 
              border-b-2 
              border-[#1A1B1C]  
              text-center 
              focus:outline-none 
              pb-1
              font-roobert-trial 
              font-normal 
              text-6xl
              placeholder-[#1A1B1C]
              placeholder-center
              placeholder-opacity-30`}
			placeholder={formPlaceholder}
		/>
	);
};

export default PlaceInput;