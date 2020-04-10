//Pass in a true and false value in to do some form of validation

import React, { SyntheticEvent } from "react"
import { Visualization } from "../../../models/Visualization";
import { Redirect } from "react-router";
import { Button, Card, Row, Container, Col, ButtonGroup } from "reactstrap";
import { Curriculum } from "../../../models/Curriculum";
import { Skill } from "../../../models/Skill";
import { CardDeck } from "../../CardDeckComponent";

interface IUpdateViewVisualizationProps {
    visualization: Visualization
    errorMessage: string
    getOneVisualizationActionMapper: (id: number) => void
    updateVisualizationActionMapper: (visualizationToUpdate:Visualization) => void
}

export class ViewAndUpdateVisualizationComponent extends React.Component<IUpdateViewVisualizationProps, any>{

    constructor(props:any){
        super(props)
        this.state ={skills:[]}
    }

    componentDidMount() {
        if (this.props.visualization.visualizationId === 0) {
            this.props.getOneVisualizationActionMapper(+window.location.href.substring(window.location.href.lastIndexOf('/') + 1))
        }
    }

    handlerSkillInCurriculum(e:SyntheticEvent,curriculum:Curriculum) {
        e.preventDefault()
        this.setState({
            skills: curriculum.skills
        })
    }

    render() {

        const newSkills: Skill[] = [];

        this.props.visualization.curriculum.map(curriculum => curriculum.skills.map((skill) => {    
            if (!newSkills.some(item => item.skillId===skill.skillId)) {
                newSkills.push(skill);
            }
        }))
        newSkills.sort((a, b) => {
            return a.category.categoryName.localeCompare(b.category.categoryName)
        })
        let displayCurriculum = this.props.visualization.curriculum.map((curriculum) => {

            return (
                <>
                    <Button onMouseOver={(e:SyntheticEvent)=>this.handlerSkillInCurriculum(e,curriculum)} className="bg-light border-0 text-dark">{curriculum.curriculumName}</Button>
                    {/* curriculum col
            onhover have a selected have list of skills
            save array of currentskills and compare with list of skills
            if in currentskills list then change class name based on id value
            All of these skills have ID
            onhover save all ids into array

        skills list
            list of all skills in visualization
            save all skills from all curriculum non repeating into array
            set them with id values into dom.elements 
            all skills have IDs */}
                </>
            )
        })

let skillDisplay = newSkills.map((skill)=>{
    return(
        this.state.skills.some((item:Skill) => item.skillId===skill.skillId) ?
        <Button style = {{backgroundColor: skill.category.categoryColor}} className="border-white rounded-pill text-dark">{skill.skillName}</Button>
        :
        <Button style = {{backgroundColor: `${skill.category.categoryColor}54` }} className="border-white rounded-pill text-dark">{skill.skillName}</Button>
    )
})


        return (
        
        
        <>
        <br/><br/><br/><br/>
        <Container>
            <Row>
                <Col>
                <ButtonGroup vertical className="w-100">
                        {displayCurriculum}
                </ButtonGroup>
                </Col>
                <Col>
                    {skillDisplay}
                </Col>
            </Row>
        </Container>
        </>)
    }

}