/** @format */

import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Links = () => {
	const { links, setLinks, linksItems, linksItemsValue, setLinksItemsValue } =
		useContext(AuthContext);

	console.log(linksItemsValue)
	return (
		<div
			id='linksContainer'
			className='w-full px-8  py-2 overflow-y-auto'
		>
			<div className='px-10'>
				<div className='w-[90px] h-[90px] bg-[#EEEEEE] rounded-full'></div>
				<div className='h-[10px] bg-[#EEEEEE] mt-3 mb-2 rounded-md'></div>
				<div className='h-[5px] bg-[#EEEEEE] mt-2 mb-1 rounded-md w-[50%] mx-auto'></div>
			</div>

			{linksItemsValue.length === 0 ? (
				<div className='mt-10  w-full flex flex-col gap-4'>
					<div className='bg-[#EEEEEE] text-white w-full py-[6px] px-3 rounded-md flex items-center justify-between cursor-pointer h-[36px]'></div>
					<div className='bg-[#EEEEEE] text-white w-full py-[6px] px-3 rounded-md flex items-center justify-between cursor-pointer h-[36px]'></div>
					<div className='bg-[#EEEEEE] text-white w-full py-[6px] px-3 rounded-md flex items-center justify-between cursor-pointer h-[36px]'></div>
					<div className='bg-[#EEEEEE] text-white w-full py-[6px] px-3 rounded-md flex items-center justify-between cursor-pointer h-[36px]'></div>
					<div className='bg-[#EEEEEE] text-white w-full py-[6px] px-3 rounded-md flex items-center justify-between cursor-pointer h-[36px]'></div>
				</div>
			) : (
				<div className='mt-10  w-full flex flex-col gap-4'>
						{linksItemsValue?.map(link => {
							const { name, id } = link;
						return (
							<div
								key={link.id}
								className={`${
									(name === "github" && "bg-[#191919]") ||
									(name === "youtube" && "bg-[#EF383A]") ||
									(name === "linkedin" && "bg-[#2D69FF]") ||
									(name === "facebook" && "bg-[#4064AC]") ||
									(name === "instagram" && "bg-[#DE2C7F]") ||
									(name === "twitter" && "bg-[#1C9CEA]")
								}  
								
								
								text-white w-full py-[6px] px-3 rounded-md flex items-center justify-between cursor-pointer`}
							>
								<div className='flex items-center gap-2'>
									{(name === "github" && <BsGithub />) ||
										(name === "youtube" && <BsYoutube />) ||
										(name === "linkedin" && (
											<BsLinkedin />
										)) ||
										(name === "facebook" && (
											<BsFacebook />
										)) ||
										(name === "instagram" && (
											<BsInstagram />
										)) ||
										(name === "twitter" && <BsTwitter />)}
									<span>
										<small className='uppercase'>
											{name}
										</small>
									</span>
								</div>

								<div>
									<BiRightArrowAlt />
								</div>
							</div>
						);
					})}

					{/* <div className='bg-[#EF383A] text-white w-full py-[6px] px-3 rounded-md flex items-center justify-between cursor-pointer'>
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
					</div> */}
				</div>
			)}
		</div>
	);
};

export default Links;
