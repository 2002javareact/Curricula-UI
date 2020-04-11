//Pass in a true and false value in to do some form of validation

import React, { SyntheticEvent } from "react"
import { Visualization } from "../../../models/Visualization";
import { Button, Card, Row, Container, Col, ButtonGroup } from "reactstrap";
import { Curriculum } from "../../../models/Curriculum";
import { Skill } from "../../../models/Skill";
import { Category } from "../../../models/Category";
import { Redirect } from "react-router";

interface IUpdateViewVisualizationProps {
    visualization: Visualization
    errorMessage: string
    getOneVisualizationActionMapper: (id: number) => void
    updateVisualizationActionMapper: (visualizationToUpdate: Visualization) => void
}

export class ViewAndUpdateVisualizationComponent extends React.Component<IUpdateViewVisualizationProps, any>{

    constructor(props: any) {
        super(props)
        this.state = { skills: [], updateVisualization: false }
    }

    componentDidMount() {
        if (this.props.visualization.visualizationId === 0) {
            this.props.getOneVisualizationActionMapper(+window.location.href.substring(window.location.href.lastIndexOf('/') + 1))
        }else{
            this.setState({
                updateVisualization: true
            })
        }
    }

    handlerSkillInCurriculum(e: SyntheticEvent, curriculum: Curriculum) {
        e.preventDefault()
        this.setState({
            skills: curriculum.skills
        })
    }

    render() {

        const newSkills: Skill[] = [];

        this.props.visualization.curriculum.forEach(curriculum => curriculum.skills.map((skill) => {
            if (!newSkills.some(item => item.skillId === skill.skillId)) {
                newSkills.push(skill);
            }
        }))
        newSkills.sort((a, b) => {
            return a.category.categoryColor.localeCompare(b.category.categoryColor)
        })

        const categoryList: Category[] = []

        newSkills.forEach((category) => {

            if (!categoryList.some(item => item.categoryId === category.category.categoryId)) {
                categoryList.push(category.category)
            }

        })

        let categoryDisplay = categoryList.map((category)=>{
            return(
            <Card style={{ backgroundColor: category.categoryColor }} className="rounded-pill border-dark text-light m-1 font-weight-bold" >{category.categoryName}</Card>
            
        )})

        let displayCurriculum = this.props.visualization.curriculum.map((curriculum) => {

            return (
                <>
                    <Button onMouseOver={(e: SyntheticEvent) => this.handlerSkillInCurriculum(e, curriculum)} className="bg-light m-1 border-bottom border-top-0 border-left-0 border-right-0 text-dark">{curriculum.curriculumName}</Button>
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

        let skillDisplay = newSkills.map((skill) => {
            return (
                this.state.skills.some((item: Skill) => item.skillId === skill.skillId) ?
                    <Button style={{ backgroundColor: skill.category.categoryColor }} className="rounded-pill text-light m-1 font-weight-bold" >{skill.skillName}</Button>
                    :
                    <Button style={{ backgroundColor: `${skill.category.categoryColor}61` }} className="rounded-pill text-light m-1 font-weight-bold">{skill.skillName}</Button>
            )
        })



        return (
            this.state.updateVisualization?
            <>
            </>
            
            :
            <>
                <br /><br /><br /><br />
                <h3>{this.props.visualization.visualizationName}</h3>
                <br />
                <Container className="shadow-custom rounded p-3">
                    <Row>
                        <Col className="col-sm-6">
                            <ButtonGroup vertical className="w-100">
                                {displayCurriculum}
                            </ButtonGroup>
                        </Col>
                        <Col className="col-sm-4">
                            {skillDisplay}
                        </Col>
                        <Col className="col-sm-2">
                            {categoryDisplay}
                        </Col>
                    </Row>
                </Container>
            </>)
    }

}