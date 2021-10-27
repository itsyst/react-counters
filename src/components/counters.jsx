import React, { Component } from 'react';
import Counter from '../components/counter';

export default class Counters extends Component {
	state = {
		counters: [
			{ id: 1, value: 4, status: true },
			{ id: 2, value: 7, status: true },
			{ id: 3, value: 0, status: true },
			{ id: 4, value: 0, status: true }
		],
		tags: [
			{ id: 1, name: 'tag1' },
			{ id: 2, name: 'tag2' },
			{ id: 3, name: 'tag3' }
		]
	};

	handleReset = () => {
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ counters: counters });
	};

	handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		 console.log(this.state.counters[index]);
 		this.setState({ counters: counters });
	};

	handleDelete = (counter) => {
		//console.log('Event Handler Called!', counter);
		const counters = this.state.counters.filter((c) => c.id !== counter);
		this.setState({ counters: counters });
		// console.log(counters);
	};

	render() {
		return (
			<>
				<button
					onClick={this.handleReset}
					className="btn btn-primary btn-sm"
				>
					Reset
				</button>
				{this.state.counters.map((counter) => (
					<Counter
						key={counter.id}
						// value={counter.value}
						// selected={counter.status}
						// id={counter.id}
						counter={counter}
						onIncrement={this.handleIncrement}
						onDelete={this.handleDelete}
					>
						<h4>Counter #{counter.id}</h4>
					</Counter>
				))}
			</>
		);
	}
}
