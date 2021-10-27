import React, { Component } from 'react';
import Counter from '../components/counter';

export default class Counters extends Component {
	state = {
		counters: [
			{ id: 1, value: 4, status: true },
			{ id: 2, value: 7, status: true },
			{ id: 3, value: 0, status: true },
			{ id: 4, value: 0, status: true }
		]
	};

	handleDelete = (counter) => {
		//console.log('Event Handler Called!', counter);
		const counters = this.state.counters.filter(c => c.id !== counter)
		this.setState({counters: counters})
		// console.log(counters);
	};

	render() {
		return (
			<>
				{this.state.counters.map((counter) => (
					<Counter
						key={counter.id}
						// value={counter.value}
						// selected={counter.status}
						// id={counter.id}
						counter = {counter}
						onDelete={this.handleDelete}
					>
						<h4>Counter #{counter.id}</h4>
					</Counter>
				))}
			</>
		);
	}
}
