/** @format */

import { createContext, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [links, setLinks] = useState(0);
  const linksItems = []
  const [linksItemsValue, setLinksItemsValue] = useState(linksItems)

	console.log(linksItemsValue);
	const authInfo = {
		links,
		setLinks,
		linksItems,
		linksItemsValue,
		setLinksItemsValue,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
