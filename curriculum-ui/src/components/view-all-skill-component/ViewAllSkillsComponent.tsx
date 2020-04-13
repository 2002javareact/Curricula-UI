import { Skill } from "../../models/Skill"
import { Container, Row, Button, Card, CardDeck } from "reactstrap"
import { IState } from "../../reducers"
import { connect } from "react-redux"
import React from "react"
import { viewAllSkillsActionMapper } from "../../action-mappers/skill-action-mapper"
import { getAllCategoriesActionMapper } from "../../action-mappers/getall-categories-action-mappers"
import { Category } from "../../models/Category"
import { skillCategoryTypes } from "../../action-mappers/get-skills-by-category-id-action-mapper"



export interface IViewAllSkillsProps{
    allSkills:Skill[]
    allCategory:Category[]
    errorMessage:string
    viewAllSkillsActionMapper:()=>void   
    getAllCategoriesActionMapper:()=>void
}


export class ViewAllSkillsComponent extends React.Component<IViewAllSkillsProps,any>{
    componentWillMount(){
            return (this.props.viewAllSkillsActionMapper(),this.props.getAllCategoriesActionMapper())
    }

    render(){
        this.props.allSkills.sort((a,b) =>{
            return a.category.categoryColor.localeCompare(b.category.categoryColor)})

            let view = this.props.allSkills.map((skill) => { 
            return (
           <Button className="rounded-pill text-light m-auto font-weight-bold"
           style={{backgroundColor: skill.category.categoryColor}}>{skill.skillName}</Button>
        )})
                
        let legend = this.props.allCategory.map((category) => {
            return(
                <>
                <Button className="rounded-pill text-light m-auto font-weight-bold p-10"
                                style={{backgroundColor: category.categoryColor}}>{category.categoryName}</Button>
                </>
            )
        })
     
        return(
            <>
                <h3 className = "skillTitle">All Skills</h3>
                <Container className ="listOfSkills">
                    <Row xs="4">
                        {view}
                    </Row>
                </Container>
                <br/><br/>
                <Container>
                    <Row xs="6">
                    {legend}
                    </Row>
                </Container>
            </>

        )
    }
}

const mapStateToProps = (state:IState) => {
    return {
        allSkills: state.skills.allSkills,
        allCategory:state.allCategory.allCategory,
        errorMessage: state.skills.errorMessage        
    }
}

const mapDispatchToProps = {
    viewAllSkillsActionMapper,
    getAllCategoriesActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllSkillsComponent)

