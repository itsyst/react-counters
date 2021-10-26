import React, { Component } from 'react';

export default class Counter extends Component {
	state = {
		count: 0,
		tags: [
			// { id: 1, name: 'tag1' },
			// { id: 2, name: 'tag2' },
			// { id: 3, name: 'tag3' }
		]
	};
	// styles = {
	//     fontSize: 50,
	//     fontWeight: "bold",
	// };
	renderTags() {
		if (this.state.tags.length === 0) return <h1>There are no tags!</h1>;
		return this.state.tags.map((tag) => <li key={tag.id}>{tag.name}</li>);
	}
	render() {
		return (
			<>
				<span
					/*style ={{fontSize:30}}*/ className={this.getBadgeClasses()}
				>
					{this.formatCount()}
				</span>
				<button className="btn btn-secondary btn-sm">Increment</button>
				<ul>
					{this.state.tags.length === 0 && 'There are no tags!'}
					{this.renderTags()}
				</ul>
			</>
		);
	}

	getBadgeClasses() {
		let classes = 'badge m-2 rounded-pill bg-';
		classes += this.state.count === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
	}
}
