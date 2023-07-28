/** @format */

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateLink from "../pages/CreateLink/CreateLink";
import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: '/',
				element: <CreateLink />
			},
			{
				path: '/profile',
				element: <Profile />
			}
		]
	},
]);

export default router;
