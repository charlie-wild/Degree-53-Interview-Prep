import React, { Component } from 'react';
import './search.css'
import * as api from "./api";
import Results from './Results';

class Search extends Component {
  state = {
    search: '',
    results: [],
    searched: false,
    err: false
  };
  render() {
    return (
    <div className='app'>
      <div className='search'>
        <form onSubmit={this.handleSubmit}>        
        <input
        className='input is-primary user-input'
        type='text'
        id='search'
        placeholder='Search for a respository by name.'
        required
        value={this.state.search}
        onChange={this.handleChange}
        />
        <br/>
        <button className='button is-primary is-search'>Submit Search</button>
        </form>
        {this.state.err && <p>Oh no! Something went wrong!</p>}
        
      </div>
      {this.state.searched && <Results results={this.state.results} />}
     </div> 
    );
  }

  handleChange = e => {
    const { id, value} = e.target;
    this.setState({ [id]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ searched: true});
    this.fetchRepos();
    }


  fetchRepos = () => {
    api.getGitHubRepo(this.state.search)
    .then((results) => {
      this.setState({results, searched: true, search: ''})
      
    })
    .catch(() => {
      this.setState({ err: true})
    })
  }
}

export default Search;