import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar";
import mobileImg from './assets/mobile.png'
import { Outlet } from "react-router-dom";
import Links from "./components/Links/Links";


function App() {
 
  return (
		<>
			<NavBar />

			<Container>
				<div className='grid grid-cols-2 gap-5'>
					{/* show  */}
					<div className='grid-cols-1  flex items-center justify-center h-[calc(100vh-80px)] bg-white'>
						<div
							style={{ backgroundImage: `url(${mobileImg})` }}
							className='h-[80vh]  w-[40%] bg-cover bg-no-repeat  py-12 flex flex-col justify-start items-center '
						>
							<Links />
						</div>
					</div>

					{/* outlate  */}
					<div className='grid-cols-1 bg-white px-3'>
						<Outlet />
					</div>
				</div>
			</Container>
		</>
  );
}

export default App
