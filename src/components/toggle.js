import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // 1. This binding is necessary to make `this` work in the callback. 
        // Should be performed in constructor
        // this.handleClick = this.handleClick.bind(this);

        // 2. Or you may go with experimental property initializer syntax
        // This syntax ensures `this` is bound within handleClick.
        // Warning: this is *experimental* syntax.
        // handleClick = () => {
        //    console.log('this is:', this);
        // }

        // 3. Or you may use arrow function when calling callback in the template.
        // Like used in this particular case
        // However, React's team recommends to use one 1 or 2:

        // "The problem with this syntax is that a different callback is created each time
        // the LoggingButton renders.In most cases, this is fine. However, if this callback
        // is passed as a prop to lower components, those components might do an extra re- rendering.
        // We generally recommend binding in the constructor or using the property initializer syntax,
        // to avoid this sort of performance problem."
    }

    handleClick(e) { // e is SynteticEvent. See React's docs
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={(e) => this.handleClick(e)}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;