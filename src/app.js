import React, { Component, Fragment } from 'react';
import './App.css';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <Fragment>
      <header className='title'>
        <h1 className='title is-2 is-centered'>Search For Your Github Repo Below!</h1>
      </header>
        <Search/>
      </Fragment>
    
    );
  }
}

export default App;
