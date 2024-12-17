interface NavbarProps {
	totalCounters: number;
}

const Navbar = ({ totalCounters }: NavbarProps) => {
	console.log('Navbar - Rendered');

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<span className="navbar-brand mb-0 h1">
					Counters
					<span className="badge rounded-pill bg-secondary  mx-3 ">{totalCounters}</span>
				</span>
			</div>
		</nav>
	);
};

export default Navbar;
