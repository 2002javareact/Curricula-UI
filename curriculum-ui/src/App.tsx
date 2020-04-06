import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from './Store';
import { Provider } from 'react-redux';
import { CreateSkillComponent } from './components/create-skill-component/CreateSkillComponent';
import  ViewAllSkillsComponent  from './components/view-all-skill-component/ViewAllSkillsComponent';


function App() {
  return (
    <Provider store = {store}>    
    <div className="App">
      <Router> 
        <Switch>
          <Route path ='/CreateSkill' component = {CreateSkillComponent}/>
          <Route path ='/ViewAllSkills' component = {ViewAllSkillsComponent}/>           
        </Switch>
          </Router>          
        </div>
    </Provider>    
  );
}

export default App;
