import React from 'react';
import { Container, Card, Row, Col, CardBody, CardTitle, CardText } from "reactstrap";
import { Curriculum } from '../../models/Curriculum';
import { Skill } from '../../models/Skill';
import { NavLink } from 'react-router-dom';


interface IViewAllCurriculumProps{
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

interface IViewAllCurriculumState {

}


export class ViewAllCurriculumComponent extends React.Component<IViewAllCurriculumProps,IViewAllCurriculumState>{
  componentDidMount(){
    if(this.props.curriculumList.length===0){
      this.props.viewCurriculumListActionMapper();
    }
  }
  render(){
    return(
      <Container>
        <Row className="p-4 m-4 border border-secondary">
          <Col className="col-12">
            <h3> Curriculum List </h3>
          </Col>
            {this.props.curriculumList.map((el)=>(
              <Col className="col-6">
                <Card>
                  <CardBody>
                    {/* Curriculum Name */}
                    <CardTitle>{`${el.curriculumId}  ${el.curriculumName}`}</CardTitle>
                    {/* List of skills */}
                    {el.skills && el.skills.map((skill:Skill)=>(
                      <CardText className="rounded-pill" style={{backgroundColor: skill.category.categoryColor}}>{skill.skillName}</CardText>
                    ))}
                    <NavLink
                      to={{
                        pathname:`/curriculum/view/${el.curriculumId}`,
                      }} className="w-100 btn btn-primary">View</NavLink>
                  </CardBody>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    )
  }
}