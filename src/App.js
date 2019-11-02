import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/CardList/CardList.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [
        {
          id: '1',
          name: 'Frankenstein'
        },
        {
          id: '2',
          name: 'Dracula'
        },
        {
          id: '3',
          name: 'Zombie'
        }
      ]
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({
        monsters: data
      }));
  }


  render() {
    const { monsters } = this.state;
    return (
      <div className="App">
        <h1>Monster Rolodex App</h1>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
