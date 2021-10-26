import React, { Component } from 'react';
import Counter from '../components/counter';

export default class Counters extends Component {
	state = {
		counters: [
			{ id: 0, value: 4, status: true },
			{ id: 1, value: 7, status: true },
			{ id: 2, value: 0, status: true },
			{ id: 3, value: 0, status: true }
		]
	};

	render() {
		return (
			<>
				{this.state.counters.map((counter) => (
					<Counter
						key={counter.id}
						value={counter.value}
						selected={counter.status}
					/>
				))}
			</>
		);
	}
}
