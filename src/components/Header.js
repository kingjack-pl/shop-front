import React from "react";

import Logo from "./Logo";
import Menu from "./Menu";
import Loader from "./Loader";

export default () => {
	return (
        <header>
            <Loader />
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <Logo />
                    <Menu />
                </div>
            </nav>
        </header>
	);
};
