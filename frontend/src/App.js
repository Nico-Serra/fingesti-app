import React from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Gestione Spese</h1>
            </header>
            <ExpenseList />
        </div>
    );
}

export default App;
