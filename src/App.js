import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/CardList/CardList.component';
import { SearchBox } from './components/SearchBox/SearchBox.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({
        monsters: data
      }));
  }

  handleSearch = (e) => {
    this.setState({
      searchField: e.target.value
    })
  }

  render() {
    const { monsters, searchField } = this.state;

    const monstersToRender = monsters.filter(monster => (
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      ));

    return (
      <div className="App">
        <h1>Monster Rolodex App</h1>
        <SearchBox placeholder="Search Monsters" handleSearch={this.handleSearch} searchField={searchField}/>
        <CardList monsters={monstersToRender} />
      </div>
    );
  }
}

export default App;
