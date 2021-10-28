import React, { Component } from 'react';
import Counter from '../components/counter';

export default class Counters extends Component {
	render() {
		console.log('Counters - Rendered');

		const { counters, tags, onDelete, onIncrement, onDecrement } = this.props;
		return (
			<>
				<button
					onClick={this.props.onReset}
					className="btn btn-primary btn-sm mb-3"
				>
					Reset
				</button>
				{counters.map((counter) => (
					<Counter
						key={counter.id}
						// value={counter.value}
						// selected={counter.status}
						// id={counter.id}
						counter={counter}
						tags={tags}
						onDelete={onDelete}
						onIncrement={onIncrement}
						onDecrement={onDecrement}
					>
						<h4>Counter #{counter.id}</h4>
					</Counter>
				))}
			</>
		);
	}
}
