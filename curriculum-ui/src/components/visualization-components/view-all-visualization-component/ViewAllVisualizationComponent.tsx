import React from "react"
import { Visualization } from "../../../models/Visualization";
import { Card, CardTitle, Button, CardText, Row, ButtonGroup } from "reactstrap";
import {CardDeck} from "../../CardDeckComponent"


interface IVisualizationProps{
    allVisualizations:Visualization[]
    errorMessage: string
    getAllVisualizationsActionMapper: () => void
}

export class viewAllVisualizationComponent extends React.Component<IVisualizationProps,any>{

componentDidMount(){
    if(this.props.allVisualizations.length === 0){
        this.props.getAllVisualizationsActionMapper()
    }
}


    render(){

        // This maps the returned list of all visualizations to these card elements 
        let visualizationDisplay = this.props.allVisualizations.map((visualization) => {
            return(
                <Card className="visualizationCard"> 
                    <CardTitle>{visualization.visualizationName}</CardTitle>
                    {/* The map take the array of curriculums and maps them to this CardText, this will do it for all the elements */}
                    {visualization.curriculum.map(element => {return(
                    <CardText>{element.curriculumName}</CardText>)
                    })}
                    <CardText>{`${window.location.href}visualization/${visualization.visualizationId}`}</CardText>
                    <ButtonGroup>
                    <Button href={`${window.location.href}visualization/${visualization.visualizationId}`}>Update?</Button>
                    <Button>stuff</Button>
                    </ButtonGroup>
                </Card>
            )
    

        })
        
//Brakes are used for spacing but this can be achived in css
        return(<>
        <br/> <br/> <br/> <br/>
        <h3>All Visualizations</h3>
        <br/>
        
            <CardDeck elementsPerRow={4}>
            {visualizationDisplay}
            {visualizationDisplay}
            {visualizationDisplay}
            {visualizationDisplay}
            {visualizationDisplay}
            {visualizationDisplay}


            </CardDeck>
        
        </>)
    }
}