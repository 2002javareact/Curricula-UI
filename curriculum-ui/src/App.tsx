import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { store } from './Store';
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
