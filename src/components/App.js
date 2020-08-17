import React from 'react';

// Importing logic
import calculate from '../logic/calculate';

// Importing components
import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { total: null, next: null, operation: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const newState = calculate(this.state, buttonName);
    this.setState(newState);
  }

  render() {
    const { total, next, operation } = this.state;
    let value;
    if (total && operation) {
      value = `${total} ${operation}`;
    }
    if (next) {
      value = value ? `${value} ${next}` : next;
    }

    return (
      <div id="calculator-container" className="calculator-container">
        <Display value={value || undefined} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
