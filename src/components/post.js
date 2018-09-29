import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: center;`

const Title = styled.h1`
    text align: center;`

const Stats = styled.h3`
    text align: center;
    text-transform: capitalize;`
    
const Post = (props) => {
    const name = props.data.name;
    const birthYear = props.data.birth_year;
    const eyeColor = props.data.eye_color;
    const gender = props.data.gender;
    const height = props.data.height;

    if(!name) {
        return <div></div>
    }
    return (
        <Wrapper>
            <Title>{name}</Title>
            <Stats>Birth Year: {birthYear}</Stats>
            <Stats>Eye Color: {eyeColor}</Stats>
            <Stats>Gender: {gender}</Stats>
            <Stats>Height: {height} centimeters</Stats>
        </Wrapper>
    );    
}


export default Post;

