/** @format */

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateLink from "../pages/CreateLink/CreateLink";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: '/',
				element: <CreateLink />
			}
		]
	},
]);

export default router;
