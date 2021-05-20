import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-light font-weight-bold">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					VChat
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">
								About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
