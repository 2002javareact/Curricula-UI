import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { store } from './Store';
import { Provider } from 'react-redux';
import CreateCurriculumFormComponent from './components/curriculum-components/create-curriculum-form-component/CreateCurriculumFormContainer';
import { ViewAllSkillsComponent } from './components/view-all-skill-component/ViewAllSkillsComponent';
import { CreateSkillComponent } from './components/create-skill-component/CreateSkillComponent';
import NavBarComponent from "./components/navbar-component/NavbarComponent";
// import { MultiRouteCategoryComponent } from "./components/multi-route-category-component/MultiRouteCategoryComponent";
import ViewAndUpdateCurriculumComponent from './components/curriculum-components/view-and-update-curriculum-component/ViewAndUpdateCurriculumContainer';
// import  viewAllVisualizationComponent  from './components/visualization-components/view-all-visualization-component/ViewAllVisualizationContainer';


function App() {
  return (
    <Provider store={store}>
      {/* Remove once App.test.tsx is fixed*/}
      <div className="App">
        <Router>
          <NavBarComponent/>
          <Switch> 
            <Route path="/curriculum/create" component={CreateCurriculumFormComponent}/>
            <Route path="/curriculum/view/:id" component={ViewAndUpdateCurriculumComponent}/>
            <Route path="/viewAllSkills" component={ViewAllSkillsComponent}/>
            <Route path="/createSkills" component={CreateSkillComponent}/>
            {/* <Route path="/category" component={MultiRouteCategoryComponent} />
            <Route path="/" component={viewAllVisualizationComponent}/> */}
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
