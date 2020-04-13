import React, { SyntheticEvent } from "react"
import { Visualization } from "../../../models/Visualization";
import { Card, CardTitle, Button, CardText, Row, ButtonGroup } from "reactstrap";
import {CardDeck} from "../../CardDeckComponent"
import { Redirect } from "react-router";


interface IVisualizationProps{
    allVisualizations:Visualization[]
    visualization:Visualization
    errorMessage: string
    getAllVisualizationsActionMapper: () => void
    getOneVisualizationActionMapper:(id:number) => void
}

export class ViewAllVisualizationComponent extends React.Component<IVisualizationProps,any>{

componentDidMount(){
    if(this.props.allVisualizations.length === 0){
        this.props.getAllVisualizationsActionMapper()
    }
}

updateView(e: SyntheticEvent,id:number){
    e.preventDefault()
    this.props.getOneVisualizationActionMapper(id)
}
    render(){

        // This maps the returned list of all visualizations to these card elements 
        let visualizationDisplay = this.props.allVisualizations.map((visualization) => {
            if(visualization.curriculum){
            return(
                <Card className="visualizationCard"> 
                    <CardTitle>{visualization.visualizationName}</CardTitle>
                    {/* The map take the array of curriculums and maps them to this CardText, this will do it for all the elements */}
                    {visualization.curriculum.map(element => {return(
                    <CardText>{element.curriculumName}</CardText>)
                    })}
                    <CardText>{`${window.location.href}visualization/${visualization.visualizationId}`}</CardText>
                    <ButtonGroup>
                    <Button onClick={(e: SyntheticEvent)=>this.updateView(e,visualization.visualizationId)}>Update?</Button>
                    <Button >stuff</Button>
                    </ButtonGroup>
                </Card>
            )
                }

        })
        
//Brakes are used for spacing but this can be achived in css
        return(
        
            this.props.visualization.visualizationId !== 0 ?
            <Redirect to={`/visualization/${this.props.visualization.visualizationId}`}></Redirect>
            :
        <>
        <br/> <br/> <br/> <br/>
        <h3>All Visualizations</h3>
        <br/>
            <CardDeck elementsPerRow={4}>
            {visualizationDisplay}
            </CardDeck>
        
        </>)
    }
}