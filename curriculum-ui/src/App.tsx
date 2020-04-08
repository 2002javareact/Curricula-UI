import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from './Store';
import { Provider } from 'react-redux';
<<<<<<< HEAD
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
=======
import CreateCurriculumFormComponent from './components/create-curriculum-form-component/CreateCurriculumFormContainer';
import  ViewAllSkillsComponent  from './components/view-all-skill-component/ViewAllSkillsComponent';
import { CreateSkillComponent } from './components/create-skill-component/CreateSkillComponent';
import NavBarComponent from "./components/navbar-component/NavbarComponent";
import { MultiRouteCategoryComponent } from "./components/category-components/multi-route-category-component/MultiRouteCategoryComponent";
function App() {
  return (
    <Provider store={store}>
      {/* Remove once App.test.tsx is fixed*/}
      <div className="App">
        <Router>
          <NavBarComponent/>
          <Switch> 
            <Route path="/curriculum/create" component={CreateCurriculumFormComponent}/>
            <Route path="/viewAllSkills" component={ViewAllSkillsComponent}/>
            <Route path="/createSkills" component={CreateSkillComponent}/>
            <Route path="/category" component={MultiRouteCategoryComponent} />
          </Switch>
        </Router>
      </div>
    </Provider>
>>>>>>> dev
  );
}

export default App;
