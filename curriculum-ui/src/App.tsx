import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from './Store';
import { Provider } from 'react-redux';

import CreateCurriculumFormComponent from './components/create-curriculum-form-component/CreateCurriculumFormContainer';
import  ViewAllSkillsComponent  from './components/view-all-skill-component/ViewAllSkillsComponent';
import { CreateSkillComponent } from './components/create-skill-component/CreateSkillComponent';
import NavBarComponent from "./components/navbar-component/NavbarComponent";
import { MultiRouteCategoryComponent } from "./components/category-components/multi-route-category-component/MultiRouteCategoryComponent";
import UpdateSkillComponent from './components/update-skill-components/UpdateSkillContainer';

function App() {
  return (
    <Provider store={store}>
      {/* Remove once App.test.tsx is fixed*/}
      <div className="App">
        <Router>
          <NavBarComponent/>
          <Switch> 
            <Route path="/curriculum/create" component={CreateCurriculumFormComponent}/>
            <Route path="/skills/viewall" component={ViewAllSkillsComponent}/>
            <Route path="/skills/create" component={CreateSkillComponent}/>
            <Route path="/skills/update" component={UpdateSkillComponent} />
            <Route path="/category" component={MultiRouteCategoryComponent} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
