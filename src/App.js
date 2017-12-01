import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Feed from './components/Feed';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar/>
        <Feed/>
      </div>
    );
  }
}

export default App;
