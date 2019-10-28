import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

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
        {
          monsters.map(monster => (
            <h3 key={monster.id}>{monster.name}</h3>
          ))
        }
      </div>
    );
  }
}

export default App;
