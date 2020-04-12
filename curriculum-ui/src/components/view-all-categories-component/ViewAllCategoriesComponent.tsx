import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardTitle,
  CardText,
  CardHeader,
  CardBody,
  Button,
  Container,
  Row
} from "reactstrap";
import { Category } from "../../models/Category";
import { FetchAllCategories } from "../../remote/Category";
import { RouteComponentProps } from "react-router";
import { NavLink } from "react-router-dom";

//prop interface

interface IViewAllUsersProps extends RouteComponentProps {
  allCategory: Category[];
  errorMessage: string;
  getAllCategoriesActionMapper: () => void;
}
//state interface?

export class ViewAllCategoriesComponent extends React.Component<
  IViewAllUsersProps,
  any
> {
  componentDidMount() {
    // if (this.props.allCategory.length === 0) {
    return this.props.getAllCategoriesActionMapper();
    // } else {
    // }
  }

  render() {
    let viewCategory = this.props.allCategory.map((category, index) => {
      return (
        <Card
          key={index}
          body
          inverse
          style={{
            backgroundColor: category.categoryColor,
            borderColor: "#333",
            margin: "1em",
            width: "20vw",
            height: "40vh"
          }}
        >
          <CardTitle style={{ color: "black", fontSize: "2em" }}>
            {category.categoryName}
          </CardTitle>
          <br />
          <br />
          <br />
          <CardText style={{ color: "black", fontSize: "1.2em" }}>
            COLOR: {category.categoryColor}
          </CardText>
          <NavLink
            className="btn btn-dark"
            to={{
              pathname: `/category/${category.categoryId}`,
              state: { category }
            }}
          >
            Update Category
          </NavLink>
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
      );
    });

    return (
      <>
        <Card style={{ textAlign: "center" }}>
          <h4>All Categories</h4>
        </Card>
        <Container className="listOfCategories">
          <Row xs="3">{viewCategory}</Row>
        </Container>
      </>
    );
  }
}
