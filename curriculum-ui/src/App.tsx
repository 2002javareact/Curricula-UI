import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { store } from "./Store";
import { Provider } from "react-redux";
import CreateCurriculumFormComponent from "./components/create-curriculum-form-component/CreateCurriculumFormContainer";
import NavBarComponent from "./components/navbar-component/NavbarComponent";
import { MultiRouteCategoryComponent } from "./components/category-components/multi-route-category-component/MultiRouteCategoryComponent";
function App() {
  return (
    <Provider store={store}>
      {/* Remove once App.test.tsx is fixed*/}
      <div className="App">
        <Router>
          {/* Navbar */}
          <NavBarComponent />
          <Switch>
            <Route
              path="/curriculum/create"
              component={CreateCurriculumFormComponent}
            />
            {/* Category MultiRoute Component */}
            <Route path="/category" component={MultiRouteCategoryComponent} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
