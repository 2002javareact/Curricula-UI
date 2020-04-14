//Pass in a true and false value in to do some form of validation

import React, { SyntheticEvent } from "react"
import { Visualization } from "../../../models/Visualization";
import { Button, Card, Row, Container, Col, ButtonGroup, Form, FormGroup, Label, CustomInput, Input } from "reactstrap";
import { Curriculum } from "../../../models/Curriculum";
import { Skill } from "../../../models/Skill";
import { Category } from "../../../models/Category";

interface IUpdateViewVisualizationProps {
    visualization: Visualization
    errorMessage: string
    allCurriculumList: Curriculum[]
    getOneVisualizationActionMapper: (id: number) => void
    updateVisualizationActionMapper: (visualizationToUpdate: Visualization) => void
    viewCurriculumListActionMapper: () => void
}

interface IUpdateViewVisualizationState {
    visualizationName: string
    updateCurriculumList: any[]
    skills: Skill[]
    updateVisualization: boolean
}

export class ViewAndUpdateVisualizationComponent extends React.Component<IUpdateViewVisualizationProps, IUpdateViewVisualizationState>{

    constructor(props: any) {
        super(props)
        this.state = {
            skills: [],
            updateVisualization: false,
            visualizationName: "",
            updateCurriculumList: []
        }
    }

    async componentDidMount() {
        if (this.props.visualization.visualizationId === 0) {
            await this.props.getOneVisualizationActionMapper(+window.location.href.substring(window.location.href.lastIndexOf('/') + 1))
        } else {
            await this.props.viewCurriculumListActionMapper()
            const checkedCurriculumList = this.props.allCurriculumList.map((c: Curriculum) => {
                if (this.props.visualization.curriculum.some((c2: Curriculum) => c.curriculumId === c2.curriculumId)) {
                    return this.convertCurriculumToCheckedObject(c, true);
                }
                else {
                    return this.convertCurriculumToCheckedObject(c, false);
                }
            })
            this.setState({
                updateVisualization: true,
                updateCurriculumList: checkedCurriculumList
            })
        }
    }

    convertCurriculumToCheckedObject(curriculum: Curriculum, isExist: boolean) {
        return ({
            curriculumId: curriculum.curriculumId,
            curriculumName: curriculum.curriculumName,
            isExist: isExist
        })
    }
    handlerSkillInCurriculum(e: SyntheticEvent, curriculum: Curriculum) {
        e.preventDefault()
        this.setState({
            skills: curriculum.skills
        })
    }

    updateVisualizationName = (e: any) => {
        this.setState({
            visualizationName: e.currentTarget.value
        })
    }

    updateVisualizationCurriculum = (id: number) => {
        console.log("iscalling " + id)
        const newCurriculumList = this.state.updateCurriculumList.map((c: any) => {
            if (c.curriculumId === id) {
                return {
                    curriculumId: c.curriculumId,
                    curriculumName: c.curriculumName,
                    isExist: !c.isExist
                }
            }
            else {
                return c;
            }
        })
        this.setState({ updateCurriculumList: newCurriculumList })
    }

    updateVisualization = async (e: SyntheticEvent) => {
        e.preventDefault()

        let array: any[] = []

        this.state.updateCurriculumList.forEach((element: any) => {
            if (element.isExist) {
                array.push({ curriculumId: element.curriculumId })
            }
        })
        await this.props.updateVisualizationActionMapper(new Visualization(this.props.visualization.visualizationId, this.state.visualizationName, array))
        this.props.getOneVisualizationActionMapper(this.props.visualization.visualizationId)
    }

    render() {

        const newSkills: Skill[] = [];

        if (this.props.visualization.curriculum !== null) {
            this.props.visualization.curriculum.forEach((curriculum: Curriculum) => {
                if (curriculum.skills !== null) {
                    curriculum.skills.forEach((skill) => {
                        if (!newSkills.some(item => item.skillId === skill.skillId)) {
                            newSkills.push(skill);
                        }
                    }
                    )
                }
            })
            newSkills.sort((a, b) => {
                return a.category.categoryColor.localeCompare(b.category.categoryColor)
            })
        }
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

        let displayCurriculum
        if (this.props.visualization.curriculum !== null) {
            displayCurriculum = this.props.visualization.curriculum.map((curriculum) => {
                return (
                    <Button onMouseOver={(e: SyntheticEvent) => this.handlerSkillInCurriculum(e, curriculum)} className="bg-light m-1 border-bottom border-top-0 border-left-0 border-right-0 text-dark">{curriculum.curriculumName}</Button>
                )
            })
        }
        let skillDisplay = newSkills.map((skill) => {
            return (
                this.state.skills.some((item: Skill) => item.skillId === skill.skillId) ?
                    <Button style={{ backgroundColor: skill.category.categoryColor }} className="rounded-pill text-light m-1 font-weight-bold" >{skill.skillName}</Button>
                    :
                    <Button style={{ backgroundColor: `${skill.category.categoryColor}61` }} className="rounded-pill text-light m-1 font-weight-bold">{skill.skillName}</Button>
            )
        })


        const curriculumCheckBoxes =
            this.state.updateCurriculumList.map((el) => (
                <CustomInput onChange={this.updateVisualizationCurriculum.bind(this, el.curriculumId)} className="p-3" type="checkbox" id={`${el.curriculumId}`} label={el.curriculumName} value={el.curriculumId} checked={el.isExist} />
            ))

        return (
            <Container>
                <Row className="p-4 m-4 border border-light rounded shadow-custom">
                    <Row>
                        <h3 className="col-12 mb-4">{this.props.visualization.visualizationName}</h3>
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
                    {this.state.updateVisualization &&
                    <Row>
                        <Col>
                            <hr/>
                            <p className="text-secondary">Warning: Refresh will remove update and progress will be lost</p>
                            <Form onSubmit={this.updateVisualization} className="p-3 m-auto text-left">
                                <FormGroup className="text-left">
                                    <Label className="pl-2 font-weight-bold text-left">Visualization Name</Label>
                                    <Input type="text" onChange={this.updateVisualizationName.bind(this)} placeholder={`${this.props.visualization.visualizationName}`} />
                                </FormGroup>
                                <Label className="m-0 pl-2 font-weight-bold" for="exampleCheckbox">Check Curriculum to add or remove from current Visualization</Label>
                                <FormGroup check inline className="px-3">
                                    {curriculumCheckBoxes}
                                </FormGroup>
                                <Button className="w-100" color="primary">Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                    }
                </Row>
            </Container>
    
        )
    }

}