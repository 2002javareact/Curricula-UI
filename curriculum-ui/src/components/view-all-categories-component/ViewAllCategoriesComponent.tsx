import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardTitle, CardText, Button, Row } from "reactstrap";
import { Category } from "../../models/Category";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

interface IViewAllUsersProps extends RouteComponentProps {
  //Used to store the array of all categories in the database
  allCategory: Category[];
  deletedCategory: any;
  //Used for any error messages we want to display
  errorMessage: string;
  //Action mapper used for getting all categories
  getAllCategoriesActionMapper: () => void;
  //Action mapper used for deleting a category
  CategoryDeleteByIdActionMapper: (id: number) => void;
}

export class ViewAllCategoriesComponent extends React.Component<
  IViewAllUsersProps,
  any
> {
  componentDidMount() {
    //Gets all categories once the component is mounted
    return this.props.getAllCategoriesActionMapper();
  }

  //Function that calls the action mapper to delete a category by the specified ID
  deleteCategory = async (id: number) => {
    await this.props.CategoryDeleteByIdActionMapper(id);
    //Fetches the categories again to reflect new changes
    this.props.getAllCategoriesActionMapper();
  };

  render() {
    //Variable used to hold all of the cards for all categories
    let viewCategory = this.props.allCategory.map((category, index) => {
      //Used to display all categories in this card format
      return (
        <>
          <Card
            key={index}
            body
            inverse
            className="shadow-custom2 col-3"
            style={{
              margin: "1em"
            }}
          >
            <CardTitle style={{ color: "black", fontSize: "2em" }}>
              {category.categoryName}
            </CardTitle>
            <br />
            <br />
            <CardText
              style={{ color: category.categoryColor, fontSize: "1.2em" }}
            >
              COLOR: {category.categoryColor} ██
            </CardText>
            <Row className="d-flex justify-content-center">
              {/* Update Button */}
              <Button
                tag={Link}
                color="info"
                className="col-5 mx-1"
                to={{
                  pathname: `/category/${category.categoryId}`,
                  state: { category }
                }}
              >
                UPDATE
              </Button>

              {/* Delete Button */}
              <Button
                className="col-5 mx-1"
                onClick={() => this.deleteCategory(category.categoryId)}
                color="danger"
              >
                {" "}
                DELETE
              </Button>
            </Row>
          </Card>
        </>
      );
    });
    return (
      <>
        <h4 style={{ textAlign: "center" }}>All Categories</h4>

        <div className="d-flex justify-content-center">
          <Row className="col-8 d-flex justify-content-center">
            {viewCategory}
          </Row>
        </div>
      </>
    );
  }
}
