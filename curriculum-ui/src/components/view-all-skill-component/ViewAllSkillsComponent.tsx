import { Skill } from "../../models/Skill"
import { Card, CardText, Container, Row } from "reactstrap"
import { IState } from "../../reducers"
import { connect } from "react-redux"
import React from "react"
import { viewAllSkillsActionMapper } from "../../action-mappers/skill-action-mapper"



export interface IViewAllSkillsProps{
    allSkills:Skill[]
    errorMessage:string
    viewAllSkillsActionMapper:()=>void
}


export class ViewAllSkillsComponent extends React.Component<IViewAllSkillsProps,any>{
    componentWillMount(){
            return (this.props.viewAllSkillsActionMapper())
    }

    render(){
        this.props.allSkills.sort((a,b) =>{
            return a.category.categoryId - b.category.categoryId})
            
        let view = this.props.allSkills.map((skill) => {
            return (
           <Card className = "skill">
               <CardText style={{backgroundColor: skill.category.categoryColor}}>{skill.skillName}</CardText>
           </Card>
        )})
     
        return(
            <>
            <br/><br/><br/>
                <Card className = "allSkillsTitle">
                <h3>All Skills</h3>
                </Card>
                <Container className ="listOfSkills">
                    <Row xs="4">
                        {view}
                    </Row>
                </Container>
            </>
        )
    }
}

const mapStateToProps = (state:IState) => {
    return {
        allSkills: state.skills.allSkills,
        errorMessage: state.skills.errorMessage        
    }
}

const mapDispatchToProps = {
    viewAllSkillsActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllSkillsComponent)

