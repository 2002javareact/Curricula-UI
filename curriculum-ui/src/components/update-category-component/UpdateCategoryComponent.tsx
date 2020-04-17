import React, { SyntheticEvent } from "react";
import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Button,
  Toast,
  ToastHeader,
  ToastBody,
  Card,
  Row
} from "reactstrap";
import { Category } from "../../models/Category";
import { CategoryInfoComponent } from "../category-info-component/CategoryInfoComponent";
import { RouteComponentProps } from "react-router";
import { SketchPicker } from "react-color";

interface IUpdateCategoryProps extends RouteComponentProps {
  //Used to store the updated category after being returned from the Store. Used to pass in value to the CategoryInfoComponent
  updatedCategory: Category;
  //Used for any error messages we want to display
  errorMessage: string;
  //Action mapper used for updating a category
  updateCategoryActionMapper: (
    categoryId: number,
    categoryColor: string,
    categoryName: string
  ) => void;
  location: any;
}

interface IUpdateCategoryState {
  //Stores form values to be passed into the action mapper upon submitting the form
  categoryId: number;
  categoryColor: string;
  categoryName: string;
  //Boolean used to represent if the form was successfully submitted
  didSubmit: boolean;
  //Boolean used to represent if the color picker needs to be displayed
  displayColorPicker: boolean;
}

export class UpdateCategoryComponent extends React.Component<
  IUpdateCategoryProps,
  IUpdateCategoryState
> {
  constructor(props: any) {
    super(props);
    //Sets default state for all state values
    this.state = {
      //default category fields passed in from the card that is clicked on
      categoryId: this.props.location.state.category.categoryId,
      categoryColor: this.props.location.state.category.categoryColor,
      categoryName: this.props.location.state.category.categoryName,
      didSubmit: false,
      displayColorPicker: true
    };
  }

  //dynamically update field functions
  updateColor = (c: any) => {
    this.setState({
      categoryColor: c.currentTarget.value
    });
  };

  updateName = (n: any) => {
    this.setState({
      categoryName: n.currentTarget.value
    });
  };

  //Function that calls the action mapper to update a category with values inputted from the form.
  submitUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    //Action mapper used to update a category with form values
    await this.props.updateCategoryActionMapper(
      this.state.categoryId,
      this.state.categoryColor,
      this.state.categoryName
    );
    this.setState({ didSubmit: true });
  };

  //color picker methods
  handleClick = () => {
    this.setState({
      displayColorPicker: !this.state.displayColorPicker
    });
  };
  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };
  handleChange = (color: any) => {
    this.setState({ categoryColor: color.hex });
    console.log(this.state.categoryColor); // testing
  };

  render() {
    //color picker stuff
    var swatch = {
      padding: "5px",
      background: "#fff",
      borderRadius: "1px",
      boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
      display: "inline-block",
      cursor: "pointer"
    };
    var color = {
      width: "36px",
      height: "14px",
      borderRadius: "2px",
      background: this.state.categoryColor
    };

    //Variable used to hold the old version of the category that we're updating. Used to display those old values upon rendering the form
    const oldCategory = this.props.location.state.category;

    return (
      <>
        <h3>Update Category</h3>
        <div className="d-flex justify-content-center">
          <Card className="shadow-custom d-flex justify-content-center col-6">
            &nbsp;
            <Form onSubmit={this.submitUpdate}>
              <FormGroup>
                <Row className="p-1 d-flex justify-content-center">
                  <Label sm={2} for="categoryId">
                    CategoryId:
                  </Label>
                  <Col sm={10}>
                    <Input
                      //onChange={this.updateUserId}
                      value={oldCategory.categoryId}
                      type="number"
                      name="categoryId"
                      id="categoryId"
                      placeholder="CategoryId"
                      required
                      disabled
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row className="p-1 d-flex justify-content-center">
                  <Label for="name" sm={2}>
                    Category Name:
                  </Label>
                  <Col sm={10}>
                    <Input
                      onChange={this.updateName}
                      value={this.state.categoryName}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Category Name"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row className="p-1 d-flex justify-content-center">
                  <Label for="color" sm={2}>
                    Color:
                  </Label>
                  <Col sm={10}>
                    <Input
                      onChange={this.handleChange}
                      value={this.state.categoryColor}
                      type="text"
                      name="color"
                      id="color"
                      placeholder="Category Color"
                      disabled
                    />
                  </Col>
                </Row>
              </FormGroup>
              <Row className="d-flex justify-content-center">
                {this.state.displayColorPicker ? (
                  <>
                    <div onClick={this.handleClose} />
                    ​
                    <SketchPicker
                      color={this.state.categoryColor}
                      onChange={this.handleChange}
                    />
                  </>
                ) : null}
              </Row>
              {/* {<Row className="m-1 d-flex justify-content-center">
          <div style={swatch} onClick={this.handleClick}>
            <div style={color} />
          </div>
          </Row>} */}
              &nbsp;
              <Row className="m-2 d-flex justify-content-center">
                <Button color="info">Update Category</Button>
              </Row>
            </Form>
            &nbsp;
          </Card>
        </div>

        {/* If no error message, display the blank error message. Else, display a toast with the error message */}
        {this.props.errorMessage === "" ? (
          <></>
        ) : (
          <Toast>
            <ToastHeader icon="danger">Error!</ToastHeader>
            <ToastBody>{this.props.errorMessage}</ToastBody>
          </Toast>
        )}
        {/* If the form was submitted, display a card with the updated category */}
        {this.state.didSubmit === true ? (
          <CategoryInfoComponent
            currentCategory={this.props.updatedCategory}
            key={this.props.updatedCategory.categoryId}
          />
        ) : (
          <></>
        )}
      </>
    );
  }
}
