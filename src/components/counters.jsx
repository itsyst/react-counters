import React, { Component } from 'react';
import Counter from '../components/counter';

export default class Counters extends Component {
	state = {
		counters: [
			{ id: 0, value: 0 },
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 }
		]
	};

	render() {
		return (
			<>
				{this.state.counters.map((counter) => (
					<Counter key={counter.id} />
				))}
			</>
		);
	}
}
