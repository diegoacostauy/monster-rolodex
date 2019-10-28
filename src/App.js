import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: 'Hello World'
    };
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      title: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{ this.state.title }</h1>
          <br />
          <div>
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
