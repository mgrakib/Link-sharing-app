import Container from "../Container/Container";
import { BsLink, BsLink45Deg } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
		<div className='py-3'>
			<Container>
				<div className='bg-white flex items-center justify-between py-3 px-3 rounded-md'>
					<div className='flex items-center gap-2'>
						<span className='inline-block p-[2px] rounded text-white bg-purple-700'>
							<BsLink />
						</span>
						<h1 className='font-bold text-[18px]'>devlinks</h1>
					</div>

					<div className='flex items-center gap-5'>
						<Link to='/'>
							<div className='flex items-center gap-2 text-purple-700 px-3 py-1 rounded-md bg-gray-300 cursor-pointer'>
								<span>
									<BsLink45Deg />
								</span>

								<p className=''>Links</p>
							</div>
						</Link>
						<Link to={"/profile"}>
							<div className='flex items-center gap-2  px-3 py-1 rounded-md  cursor-pointer'>
								<span>
									<FaRegUserCircle />
								</span>

								<p className=''>Profile Details</p>
							</div>
						</Link>
					</div>

					<div>
						<button className='py-1 px-4 border border-purple-700 text-purple-700 rounded-md'>
							Preview
						</button>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default NavBar;