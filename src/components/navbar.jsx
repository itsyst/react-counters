import React from 'react';

// Stateless functional component
const Navbar = (props) => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<span className="navbar-brand mb-0 h1">
					Counters
					<span className="badge rounded-pill bg-secondary  mx-3 ">
						{props.totalCounters}
					</span>
				</span>
			</div>
		</nav>
	);
};

export default Navbar;
