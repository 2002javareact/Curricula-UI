<<<<<<< HEAD
import { Skill } from "../models/Skill"
import { Card, CardText, Container, Row } from "reactstrap"
import { IState } from "../../reducers"
import { connect } from "react-redux"
import { viewAllComponentsActionMapper } from "../../action-mappers/view-all-skill-action-mapper"
import React from "react"
=======
import { Skill } from "../../models/Skill"
import { Card, CardText, Container, Row } from "reactstrap"
import { IState } from "../../reducers"
import { connect } from "react-redux"
import React from "react"
import { viewAllSkillsActionMapper } from "../../action-mappers/view-all-skill-action-mapper"
>>>>>>> dev



export interface IViewAllSkillsProps{
    allSkills:Skill[]
    errorMessage:string
<<<<<<< HEAD
    viewAllComponentsActionMapper:()=>void
=======
    viewAllSkillsActionMapper:()=>void
>>>>>>> dev
}


export class ViewAllSkillsComponent extends React.Component<IViewAllSkillsProps,any>{
    componentDidMount(){
        if(this.props.allSkills.length === 0)
<<<<<<< HEAD
        return (this.props.viewAllComponentsActionMapper())
=======
            return (this.props.viewAllSkillsActionMapper())
>>>>>>> dev

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
                <Card style = {{textAlign: "center"}}>
                <h4>All Skills</h4>
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
        allSkills: state.getAllSkills.allSkills,
        errorMessage: state.getAllSkills.errorMessage        
    }
}

const mapDispatchToProps = {
<<<<<<< HEAD
    viewAllComponentsActionMapper
=======
    viewAllSkillsActionMapper
>>>>>>> dev
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllSkillsComponent)

