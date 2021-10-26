import React, { Component } from 'react';

export default class Counter extends Component {
	state = {
		count: 0,
		tags: [
			{ id: 1, name: 'tag1' },
			{ id: 2, name: 'tag2' },
			{ id: 3, name: 'tag3' }
		]
	};

	// styles = {
	//     fontSize: 50,
	//     fontWeight: "bold",
	// };

	// constructor() {
	// 	super();
	//     this.handleIncrement = this.handleIncrement.bind(this);
	// }

	renderTags() {
		if (this.state.tags.length === 0) return <h1>There are no tags!</h1>;
		return this.state.tags.map((tag) => <li key={tag.id}>{tag.name}</li>);
	}

	handleIncrement = (product) => {
		console.log(product);
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<>
				<span
					/*style ={{fontSize:30}}*/ className={this.getBadgeClasses()}
				>
					{this.formatCount()}
				</span>
				<button
					onClick={() => this.handleIncrement(this.state.count)}
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>
				<p>
					{this.state.tags.length === 0 && 'There are no tags!'}
					{/* {this.state.tags.length === 0 && this.renderTags()'} */}
					{/* {this.renderTags()} */}
				</p>
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
