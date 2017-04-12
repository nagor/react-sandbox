import React from 'react';

class Radio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            radioChecked: 'white'
        }

        this.handleRadio = this.handleRadio.bind(this);
    }

    handleRadio(e) {
        window.document.body.style.background = e.target.value;
        this.setState({ radioChecked: e.target.value });
    }

    render() {
        return (
            <div className="radio-selector">
                <input type="radio" name="back-color" checked={this.state.radioChecked === 'blue'} value="blue" onChange={this.handleRadio} /> Blue
                <input type="radio" name="back-color" checked={this.state.radioChecked === 'green'} value="green" onChange={this.handleRadio}/> Green
                <input type="radio" name="back-color" checked={this.state.radioChecked === 'white'} value="white" onChange={this.handleRadio}/> White
            </div>
        );
    }
}

export default Radio;