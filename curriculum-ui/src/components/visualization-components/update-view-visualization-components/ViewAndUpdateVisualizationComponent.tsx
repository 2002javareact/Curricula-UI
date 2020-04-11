//Pass in a true and false value in to do some form of validation

import React, { SyntheticEvent } from "react"
import { Visualization } from "../../../models/Visualization";
import { Button, Card, Row, Container, Col, ButtonGroup, Form, FormGroup, Label, CustomInput, Input } from "reactstrap";
import { Curriculum } from "../../../models/Curriculum";
import { Skill } from "../../../models/Skill";
import { Category } from "../../../models/Category";
import { Redirect } from "react-router";

interface IUpdateViewVisualizationProps {
    visualization: Visualization
    errorMessage: string
    allCurriculumList: Curriculum[]
    getOneVisualizationActionMapper: (id: number) => void
    updateVisualizationActionMapper: (visualizationToUpdate: Visualization) => void
    viewCurriculumListActionMapper: () => void
}

export class ViewAndUpdateVisualizationComponent extends React.Component<IUpdateViewVisualizationProps, any>{

    constructor(props: any) {
        super(props)
        this.state = { skills: [], updateVisualization: false }
    }

    componentDidMount() {
        if (this.props.visualization.visualizationId === 0) {
            this.props.getOneVisualizationActionMapper(+window.location.href.substring(window.location.href.lastIndexOf('/') + 1))
        } else {
            this.props.viewCurriculumListActionMapper()
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

        newSkills.forEach((skill) => {
            if (!categoryList.some(item => item.categoryId === skill.category.categoryId)) {
                categoryList.push(skill.category)
            }
        })

        let categoryDisplay = categoryList.map((category) => {
            return (
                <Card style={{ backgroundColor: category.categoryColor }} className="rounded-pill border-dark text-light m-1 font-weight-bold" >{category.categoryName}</Card>
            )
        })

        let displayCurriculum = this.props.visualization.curriculum.map((curriculum) => {
            return (
                <Button onMouseOver={(e: SyntheticEvent) => this.handlerSkillInCurriculum(e, curriculum)} className="bg-light m-1 border-bottom border-top-0 border-left-0 border-right-0 text-dark">{curriculum.curriculumName}</Button>
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

        let curriculumCheckBoxes = this.props.allCurriculumList.map((curriculum) => {
            
            return( 
            this.props.visualization.curriculum.some((item:Curriculum)=> item.curriculumId === curriculum.curriculumId)?
            <CustomInput className="p-3" type="checkbox" id={`${curriculum.curriculumId}`} label={curriculum.curriculumName} value={curriculum.curriculumId} checked />
            :
            <CustomInput className="p-3" type="checkbox" id={`${curriculum.curriculumId}`} label={curriculum.curriculumName} value={curriculum.curriculumId} />
            )
        })

        return (

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
                {this.state.updateVisualization ?
                    <>
                        <br /><br /><br /><br />

                        <Label>Warning Refresh will remove update and progress will be lost</Label>
                        <Form className="w-50 p-3 m-auto">
                        <Label for="exampleCheckbox">Check Curriculum to add or remove from current Visualization</Label>
                            <FormGroup check inline>
                                
                                
                                    {curriculumCheckBoxes}
                                
                            </FormGroup>
                            <FormGroup>
                                <Label>Visualization Name</Label>
                                <Input type="text" placeholder={`${this.props.visualization.visualizationName}`} />
                            </FormGroup>
                        </Form>
                    </>
                    : <></>}
            </>)
    }

}