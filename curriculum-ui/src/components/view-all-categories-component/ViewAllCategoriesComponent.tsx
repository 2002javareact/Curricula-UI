import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardTitle, CardText, CardHeader, CardBody, Button } from 'reactstrap'
import { Category } from '../../models/Category'

//prop interface

interface IViewAllUsersProps {
  allCategory:Category[]
  errorMessage: string
  getAllCategoriesActionMapper: () => void
}
//state interface?

export class ViewAllCategoriesComponent extends React.Component<any, any> {
  
  componentDidMount() 
{
  
  // this.props.getAllCategoriesActionMapper()   
  
}
  
  
  render() {
    return (
      <>
        <p>Hello World!</p>
        <Card body inverse style={{ backgroundColor: '#acacac', borderColor: '#333' }} >
                <CardTitle style={{ color:'black', fontSize:'2em' }} >WEB</CardTitle>
                <CardText style={{ color:'black' , fontSize:'2em'}} >TECHNOLOGY</CardText>
                <CardText style={{ color:'black', fontSize:'1.2em' }} >COLOR: #333FFF</CardText>
                <Button style={{ backgroundColor: '#464646', fontSize:'2em', color:'black' }} > DELETE</Button>
        </Card>
      </>
    );
  }
}
