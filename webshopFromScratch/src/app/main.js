import React from 'react';
import {render} from 'react-dom';
import ExampleWebshop from './components/ExampleWebshop';
import 'bootstrap/dist/css/bootstrap.css';
import './main.scss';

const main = document.createElement('main');
main.className = 'main';
document.body.appendChild(main);
render(<ExampleWebshop/>, main);

