
import userImage from '../../assets/user.png'
import { BsImage } from "react-icons/bs";
const Profile = () => {
    return (
		<div className='mt-10'>
			<div>
				<h1 className='text-4xl font-bold'>Profile Details</h1>
				<p>
					<small className='text-gray-500'>
						Add your details to create a personal touch to your
						profile.
					</small>
				</p>
			</div>

			<div className='mt-10 h-[150px]  flex items-center justify-between'>
				<p>Profile Picture</p>

				<div className='h-full flex items-center gap-2'>
					<div className='h-full w-[150px] rounded-2xl overflow-hidden relative cursor-pointer'>
						<img
							src={userImage}
							alt=''
							className='h-full w-full object-cover'
						/>

						<div className='w-full h-full bg-[#00000058] absolute top-0 left-0 flex flex-col items-center justify-center text-gray-300'>
							<div className='text-2xl'>
								<BsImage />
							</div>

							<p>Change Image</p>
						</div>
					</div>

					<div className=''>
						<p>
							<small>
								Image must be bellow 1024x1024px. <br />
								Use PNG or JPG
							</small>
						</p>
					</div>
				</div>
			</div>

			<div className='mt-10'>
				<div className='grid grid-cols-3 mt-2'>
					<p className='col-span-1'>Full Name</p>

					<div className='col-span-2'>
						<input
							type='text'
							className='py-[6px] px-2 border border-gray-700 outline-none w-full rounded focus:border-purple-700 focus:shadow-[0px_0px_5px_#7e22ceb6]'
						/>
					</div>
				</div>
				<div className='grid grid-cols-3 mt-2'>
					<p className='col-span-1'>Email</p>

					<div className='col-span-2'>
						<input
							type='text'
							className='py-[6px] px-2 border border-gray-700 outline-none w-full rounded focus:border-purple-700 focus:shadow-[0px_0px_5px_#7e22ceb6]'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;