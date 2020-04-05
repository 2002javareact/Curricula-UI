import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { store } from './Store';
import { Provider } from 'react-redux';
import { CreateCurriculumFormComponent } from './components/create-curriculum-form-component/CreateCurriculumFormComponent';
function App() {
  return (
    <Provider store = {store}>    
       {/* Remove once App.test.tsx is fixed*/}
      <div className="App">
        <Router> 
          {/* Navbar */}
          <Switch> 
            <Route path="/curriculum/create" component={CreateCurriculumFormComponent}/>
          </Switch>
        </Router>          
      </div>
    </Provider>    
  );
}

export default App;
