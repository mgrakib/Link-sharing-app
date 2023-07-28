/** @format */

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { BsLink45Deg, BsUiChecksGrid } from "react-icons/bs";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
const CreateLink = () => {
	const { links, setLinks, linksItems, linksItemsValue, setLinksItemsValue } =
		useContext(AuthContext);


    console.log(linksItemsValue);

	const addLinkField = () => {
		setLinks(previousValue => previousValue + 1);
        setLinksItemsValue([
			...linksItemsValue,
			{ name: "github", id: links + 1 },
		]);
	};

    const changeLinkLabel = (event, id) => {
        const value = event?.target?.value;
        setLinksItemsValue(preview => preview.map(link => {
            if (link.id === id) {
				return { ...link, name: value };
			}
			return link;
       }));
        
	};

	const linksElement = [];
	for (let i = 0; i < links; i++) {
		linksElement.push(
			<div
				key={i}
				className='bg-[#FAFAFA] p-4 rounded'
			>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-1 text-gray-600'>
						<HiOutlineMenuAlt4 />
						<p className=''>
							Link{" "}
							<span className='text-gray-700 font-bold'>
								#{i + 1}
							</span>
						</p>
					</div>

					<button className='text-gray-400 font-semibold'>
						Remove
					</button>
				</div>

				<div className='mt-3 '>
					<label
						htmlFor=''
						className='text-[14px] text-gray-500'
					>
						Platform
					</label>
					<div>
						<select
							name=''
							onChange={evetn => changeLinkLabel(evetn, i + 1)}
							id={i + 1}
							className='py-2 px-10 w-full border border-gray-500 relative rounded outline-none text-gray-600'
						>
							<option value='github'>GirHub</option>
							<option value='youtube'>Youtube</option>
							<option value='linkedin'>LinkedIn</option>
							<option value='facebook'>Facebook</option>
							<option value='instagram'>Instagram</option>
							<option value='twitter'>Twitter</option>
						</select>
					</div>

					<div className='mt-2'>
						<label
							htmlFor=''
							className='text-[14px] text-gray-500'
						>
							Link
						</label>

						<div className='px-10 border border-gray-500 relative rounded '>
							<input
								type='text'
								name=''
								id=''
								className='py-2  w-full outline-none'
							/>
							<span className='absolute left-0 w-[40px] h-[100%] text-[18px] flex items-center justify-center top-0'>
								<BsLink45Deg />
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className='mt-10'>
			<div>
				<h1 className='text-4xl font-bold'>Customize Your Links</h1>
				<p>
					<small className='text-gray-500'>
						Add/edit/remove links below and then share all your
						profiles with the word!
					</small>
				</p>
			</div>

			{/* add link  */}
			<div className='my-10'>
				<button
					onClick={addLinkField}
					className='py-2 w-full border border-[#7e22ce84] text-purple-700 rounded-md'
				>
					+ Add new link
				</button>
			</div>

			{/* links  */}
			<div className='flex flex-col gap-5'>{linksElement}</div>

			<div className='mt-3 py-3 border-t text-end'>
				<button className='py-1 px-3 bg-purple-700 text-white rounded '>
					Save
				</button>
			</div>
		</div>
	);
};

export default CreateLink;
