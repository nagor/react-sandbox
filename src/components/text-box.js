import React from 'react';

class TextBoxWithCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textLength: 0
        };

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState(
            { textLength: e.target.value.length }
        );
    }
    render() {
        return (
            <div className="text-box-countered">
                <input type="text" onInput={this.handleInput} />
                <div>{this.state.textLength}</div>
            </div>
        );
    }
}

export default TextBoxWithCounter;
