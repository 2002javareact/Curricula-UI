import React from 'react';
import { Container, Button, Row, Col } from 'reactstrap';
import { Curriculum } from '../../../models/Curriculum';

interface IViewAndUpdateCurriculumProps {
    viewAndUpdateCurriculumActionMapper:(c:Curriculum)=>any,
    updatedCurriculum: Curriculum
    cirriculumId:any
}

interface IViewAndUpdateCurriculumState{
    currentSkillList:Array<any>,
    name:String,
    isShowUpdate:boolean,
    curriculumName:String,
    cirriculumId:any
}


export class ViewAndUpdateCurriculumComponent extends React.Component<IViewAndUpdateCurriculumProps,IViewAndUpdateCurriculumState>{
    constructor(props:any){
        super(props);
        this.state={
            currentSkillList:[],
            name:'',
            isShowUpdate:false,
            curriculumName:'',
            cirriculumId:0,
        }
    }

    componentDidMount(){
        if(this.props.cirriculumId){
            this.setState({curriculum:this.props.viewAndUpdateCurriculumActionMapper(this.props.cirriculumId)});
        }else{

        }
    }

    render(){
        return(
            <Container>
                <Row className="p-4 m-4 border border-secondary">
                    <Col>
                        <h2>{this.state.name}</h2>
                        <h3>Skills: </h3>
                    </Col>
                    <Col lg={8}>
                        <Button color="primary">Update Curriculum</Button>
                        <Button color="danger">Delete Curriculum</Button>
                    </Col>
                </Row>
            </Container>
        )
    }

}