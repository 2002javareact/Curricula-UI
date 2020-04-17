//This file does not necessarily have to be used. This file can be used if you would like to reuse the display of a category. This code is exactly the same as code for the Card that is rendered in the ViewAllCategoriesComponent. You can do it that way, or refer to the UpdateCategoryComponent where this component is rendered.

import React from "react";
import { Card, CardTitle, CardText, Button } from "reactstrap";
import { Category } from "../../models/Category";

//Prop used to get the category that this component would be displaying the information for
interface ICategoryInfoProps {
  currentCategory: Category;
}

export class CategoryInfoComponent extends React.Component<
  ICategoryInfoProps,
  any
> {
  render() {
    //Variable used to store the current category. This is to eliminate the need to rewrite this.props.currentCategory every time.
    const currentCategory = this.props.currentCategory;
    //Ternary used to check if the ID value of the category exists. If not, displays nothing.
    return currentCategory.categoryId ? (
      //Same Card as the one in ViewAllCategoriesComponent
      <Card
        body
        inverse
        style={{
          backgroundColor: currentCategory.categoryColor,
          borderColor: "#333",
          margin: "1em",
          width: "20vw",
          height: "40vh"
        }}
      >
        <CardTitle style={{ color: "black", fontSize: "2em" }}>
          {currentCategory.categoryName}
        </CardTitle>
        <br />
        <br />
        <br />
        <CardText style={{ color: "black", fontSize: "1.2em" }}>
          COLOR: {currentCategory.categoryColor}
        </CardText>
        <Button
          style={{
            backgroundColor: "#464646",
            fontSize: "2em",
            color: "black"
          }}
        >
          {" "}
          DELETE
        </Button>
      </Card>
    ) : (
      <></>
    );
  }
}
