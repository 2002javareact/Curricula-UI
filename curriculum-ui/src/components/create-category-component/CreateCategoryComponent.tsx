import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Button,
  Table,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  ButtonGroup,
  Card,
  Toast,
  ToastHeader,
  ToastBody
} from "reactstrap";
import { Redirect } from "react-router";
import { Category } from "../../models/Category";
import { SyntheticEvent } from "react";
import React from "react";
import { SketchPicker } from "react-color";
import { CategoryInfoComponent } from "../category-info-component/CategoryInfoComponent";

//prop interface

//state interface?

interface ICreateCatProps {
  CreateCat: Category;
  errorMessage: string;
  createCatActionMapper: (ci: number, cc: string, cn: string) => void;
}

interface ICatState {
  categoryId: number;
  categoryColor: string;
  categoryName: string;
  didSubmit: boolean;
  displayColorPicker: boolean;
}

export class CreateCategoryComponent extends React.Component<
  ICreateCatProps,
  ICatState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      categoryId: 0,
      categoryColor: "#000000",
      categoryName: "",
      didSubmit: false,
      displayColorPicker: false
    };
  }

  submitNewCategory = async (e: SyntheticEvent) => {
    e.preventDefault();
    this.props.createCatActionMapper(
      this.state.categoryId,
      this.state.categoryColor,
      this.state.categoryName
    );
    this.setState({
      categoryId: 0,
      categoryColor: "",
      categoryName: "",
      didSubmit: true
    });
  };

  createCategoryId = (e: any) => {
    this.setState({
      categoryId: e.currentTarget.value
    });
  };
  createCategoryColor = (e: any) => {
    this.setState({
      categoryColor: e.currentTarget.value
    });
  };

  createCategoryName = (e: any) => {
    this.setState({
      categoryName: e.currentTarget.value
    });
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

    return (
      <div>
        <Form onSubmit={this.submitNewCategory}>
          <FormGroup row>
            <Label for="Create Catagory id" sm={3}>
              {" "}
              Catagory id
            </Label>
            <Col sm={6}>
              <Input
                onChange={this.createCategoryId}
                value={this.state.categoryId}
                type="number"
                name="catNumber"
                id="catNumber"
                placeholder="Please Enter The Catagory Id"
                required
                disabled
              />
            </Col>
          </FormGroup>
          <br />

          {this.state.displayColorPicker ? (
            <div style={{ position: "absolute", right: "5vw" }}>
              <div onClick={this.handleClose} />
              ​
              <SketchPicker
                color={this.state.categoryColor}
                onChange={this.handleChange}
              />
            </div>
          ) : null}
          <FormGroup row>
            <Label for="Create Category Color" sm={3}>
              Category Color
            </Label>
            <Col sm={6}>
              <Input
                onChange={this.handleChange}
                value={this.state.categoryColor}
                type="text"
                name=" catCategoryColor"
                id="catCategoryColor"
                placeholder="Please enter the color"
                required
                disabled
              />
            </Col>
          </FormGroup>
          <div style={swatch} onClick={this.handleClick}>
            <div style={color} />
          </div>
          <br />

          <FormGroup row>
            <Label for="Create Category Name" sm={3}>
              Category Name
            </Label>
            <Col sm={6}>
              <Input
                onChange={this.createCategoryName}
                value={this.state.categoryName}
                type="text"
                name=" createCatName"
                id="createCatName"
                placeholder="Please enter the Catagory Name"
                required
              />
            </Col>
          </FormGroup>

          <br />
          <Button color="info">Submit</Button>
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
        {this.state.didSubmit === true ? <Redirect to="/category" /> : <></>}
      </div>
    );
  }
}
