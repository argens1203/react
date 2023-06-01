import React from 'react';

import './App.css';
import { DragDeletableExample } from './components/drag-deletable/drag-deletable.example';
import logo from './logo.svg';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <span>learn</span>
                <DragDeletableExample />
            </header>
        </div>
    );
}

export default App;
