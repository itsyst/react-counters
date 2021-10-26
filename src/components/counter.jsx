import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count: 0
    };
    render() {
        return (
            <>
                <span>{this.formatCount() }</span>
                <button type="button" class="btn btn-primary">Increment</button>
            </>
        );
    }

    formatCount() {
        const { count } = this.state;
        return (count !== 0)? count: <h1>Zero</h1> 
    }
}
