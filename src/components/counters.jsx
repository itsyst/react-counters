import React, { Component } from 'react';
import Counter from '../components/counter';

export default class Counters extends Component {
	render() {
		return (
			<>
				<button
					onClick={this.props.onReset}
					className="btn btn-primary btn-sm"
				>
					Reset
				</button>
				{this.props.counters.map((counter) => (
					<Counter
						key={counter.id}
						// value={counter.value}
						// selected={counter.status}
						// id={counter.id}
						counter={counter}
						tags = {this.props.tags}
						onDelete={this.props.onDelete}
						onIncrement={this.props.onIncrement}
					>
						<h4>Counter #{counter.id}</h4>
					</Counter>
				))}
			</>
		);
	}
}
