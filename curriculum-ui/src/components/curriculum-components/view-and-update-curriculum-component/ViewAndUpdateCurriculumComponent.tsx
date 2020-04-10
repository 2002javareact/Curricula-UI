import React , { SyntheticEvent }from 'react';
import { Container, Button, Row, Col, Card, CardTitle, CardText, CardColumns, InputGroup, Input, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Label, UncontrolledDropdown } from 'reactstrap';
import { Curriculum } from '../../../models/Curriculum';
import {  BrowserRouter as Router, Route, Link, useParams} from "react-router-dom";
import { Skill } from '../../../models/Skill';

interface IViewAndUpdateCurriculumProps {
    viewAndUpdateCurriculumActionMapper:(c:Curriculum)=>any,
    updatedCurriculum: Curriculum,
    getCurriculumById:Curriculum,
    getCurriculumByIdActionMapper:(id:number)=>any,
    match:any,
    allSkills: Skill[],
    viewAllSkillsActionMapper:() => void,
    errorMessageSkills:string

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
            isShowUpdate: false,
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
          
        if(this.props.allSkills.length === 0){this.props.viewAllSkillsActionMapper()}

    else{
        
    }
    }

    public updateCurriculumSubmit = () => this.setState({isShowUpdate:true });
    
 
    render(){
       
        return(


            
            <React.Fragment>
                {this.state.isShowUpdate ? 
                //isShowUpdate = true
                <Container className="curriculum-view-update-container">
                <Row className="p-4 m-4 border border-secondary">
                    {this.props.getCurriculumById?(
                        <React.Fragment>
                            <Col lg={12}>
                                <h3>Curriculum: {this.props.getCurriculumById.curriculumName}</h3>
                            </Col>
                            <Col lg={12}>
                                <Button className="curriculum-view-update-buttons" color="danger">
                                    Delete Curriculum
                                </Button>
                                <Button onClick={this.updateCurriculumSubmit} className="curriculum-view-update-buttons" color="primary">
                                    Update Curriculum
                                </Button>
                            </Col>
                            {/* <Col>
                                <Card className="curriculum-view-update-card">
                                    <CardTitle><h3 className="curriculum-view-update-left-text">Skills:</h3></CardTitle>
                                    <CardColumns>
                                        {this.props.getCurriculumById.skills.map(skills => <CardText>{skills.skillName}</CardText>)}
                                    </CardColumns>
                                </Card>
                            </Col> */}
                            <Col lg={12}>
                                <p>Currently in curriculum</p>
                            </Col>
                            {this.props.getCurriculumById.skills.map(skills => <Card><CardTitle>{skills.skillName}</CardTitle><button color="danger">Remove</button></Card>)}
                            <Col lg={12}>
                                <p>Not in curriculum</p>
                            </Col>
                            <Col lg={12}>
                                <Label>Category</Label>
                                <Input/>
                                <UncontrolledDropdown>
                                    <DropdownToggle caret>
                                        Dropdown
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Header</DropdownItem>
                                        <DropdownItem disabled>Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Col>
                            <Col>
                            {this.props.allSkills.map(skills => <Card><CardTitle>{skills.skillName}</CardTitle><button color="danger">Add</button></Card>)}
                            </Col>


                            
                        </React.Fragment>
                    ):(
                        <Col>
                        <h3>No Curriculum found</h3>
                        </Col>
                    )}
                </Row>
            </Container>
                
                :

                //isShow is false
                <Container className="curriculum-view-update-container">
                <Row className="p-4 m-4 border border-secondary">
                    {this.props.getCurriculumById?(
                        <React.Fragment>
                            <Col lg={12}>
                                <h3>Curriculum: {this.props.getCurriculumById.curriculumName}</h3>
                            </Col>
                            <Col lg={12}>
                                <Button className="curriculum-view-update-buttons" color="danger">
                                    Delete Curriculum
                                </Button>
                                <Button onClick={this.updateCurriculumSubmit} className="curriculum-view-update-buttons" color="primary">
                                    Update Curriculum
                                </Button>
                            </Col>
                            <Col>
                                <Card className="curriculum-view-update-card">
                                    <CardTitle><h3 className="curriculum-view-update-left-text">Skills:</h3></CardTitle>
                                    <CardColumns>
                                        {this.props.getCurriculumById.skills.map(skills => <CardText>{skills.skillName}</CardText>)}
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
            }
            </React.Fragment>


            
          
        )
    }

}