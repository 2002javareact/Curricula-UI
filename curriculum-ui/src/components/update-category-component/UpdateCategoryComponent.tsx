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
  ToastBody
} from "reactstrap";
import { Category } from "../../models/Category";
import { CategoryInfoComponent } from "../category-info-component/CategoryInfoComponent";
import { RouteComponentProps } from "react-router";

//prop interface
interface IUpdateCategoryProps extends RouteComponentProps {
  updatedCategory: Category;
  errorMessage: string;
  updateCategoryActionMapper: (
    categoryId: number,
    categoryColor: string,
    categoryName: string
  ) => void;
  //not sure; would pass in id from card
  //currentCategory: Category;
  location: any;
}

//state interface?
interface IUpdateCategoryState {
  categoryId: number;
  categoryColor: string;
  categoryName: string;
  didSubmit: boolean;
}

export class UpdateCategoryComponent extends React.Component<
  IUpdateCategoryProps,
  IUpdateCategoryState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      //category id should be whatever is passed in from that card (button)
      categoryId: this.props.location.state.category.categoryId,
      categoryColor: this.props.location.state.category.categoryColor,
      categoryName: this.props.location.state.category.categoryName,
      didSubmit: false
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

  submitUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    //call action mapper
    await this.props.updateCategoryActionMapper(
      this.state.categoryId,
      this.state.categoryColor,
      this.state.categoryName
    );
    this.setState({ didSubmit: true });
  };

  render() {
    const oldCategory = this.props.location.state.category;

    return (
      <>
        <h3>Update Category</h3>
        <Form onSubmit={this.submitUpdate}>
          <FormGroup row>
            <Label for="categoryId" sm={2}>
              CategoryId:
            </Label>
            <Col sm={6}>
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
          </FormGroup>
          <FormGroup row>
            <Label for="color" sm={2}>
              Color:
            </Label>
            <Col sm={6}>
              <Input
                onChange={this.updateColor}
                value={this.state.categoryColor}
                type="text"
                name="color"
                id="color"
                placeholder="Category Color"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="name" sm={2}>
              Category Name:
            </Label>
            <Col sm={6}>
              <Input
                onChange={this.updateName}
                value={this.state.categoryName}
                type="text"
                name="name"
                id="name"
                placeholder="Category Name"
              />
            </Col>
          </FormGroup>
          <Button color="success">Update Category</Button>
        </Form>
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
