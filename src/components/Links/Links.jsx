/** @format */

import { BsGithub } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
const Links = () => {
	return (
		<div id="linksContainer" className='w-full px-8  py-2 overflow-y-auto'>
			<div className='px-10'>
				<div className='w-[90px] h-[90px] bg-[#EEEEEE] rounded-full'></div>
				<div className='h-[10px] bg-[#EEEEEE] mt-3 mb-2 rounded-md'></div>
				<div className='h-[5px] bg-[#EEEEEE] mt-2 mb-1 rounded-md w-[50%] mx-auto'></div>
			</div>

			<div className='mt-10  w-full flex flex-col gap-4'>
				<div className='bg-[#191919] text-white w-full py-[6px] px-3 rounded-md flex items-center justify-between cursor-pointer'>
					<div className='flex items-center gap-2'>
						<BsGithub />{" "}
						<span>
							<small>GitHub</small>
						</span>
					</div>

					<div>
						<BiRightArrowAlt />
					</div>
				</div>

				<div className='bg-[#EF383A] text-white w-full py-[6px] px-3 rounded-md flex items-center justify-between cursor-pointer'>
					<div className='flex items-center gap-2'>
						<BsGithub />{" "}
						<span>
							<small>GitHub</small>
						</span>
					</div>

					<div>
						<BiRightArrowAlt />
					</div>
				</div>
				
				<div className='bg-[#2D69FF] text-white w-full py-[6px] px-3 rounded-md flex items-center justify-between cursor-pointer'>
					<div className='flex items-center gap-2'>
						<BsGithub />{" "}
						<span>
							<small>GitHub</small>
						</span>
					</div>

					<div>
						<BiRightArrowAlt />
					</div>
				</div>
				<div className='bg-[#EEEEEE] text-white w-full py-[6px] px-3 rounded-md flex items-center justify-between cursor-pointer h-[36px]'></div>
				<div className='bg-[#EEEEEE] text-white w-full py-[6px] px-3 rounded-md flex items-center justify-between cursor-pointer h-[36px]'></div>
			</div>
		</div>
	);
};

export default Links;
