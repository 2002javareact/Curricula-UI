import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardTitle, CardText, CardHeader, CardBody, Button, Container, Row } from 'reactstrap'
import { Category } from '../../models/Category'
import { FetchAllCategories } from '../../remote/category-remote'

//prop interface

interface IViewAllUsersProps {
  allCategory: Category[]
  errorMessage: string
  getAllCategoriesActionMapper: () => void
}
//state interface?

export class ViewAllCategoriesComponent extends React.Component<IViewAllUsersProps, any> {

  componentDidMount() {

    if (this.props.allCategory.length === 0) {
      return (this.props.getAllCategoriesActionMapper())
    }
    else { }

  }



  render() {

    let viewCategory = this.props.allCategory.map((category, index) => {
      return (
/*
*** I removed inline styling, as per our new css rules please seperate it out  
*** Put into CSS with custom classname or use bootstrap css classnames
 Card- style={{borderColor: '#333', margin: '1em', width: '20vw', height: '40vh' }}
 CardTitle- style={{ color: 'black', fontSize: '2em' }}
 CardText- style={{ color: 'black', fontSize: '1.2em' }} 
 Button- style={{ backgroundColor: '#464646', fontSize: '2em', color: 'black' }} 
 ***
 ***
 */
        <Card body inverse style={{ backgroundColor: category.categoryColor}} >
          <CardTitle>{category.categoryName}</CardTitle>
          <br/><br/><br/>
          <CardText>COLOR: {category.categoryColor}</CardText>
          <Button>DELETE</Button>
        </Card>

      )
    })


    return (
      <>

        <Card style={{ textAlign: "center" }}>
          <h4>All Categories</h4>
        </Card>
        <Container className="listOfCategories">
          <Row xs="3">
            {viewCategory}
          </Row>
        </Container>



      </>
    );
  }
}

