import { useGSAP } from '@gsap/react';
import { FC, useRef } from 'react';
import gsap from 'gsap';
import toast from 'react-hot-toast';

interface BackToHomeToasterProps {
    id: string;
    onConfirm: () => void;
}

const BackToHomeToaster: FC<BackToHomeToasterProps> = ({ id, onConfirm}) => {
    const toasterRef = useRef(null);
    useGSAP(() => {
        if (toasterRef.current) {
            // Expand toast animation
            gsap.fromTo(toasterRef.current,
                { width: '0px', height: '1px' },
                { width: '432px', height: '1px', duration: 0.5}
            );

            gsap.fromTo(toasterRef.current,
                { height: '1px' },
                { height: '136px', duration: 0.5, delay: 0.4 }
            );
        }
    })

    const { contextSafe } = useGSAP({ scope: toasterRef });
	const collapse = contextSafe((completionCallback : () => void) => {
		if (toasterRef.current) {
            //Collapse toast animation
            gsap.to(toasterRef.current, {
                height: '1px',
                duration: 0.5,
                onComplete: () => {
                    gsap.to(toasterRef.current, {
                        width: '0px',
                        duration: 0.5,
                        onComplete: completionCallback
                    });
                }
            });
        }
	});
	return (
		<div ref={toasterRef} className="flex flex-col w-[432px] h-[136px] bg-[#1A1B1C] text-[#FCFCFC] overflow-hidden">
            <div className='flex flex-col'>
                <strong className='pt-4 pl-4 font-roobert-trial font-semibold text-base'>
                    You are about to leave analysis. 
                </strong>
                <strong className='pl-4 pb-8 font-roobert-trial font-semibold text-base'>
                    Are you sure?
                </strong>
            </div>
            <hr className='border-[#FCFCFC]'></hr>
            <div className='flex justify-end gap-2 mr-2 font-roobert-trial font-semibold text-base'>
                <button className='py-2 px-4 text-opacity-80 text-[#FCFCFC]'
                    onClick={() => {toast.remove(id); onConfirm()}}>
                    Leave
                </button>
                <button className='py-2 px-4 text-[#FCFCFC]' 
                    onClick={() => {collapse(()=>toast.remove(id));}}>
                    Close
                </button>
            </div>
		</div>
	);
};

export default BackToHomeToaster;
