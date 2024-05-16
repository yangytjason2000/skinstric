const Header = () => {
	return <header className="flex justify-between h-16 bg-[#fcfcfc] px-8">
        <div className="flex items-center">
            <a href="/" className="font-roobert-trial font-semibold text-sm text-[#1A1B1C]">
                SKINSTRIC
            </a>
        </div>
        <div className="flex items-center">
            <button className="px-4 py-2 font-roobert-trial font-semibold text-sm bg-[#1A1B1C] text-[#fcfcfc]">
                CONSULT CHEMIST
            </button>
        </div>
    </header>;
};

export default Header;