import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store = {store}>    
    <div className="App">
      <Router> 
        <Switch> 
        </Switch>
          </Router>          
        </div>
    </Provider>    
  );
}

export default App;
