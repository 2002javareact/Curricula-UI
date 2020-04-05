import React from "react";
import { Skill } from "./models/Skill";
import { IState } from "../Reducers";
import { connect } from "react-redux";
import { viewAllComponentsActionMapper } from "../action-mappers/viewAllSkillActionMapper"
import { Card, CardText, Container, Row, } from "reactstrap";


export interface IViewAllSkillsProps{
    allSkills:Skill[]
    errorMessage:string
    viewAllComponentsActionMapper:()=>void
}


export class viewAllSkillsComponent extends React.Component<IViewAllSkillsProps,any>{
    componentDidMount(){
        if(this.props.allSkills.length === 0)
        return (this.props.viewAllComponentsActionMapper())

        else{}
    }

    render(){
        let view = this.props.allSkills.map((skill) => {
            return (
           <Card className = "skill">
               <CardText>{skill.skillName}</CardText>
           </Card>
        )})
        return(
            <Container className ="listOfSkills">
                <Row xs="4">
                    {view}
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state:IState) => {
    return {
        allSkills: state.getAllSkills.allSkills,
        errorMessage: state.getAllSkills.errorMessage        
    }
}

const mapDispatchToProps = {
    viewAllComponentsActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(viewAllSkillsComponent)

