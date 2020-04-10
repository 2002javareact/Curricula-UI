import React from 'react';
import { Container, Button, Row, Col, Card, CardTitle, CardText, CardColumns } from 'reactstrap';
import { Curriculum } from '../../../models/Curriculum';
import {  BrowserRouter as Router, Route, Link, useParams} from "react-router-dom";

interface IViewAndUpdateCurriculumProps {
    viewAndUpdateCurriculumActionMapper:(c:Curriculum)=>any,
    updatedCurriculum: Curriculum,
    getCurriculumById:Curriculum,
    getCurriculumByIdActionMapper:(id:number)=>any,
    match:any
}

interface IViewAndUpdateCurriculumState{
    currentSkillList:Array<any>,
    isShowUpdate:boolean,
    skills:Curriculum[]
    // curriculumName:String,
    // curriculum: Curriculum
}


export class ViewAndUpdateCurriculumComponent extends React.Component<IViewAndUpdateCurriculumProps,IViewAndUpdateCurriculumState>{
    constructor(props:any){
        super(props);
        this.state={
            currentSkillList:[],
            isShowUpdate:false,
            skills:[]
            // curriculumName:'',
            // curriculum:{curriculumId:0, curriculumName:'', skills:[]},
            
        }
    }
    
    componentDidMount(){
        let id;
        if(this.props.match){
          id  = this.props.match.params.id;
          console.log(id);
        }
         if(id){
            // let curriculumId = this.props.getCurriculumByIdActionMapper(parseInt(id));
             this.props.getCurriculumByIdActionMapper(parseInt(id));
        //     console.log("We are in this id: " + id)
            // this.setState({curriculum: curriculumId});
        }
    }
    
    render(){
       
        return(
            
            <Container className="curriculum-view-update-container">
                <Row className="p-4 m-4 border border-secondary">
                    {this.props.getCurriculumById?(
                        <React.Fragment>
                            <Col lg={12}>
                                <h3>Curriculum: {this.props.getCurriculumById.name}</h3>
                            </Col>
                            <Col lg={12}>
                                <Button className="curriculum-view-update-buttons" color="danger">
                                    Delete Curriculum
                                </Button>
                                <Button className="curriculum-view-update-buttons" color="primary">
                                    Update Curriculum
                                </Button>
                            </Col>
                            <Col>
                                <Card className="curriculum-view-update-card">
                                    <CardTitle><h3 className="curriculum-view-update-left-text">Skills:</h3></CardTitle>
                                    <CardColumns>
                                        {this.props.getCurriculumById.skillList.map(skills => <CardText>{skills.skillName}</CardText>)}
                                    </CardColumns>
                                </Card>
                            </Col>
                        </React.Fragment>
                    ):(
                        <Col>
                        <h3>No Curriculum found</h3>
                        </Col>
                    )}
                </Row>
            </Container>
        )
    }

}