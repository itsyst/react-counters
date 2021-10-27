import React, { Component } from 'react';

export default class Counter extends Component {
	state = {
		value: this.props.value,
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
		this.setState({ value: this.state.value + 1 });
	};

	render() {
	    console.log(this.props); //using the children props
		return (
			<>
			    {/* <span>{ this.props.children}</span> */}
				{/* <h4>{ this.props.id}</h4> */} 
				<span
					/*style ={{fontSize:30}}*/ className={this.getBadgeClasses()}
				>
					{this.formatCount()}
				</span>
				<button
					onClick={() => this.handleIncrement(this.state.value)}
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
		classes += this.state.value === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const { value: count } = this.state;
		return count === 0 ? 'Zero' : count;
	}
}
