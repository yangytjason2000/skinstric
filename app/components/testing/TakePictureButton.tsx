import RotatingDiamond from "../RotatingDiamond";

const TakePictureButton = () => {
    return <div>
        <button className="flex items-center justify-center">
            <RotatingDiamond widths={[287, 314, 341]}/>
            <img src="icons/shutter.svg" alt="take picture" className="hover:scale-80 ease-custom duration-300"/>
        </button>
    </div>
}

export default TakePictureButton;