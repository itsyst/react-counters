import React, { Component } from 'react';

export default class Navbar extends Component {
	render() {
		console.log(this.props);
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<div className="container">
					<span className="navbar-brand mb-0 h1">
						Counters
						<span className="badge rounded-pill bg-secondary  mx-3 ">
							{this.props.totalCounters}
						</span>
					</span>
				</div>
			</nav>
		);
	}
}
