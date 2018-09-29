import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: center;`

const Title = styled.div`
    font-family: ITC Serif Gothic;
    font-size: 2rem;
    text-transform: uppercase;`
    

const Input = styled.input`
    margin: 10px;
    padding: 10px 20px;
    border: solid;
    border-radius: 5px;
    border-color: green;
    font-size: 1rem;`

const Submit = styled.button`
    margin: 10px;
    padding: 10px 20px;
    border: solid;
    border-radius: 5px;
    border-color: blue;
    font-size: 1rem;
    cursor: pointer;`

class Search extends Component {
    constructor(props) {
        super(props) 
        this.state = { term: ''}

    }

    render() {
        return (
            <Wrapper>
                    <Title>Search for a Star Wars Character</Title>
                    <Input 
                        type='number' 
                        placeholder='Enter a Number 1-10'
                        value={this.state.term}
                        onChange={(event) => this.setState({ term: event.target.value})}
                    />
                    <Submit onClick={() => this.onSubmitClick(this.state.term)}>Submit</Submit>
            </Wrapper>
        );
    }

    onSubmitClick(term) {
        this.props.handleSubmit(term)
        this.setState({ term: ''});
    }
}

export default Search;