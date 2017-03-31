import React, { Component } from 'react';

class ComponentUsingClass extends Component {
    constructor() {
        super();
        this.state = {
            value: 10,
            counter: 1
        };
    }
    handleClick() {
        this.setState(Object.assign(
            this.state,
            { counter: this.state.counter + 1 }
        ));
    }
    render() {
        return (
            <div>
                <div>Has state</div>
                <div>{`$${this.state.value * this.state.counter} in the ${this.props.pouch}`}</div>
                <button onClick={() => this.handleClick()}>Click Me!</button>
            </div>
        );
    }
}

export default ComponentUsingClass;