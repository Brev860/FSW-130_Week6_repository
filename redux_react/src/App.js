import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import InputForm from './components/InputForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InputForm/>
      <Switch>
        <Route/>
      </Switch>
      </header>
    </div>
  );
}

export default App;
