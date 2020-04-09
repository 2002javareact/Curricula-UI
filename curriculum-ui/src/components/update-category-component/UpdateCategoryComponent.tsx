import React, { SyntheticEvent } from "react";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";
import { Category } from "../../models/Category";

//prop interface
interface IUpdateCategoryProps {
  updatedCategory: Category;
  errorMessage: string;
  updateCategoryActionMapper: (
    categoryId: number,
    categoryColor: string,
    categoryName: string
  ) => void;
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
      categoryId: 0,
      categoryColor: "",
      categoryName: "",
      didSubmit: false
    };
  }

  //dynamically update field functions
  updateColor(c: any) {
    this.setState({
      categoryColor: c.currentTarget.value
    });
  }

  updateName(n: any) {
    this.setState({
      categoryName: n.currentTarget.value
    });
  }

  submitUpdate = async (e: SyntheticEvent) => {
    e.preventDefault;
    //call action mapper
    this.props.updateCategoryActionMapper(
      this.state.categoryId,
      this.state.categoryColor,
      this.state.categoryName
    );
  };

  render() {
    return (
      <>
        <h3>Update Category</h3>
        <Form onSubmit={this.submitUpdate}>
          {/* only thing required should be the user id */}
          <FormGroup row>
            <Label for="categoryId" sm={2}>
              CategoryId:
            </Label>
            <Col sm={6}>
              <Input
                //onChange={this.updateUserId}
                value={this.state.categoryId}
                type="number"
                name="categoryId"
                id="categoryId"
                placeholder="CategoryId"
                required
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
                placeholder="color"
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
        {/* have some sort of ternary to display card if submitted. if not, empty paragraph */}
      </>
    );
  }
}
