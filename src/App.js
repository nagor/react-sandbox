import React, { Component } from 'react';
import logo from './logo.svg';
import ComponentUsingClass from './components/component-using-class';
import { Pane } from './components/component-using-function';
import Clock from './components/clock';
import Toggle from './components/toggle';
import SomeAliasForLoginControl from './components/login-control';
import { Mailbox } from './components/mailbox';
import { Greeting } from './components/greeting';
import { WarningBanner } from './components/warning-banner';
import { NumberList } from './components/numbers-list';
import { NumberList as NumberListItems } from './components/numbers-list-items';
import NameForm from './components/name-form';
import Calculator from './components/temperature-calculator';
import SignUpDialog from './components/composition-dialog';
import { PaneLeftRight } from './components/composition-custom';
import { FilterableProductTableWrapper } from './components/products-table';
import TextBoxWithCounter from './components/text-box';
import Radio from './components/radio';
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
                <tr>
                  <td>
                    <Toggle />
                  </td>
                  <td>Sample Toggle component with events</td>
                </tr>
                <tr>
                  <td>
                    <SomeAliasForLoginControl />
                  </td>
                  <td>Sample Login Control</td>
                </tr>
                <tr>
                  <td>
                    <Mailbox unreadMessages={['some', 'unread', 'messages', 'array']}/>
                  </td>
                  <td>Sample Conditional Rendering Control: Inline If with Logical && Operator</td>
                </tr>
                <tr>
                  <td>
                    <Greeting isLoggedIn={true} />
                  </td>
                  <td>Sample Control with default values for omitted parameters</td>
                </tr>
                <tr>
                  <td>
                    <WarningBanner />
                  </td>
                  <td>WarningBanner being passed no message. It is hidden</td>
                </tr>
                <tr>
                  <td>
                    <WarningBanner warn={'Be careful!'} makeYellow={false}/>
                  </td>
                  <td>WarningBanner being passed a message. It is displayed</td>
                </tr>
                <tr>
                  <td>
                    <NumberList numbers={[5, 3, 4, 6, 1, 7]} />
                  </td>
                  <td>Using keys on repeated items</td>
                </tr>
                <tr>
                  <td>
                    <NumberListItems numbers={[5, 3, 4, 6, 1, 7]} />
                  </td>
                  <td>Using keys on repeated items on proper place</td>
                </tr>
                <tr>
                  <td>
                    <NameForm />
                  </td>
                  <td>Using simple Form to make input uppercased</td>
                </tr>
                <tr>
                  <td>
                    <Calculator />
                  </td>
                  <td>Example of shared state between two child components in parent. Used Lifting State Up approach</td>
                </tr>
                <tr>
                  <td>
                    <SignUpDialog />
                  </td>
                  <td>Example of using composition with nested components</td>
                </tr>
                <tr>
                  <td>
                    <PaneLeftRight />
                  </td>
                  <td>Example of using composition with not standart props.children but rather custom props.left and props.right</td>
                </tr>
                <tr>
                  <td>
                    <FilterableProductTableWrapper />
                  </td>
                  <td>Full Example of 3 components: table(parent), search, list (children), interactivity and shared state</td>
                </tr>
                <tr>
                  <td>
                    <TextBoxWithCounter />
                  </td>
                  <td>TextBoxWithCounter example with onInput event handling</td>
                </tr>
                <tr>
                  <td>
                    <Radio />
                  </td>
                  <td>Radio control example</td>
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
