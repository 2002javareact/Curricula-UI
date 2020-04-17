//This component serves as a multi route for anything category related. As specified in App.tsx, the base path for this component is '/category'. Any paths in this component extend the base path by using 'this.props.match.path'.
import React from "react";
import { Switch, Route } from "react-router";
import ViewAllCategoriesComponent from "../view-all-categories-component/ViewAllCategoriesContainer";
import CreateCategoryComponent from "../create-category-component/CreateCategoryContainer";
import UpdateCategoryComponent from "../update-category-component/UpdateCategoryContainer";

export class MultiRouteCategoryComponent extends React.Component<any, any> {
  render() {
    return (
      <>
        <Switch>
          {/* Create A Category */}
          <Route
            exact
            path={`${this.props.match.path}/create`}
            component={CreateCategoryComponent}
          />
          {/* Update A Category */}
          <Route
            exact
            path={`${this.props.match.path}/:id`}
            component={UpdateCategoryComponent}
          />
          {/* View All Categories */}
          <Route path={`/`} component={ViewAllCategoriesComponent} />
        </Switch>
      </>
    );
  }
}
