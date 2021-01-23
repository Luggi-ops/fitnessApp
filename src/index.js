

/*const element = document.createElement('h1');

element.innerText = 'Welcome to world';

const container = document.getElementById('root');

container.appendChild(element);*/

import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';

const element = <h1>Welcome to World</h1>
const container = document.getElementById('root');

ReactDOM.render(<Card />, container);
