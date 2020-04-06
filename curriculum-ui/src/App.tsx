import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from './Store';
import { Provider } from 'react-redux';
import { CreateSkillComponent } from './components/create-skill-component/CreateSkillComponent';
import  ViewAllSkillsComponent  from './components/view-all-skill-component/ViewAllSkillsComponent';
import  CreateCurriculumFormComponent  from './components/create-curriculum-form-component/CreateCurriculumFormContainer';


function App() {
  return (
    <Provider store = {store}>    
    <div className="App">
      <Router> 
        <Switch>
          <Route path ='/CreateSkill' component = {CreateSkillComponent}/>
          <Route path ='/ViewAllSkills' component = {ViewAllSkillsComponent}/>    
          <Route path="/curriculum/create" component={CreateCurriculumFormComponent}/>       
        </Switch>
          </Router>          
        </div>
    </Provider>    
  );
}

export default App;
