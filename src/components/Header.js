import React from "react";

import Logo from "./Logo";
import Menu from "./Menu";

export default () => {
	return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <Logo />
                <Menu />
            </nav>
        </header>
	);
};
