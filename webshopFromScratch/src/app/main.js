import React from 'react';
import {render} from 'react-dom';
import ExampleWebshop from './components/ExampleWebshop';
import 'bootstrap/dist/css/bootstrap.css';
import './main.scss';

// init shell
initShell();

function initShell() {
    console.log("Starting up the example webshop...");
    const shell = document.createElement('main');
    shell.className = 'app-shell';
    document.body.appendChild(shell);
    render(<ExampleWebshop/>, shell);
}
