import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { store } from './Store';
import { Provider } from 'react-redux';
import CreateCurriculumFormComponent from './components/create-curriculum-form-component/CreateCurriculumFormContainer';
import ViewCurriculumListComponent from './components/view-curriculum-list-component/ViewCurriculumListContainer';
function App() {
  return (
    <Provider store = {store}>    
       {/* Remove once App.test.tsx is fixed*/}
      <div className="App">
        <Router> 
          {/* Navbar */}
          <Switch> 
            <Route exact path="/curriculum/create" component={CreateCurriculumFormComponent}/>
            <Route path="/curriculum" component={ViewCurriculumListComponent} />
          </Switch>
        </Router>          
      </div>
    </Provider>    
  );
}

export default App;
