import React, { Component } from 'react';
import Search from './search';
import Post from './post';
import axios from 'axios';
import styled from 'styled-components';

const ROOT_URL = 'https://swapi.co/api/people/';

const Wrapper = styled.div`
    text-align: center;`

class App extends Component {

  constructor(props) {
    super(props)

    this.state = { person: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(term) {
    if(term > 10 || term < 1) {
      alert('Please enter a number 1-10')
    } else {
      axios
        .get(`${ROOT_URL}${term}`)
        .then(data => {
          const person = data.data
          this.setState({ person })
        })
      }
  }

  render() {
    return (
      <Wrapper>
          <Search handleSubmit={this.handleSubmit}/>
          <Post data={this.state.person}/>
      </Wrapper>
    );
  }
}

export default App;
