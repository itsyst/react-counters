import React, { Component } from "react"

export default class Counter extends Component {
    state = {
        count: 0,
    };
    styles = {
        fontSize: 50,
        fontWeight: "bold",
    };
	render() {
		return (
			<>
				<span style ={{fontSize:30}} className="badge bg-dark m-2">
					{this.formatCount()}
				</span>
				<button className="btn btn-secondary btn-sm">Increment</button>
			</>
		)
	}

	formatCount() {
		const { count } = this.state
		return count === 0 ? "Zero" : count
	}
}
