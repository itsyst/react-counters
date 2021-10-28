import React, { Component } from 'react';

export default class Counter extends Component {
	// state = {
	// 	value: this.props.counter.value,
	// 	tags: [
	// 		{ id: 1, name: 'tag1' },
	// 		{ id: 2, name: 'tag2' },
	// 		{ id: 3, name: 'tag3' }
	// 	]
	// };

	// styles = {
	//     fontSize: 50,
	//     fontWeight: "bold",
	// };

	// constructor() {
	// 	super();
	//     this.handleIncrement = this.handleIncrement.bind(this);
	// }

	renderTags() {
		if (this.props.tags.length === 0) return <h1>There are no tags!</h1>;
		return this.props.tags.map((tag) => <li key={tag.id}>{tag.name}</li>);
	}

	// handleIncrement = (product) => {
	// 	//console.log(product);
	// 	this.setState({ value: this.state.value + 1 });
	// };

	componentDidUpdate(prevProps, prevState) {
		console.log('prevProps', prevProps);
		console.log('prevState', prevState);
		if (prevProps.counter.value !== this.props.counter.value) {
			//Ajax Cal from the server
		}
	}

	componentWillUnmount() {
		// ex remove the timer or listener from the DOM
		console.log('Counter - Unmount');
	}

	render() {
		console.log('Counter - Rendered');

		//console.log(this.props.counter); //using the children props
		return (
			<div className="row">
				<div className="col-sm-2">
					{/* <span>{ this.props.children}</span> */}
					{/* <h4>{ this.props.id}</h4> */}
					<span
						/*style ={{fontSize:30}}*/ className={this.getBadgeClasses()}
					>
						{this.formatCount()}
					</span>
				</div>
				<div className="col">
					<button
						onClick={() =>
							this.props.onIncrement(this.props.counter)
						}
						className="btn btn-secondary btn-sm"
					>
						+
					</button>
					<button
						onClick={() =>
							this.props.onDecrement(this.props.counter)
						}
						className="btn btn-secondary btn-sm mx-2"
						disabled={
							this.props.counter.value === 0 ? 'disabled' : ''
						}
					>
						-
					</button>
					<button
						onClick={() =>
							this.props.onDelete(this.props.counter.id)
						}
						className="btn btn-danger btn-sm"
					>
						delete
					</button>
					<p>
						{this.props.tags.length === 0 && 'There are no tags!'}
						{/* {this.state.tags.length === 0 && this.renderTags()'} */}
						{/* {this.renderTags()}*/}
					</p>
				</div>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = 'badge bg-pill bg-';
		classes += this.props.counter.value === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const { value: count } = this.props.counter;
		return count === 0 ? 'Zero' : count;
	}
}
