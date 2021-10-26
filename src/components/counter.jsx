import React, { Component } from 'react';

export default class Counter extends Component {
	state = {
		count: 0
	};
	// styles = {
	//     fontSize: 50,
	//     fontWeight: "bold",
	// };
	render() {
		return (
			<>
				<span
					/*style ={{fontSize:30}}*/ className={this.getBadgeClasses()}
				>
					{this.formatCount()}
				</span>
				<button className="btn btn-secondary btn-sm">Increment</button>
			</>
		);
	}

	getBadgeClasses() {
		let classes = 'badge m-2 rounded-pill bg-';
		classes += this.state.count === 0 ? 'warning' : 'dark';
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
	}
}
