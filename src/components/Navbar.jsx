import React from "react";
import {NavLink} from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid"> 
				<NavLink className="navbar-brand" to={`/`}>
					<img src="./assets/logo/Pokemon.jpg" width="100" alt="logo nav"/>
				</NavLink>
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
					<ul className="navbar-nav mx-auto">
						<li className="nav-item mx-5">
							<NavLink className="nav-link" to={`/pokemons/`}>Pokemons</NavLink>
						</li>
						<li className="nav-item mx-5">
							<NavLink className="nav-link" to={`/Items/`}>Items</NavLink>
						</li>
						<li className="nav-item mx-5">
							<NavLink className="nav-link" to={`/contacto/`}>Contacto</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
