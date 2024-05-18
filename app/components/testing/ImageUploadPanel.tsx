"use client"

import { useState } from "react";
import TakePictureButton from "./TakePictureButton";
import UploadPictureButton from "./UploadPictureButton";
import UploadPanel from "./UploadPanel";

const ImageUploadPanel = () => {
	const [uploadPanelVisibility, setUploadPanelVisibility] = useState(false);
	return (
		<div className="flex justify-around items-center mt-auto mb-auto">
			{uploadPanelVisibility && (
                <div className="absolute inset-0 flex items-center justify-center z-50">
                    <UploadPanel onLeave={()=>setUploadPanelVisibility(false)}/>
                </div>
            )}
			<TakePictureButton />
			<UploadPictureButton onClick = {()=>setUploadPanelVisibility(true)}/>
		</div>
	);
};

export default ImageUploadPanel;
