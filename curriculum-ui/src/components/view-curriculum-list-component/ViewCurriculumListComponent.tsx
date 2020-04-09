import React from 'react';
import { Container, Card, NavLink, Row, Col, CardBody, CardTitle } from "reactstrap";
import { Curriculum } from '../../models/Curriculum';


interface IViewCurriculumListProps{
  curriculumList:Array<Curriculum>,
  viewCurriculumListActionMapper:()=>{}
}

// Container 
//   Puts in props to component
//     Props from redux store consist of the reducer
//     Props could also be an actionmapper
//       Action Mapper maps out a function, does that function,
//          Dispatches that function to the reducer
//             Updates the store based on that function
//  Redux store will update
//  Props in the container will update.

interface IViewCurriculumListState {

}


export class ViewCurriculumListComponent extends React.Component<IViewCurriculumListProps,IViewCurriculumListState>{
  componentDidMount(){
    if(this.props.curriculumList.length===0){
      this.props.viewCurriculumListActionMapper();
    }
  }
  render(){
    return(
      <Container>
        <Row className="p-4 m-4 border border-secondary">
          <Col>
            <h3> Curriculum List </h3>
            {this.props.curriculumList.map((el)=>(
              <Card>
                <CardBody>
                  {/* Curriculum Name */}
                  <CardTitle>{`${el.curriculumId}  ${el.curriculumName}`}</CardTitle>
                  {/* List of skills */}
                  <NavLink
                    to={"/curriculum"}>View</NavLink>
                </CardBody>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    )
  }
}