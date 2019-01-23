import React from "react";

import Logo from "./Logo";
import Menu from "./Menu";

export default () => {
	return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <Logo />
                    <Menu />
                </div>
            </nav>
        </header>
	);
};
