import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './searchbar';
import ResultsPosts from './resultsposts';

import { connect } from 'react-redux';
import * as actions from '../actions';
import resultsposts from './resultsposts';

class Results extends Component {

  handleSearchBarSubmit(query) {
    this.props.fetchPostsWithQuery(query);
  }

  render() {
    return (
      <div>
        <Logo size={55}/>
        <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
        <ResultsPosts/>
      </div>
    )
  }
}

export default connect(null, actions)(Results);