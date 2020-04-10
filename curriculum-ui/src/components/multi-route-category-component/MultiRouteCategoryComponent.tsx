import React from "react";
import { Switch, Route } from "react-router";
import  ViewAllCategoriesComponent  from "../view-all-categories-component/ViewAllCategoriesContainer";
import { CreateCategoryComponent } from "../create-category-component/CreateCategoryComponent";
import { UpdateCategoryComponent } from "../update-category-component/UpdateCategoryComponent";

export class MultiRouteCategoryComponent extends React.Component<any, any> {
  render() {
    return (
      <>
        <Switch>
          {/* View All Categories */}
          {/* if no extra props are being passed in, can switch from using the render design pattern -dev */}
          {console.log(this.props.match)
          }
          <Route
            path={`${this.props.match.path}/view-all`}
            component={ViewAllCategoriesComponent}
          />
          {/* Create A Category */}
          <Route
            path={`${this.props.match.path}/create`}
            render={props => (
              <CreateCategoryComponent
                history={props.history}
                match={props.match}
                location={props.location}
              />
            )}
          />
          {/* Update A Category */}
          <Route
            path={`${this.props.match.path}/update`}
            render={props => (
              <UpdateCategoryComponent
                history={props.history}
                match={props.match}
                location={props.location}
              />
            )}
          />
        </Switch>
      </>
    );
  }
}
