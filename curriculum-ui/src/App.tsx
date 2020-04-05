import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' 
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from './Store';
import { Provider } from 'react-redux';
import { createSkillComponent } from './components/createSkillComponent/createSkillComponent';
import  viewAllSkillsComponent  from './components/viewAllSkillComponent/viewAllSkillsComponent';
function App() {
  return (
    <Provider store = {store}>    
    <div className="App">
      <Router> 
        <Switch>
          <Route path ='/createSkill' component = {createSkillComponent}/>
          <Route path ='/viewAllSkills' component = {viewAllSkillsComponent}/>
          
        </Switch>
          </Router>          
        </div>
    </Provider>    
  );
}

export default App;
