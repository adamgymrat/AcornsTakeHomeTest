import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { injectGlobal } from 'styled-components'

injectGlobal`
body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    background-image: url(https://hdqwalls.com/wallpapers/star-wars-bb-droid.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}`

ReactDOM.render(<App />, document.querySelector('.container'));
