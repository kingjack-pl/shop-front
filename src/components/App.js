import React, { Fragment } from "react";

import Header from "./Header";
import Footer from "./Footer";

export default ({ children }) => {
	return (
		<Fragment>
			<Header />
			{children}
			<Footer />
		</Fragment>
	);
};
