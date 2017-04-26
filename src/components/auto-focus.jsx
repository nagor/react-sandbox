import React from 'react';

class Input extends React.Component {
    focus() {
        this.el.focus();
    }

    // set reference to html input element
    render() {
        return (
            <input
                ref={el => { this.el = el; }}
            />
        );
    }
}

class SignInModal extends React.Component {
  componentDidMount() {
    this.InputComponent.focus();
  }
  
  render() {
    return (
      <div>
        <label>User name: </label>
        <Input
          ref={comp => { this.InputComponent = comp; }}
        />
      </div>
    )
  }
}

export default SignInModal;