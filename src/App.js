import React, { Component } from 'react';
import logo from './logo.svg';
import ComponentUsingClass from './components/component-using-class';
import { Pane } from './components/component-using-function';
import Clock from './components/clock';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <div className="datagrid" >
            <table>
              <tbody>
                <tr>
                  <th>Component</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td><Pane value="25" pouch="bag" /></td>
                  <td>Sample Using Functional Component - Stateless Component</td>
                </tr>
                <tr>
                  <td><ComponentUsingClass pouch="purse" /></td>
                  <td>Sample Using Class - Stateful Component</td>
                </tr>
                <tr>
                  <td>
                    <Clock />
                    <Clock />
                    <Clock />
                  </td>
                  <td>Sample Clock component with state and mount/unmount hooks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
