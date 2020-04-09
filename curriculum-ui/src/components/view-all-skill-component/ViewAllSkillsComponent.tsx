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
    componentDidMount(){
        if(this.props.allSkills.length === 0)
            return (this.props.viewAllSkillsActionMapper())

        else{}
    }

    render(){
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

