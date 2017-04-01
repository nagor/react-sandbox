import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        // 1. Correct way to update state: function with prevState/props to avoid async collisions on update
        // 2. React merges state. So no need to do it manually:
        // Object.assign(
        //      {},
        //      prevState,
        //      { time: new Date().toLocaleTimeString() }
        // )
        // This will be done by React (shallow copy)
        this.setState((prevState, props) =>
            ({ time: new Date().toLocaleTimeString() })
        );
    }

    render() {
        return (
            <div>
                <h1> This is current time: </h1>
                <h2>{this.state.time}</h2>
            </div>
        );
    }
}

export default Clock;