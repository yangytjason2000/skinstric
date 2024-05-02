import { FC } from "react";

interface NameInputProps {
    inputValue: string,
    onInputFocus: () => void;
    onInputBlur: () => void;
    onInputChange: (input: string) => void;
    formPlaceholder: string,
}

const NameInput: FC<NameInputProps> = ({
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
            autoComplete="on"
			className={`bg-transparent  
              w-[420px]
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

export default NameInput;
