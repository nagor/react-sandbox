import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', text: '', flavor: 'lime', isGoing: true, numberOfGuests: 1 };

        this.handleChange = this.handleChange.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value.toUpperCase() });
    }

    handleTextAreaChange(event) {
        this.setState({ text: event.target.value });
    }

    handleSelectChange(event) {
        this.setState({ flavor: event.target.value });
    }

    handleSubmit(event) {
        alert(`A name was submitted: ${this.state.value}
        along with text: ${this.state.text}
        and flavor: ${this.state.flavor}
        and guests: ${this.state.isGoing} ${this.state.numberOfGuests}
        `);
        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value; // checkbox still uses checked
        const name = target.name;

        this.setState({
            [name]: value // ECMAScript 2015 Computed Property Name
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Text:
                    <textarea value={this.state.text} onChange={this.handleTextAreaChange} />
                </label>
                <br />
                <label>
                    Pick your favorite La Croix flavor:
                    <select value={this.state.flavor} onChange={this.handleSelectChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <br />
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;