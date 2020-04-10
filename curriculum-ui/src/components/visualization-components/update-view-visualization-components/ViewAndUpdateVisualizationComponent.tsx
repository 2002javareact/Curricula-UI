//Pass in a true and false value in to do some form of validation

import React from "react"
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
    updateVisualizationActionMapper: () => void
}

export class updateAndViewVisualizationComponent extends React.Component<IUpdateViewVisualizationProps, any>{

    // constructor(props:any){
    //     super(props)
    //     this.state ={visualizationId: window.location.href.substring(window.location.href.lastIndexOf('/')+ 1)}
    // }

    // componentDidMount() {
    //     if (this.props.visualization.visualizationId === 0) {
    //         this.props.getOneVisualizationActionMapper(+window.location.href.substring(window.location.href.lastIndexOf('/') + 1))
    //     }
    // }


    render() {

        const vis: Visualization = {
            "visualizationId": 1,
            "visualizationName": "INITIAL DATA",
            "curriculum": [
                {
                    "curriculumId": 1,
                    "curriculumName": "FULL-STACK",
                    "skills": [
                        {
                            "skillId": 1,
                            "skillName": "POSTGRES",
                            "category": {
                                "categoryId": 1,
                                "categoryColor": "#9400D3",
                                "categoryName": "DATABASE"
                            }
                        },
                        {
                            "skillId": 2,
                            "skillName": "GIT",
                            "category": {
                                "categoryId": 2,
                                "categoryColor": "#0000FF",
                                "categoryName": "SOURCE CODE"
                            }
                        },
                        {
                            "skillId": 3,
                            "skillName": "SPRING",
                            "category": {
                                "categoryId": 3,
                                "categoryColor": "#00FF00",
                                "categoryName": "FRAMEWORK"
                            }
                        },
                        {
                            "skillId": 4,
                            "skillName": "VISUAL STUDIO CODE",
                            "category": {
                                "categoryId": 4,
                                "categoryColor": "#FFFF00",
                                "categoryName": "IDE"
                            }
                        }
                    ]
                },
                {
                    "curriculumId": 2,
                    "curriculumName": ".NET",
                    "skills": [
                        {
                            "skillId": 5,
                            "skillName": "JENKINS",
                            "category": {
                                "categoryId": 5,
                                "categoryColor": "#FF7F00",
                                "categoryName": "DEVOPS"
                            }
                        },
                        {
                            "skillId": 6,
                            "skillName": "MVC",
                            "category": {
                                "categoryId": 6,
                                "categoryColor": "#FF0000",
                                "categoryName": "ARCHITECTURE"
                            }
                        },
                        {
                            "skillId": 7,
                            "skillName": "TOMCAT",
                            "category": {
                                "categoryId": 5,
                                "categoryColor": "#FF7F00",
                                "categoryName": "DEVOPS"
                            }
                        },
                        {
                            "skillId": 8,
                            "skillName": "POSTMAN",
                            "category": {
                                "categoryId": 4,
                                "categoryColor": "#FFFF00",
                                "categoryName": "IDE"
                            }
                        }
                    ]
                },
                {
                    "curriculumId": 3,
                    "curriculumName": "CYBER SECURITY",
                    "skills": [
                        {
                            "skillId": 9,
                            "skillName": "ANGULAR",
                            "category": {
                                "categoryId": 3,
                                "categoryColor": "#00FF00",
                                "categoryName": "FRAMEWORK"
                            }
                        },
                        {
                            "skillId": 10,
                            "skillName": "ECLIPSE",
                            "category": {
                                "categoryId": 4,
                                "categoryColor": "#FFFF00",
                                "categoryName": "IDE"
                            }
                        },
                        {
                            "skillId": 11,
                            "skillName": "SOA",
                            "category": {
                                "categoryId": 6,
                                "categoryColor": "#FF0000",
                                "categoryName": "ARCHITECTURE"
                            }
                        },
                        {
                            "skillId": 12,
                            "skillName": "INTELLIJ",
                            "category": {
                                "categoryId": 4,
                                "categoryColor": "#FFFF00",
                                "categoryName": "IDE"
                            }
                        }
                    ]
                }
            ]
        }

        const newSkills: Skill[] = [];

        vis.curriculum.map(curriculum => curriculum.skills.map((skill) => {
            if (!newSkills.includes(skill)) {
                newSkills.push(skill);
            }
        }))
        newSkills.sort((a, b) => {
            return a.category.categoryName.localeCompare(b.category.categoryName)
        })
        let displayCurriculum = vis.curriculum.map((curriculum) => {

            return (
                <>
                    <Button className="bg-light border-0 text-dark">{curriculum.curriculumName}</Button>

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
        <Button style = {{backgroundColor: skill.category.categoryColor}} className="border-white rounded-pill text-dark">{skill.skillName}</Button>
    )
})


        return (<>
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