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
    deleteOneVisualizationActinoMapper:(id:number) => void
}

/**
 * @author [Anthony Cona] (Anthony-Cona)
 **/
export class ViewAllVisualizationComponent extends React.Component<IVisualizationProps,any>{

componentDidMount(){    
        this.props.getAllVisualizationsActionMapper()
}

updateView(e: SyntheticEvent,id:number){
    e.preventDefault()
    this.props.getOneVisualizationActionMapper(id)
}

async deleteVisualization(e:SyntheticEvent,id:number){
    e.preventDefault()
   await this.props.deleteOneVisualizationActinoMapper(id)
    this.props.getAllVisualizationsActionMapper()
}
    render(){

        // This maps the returned list of all visualizations to these card elements 
        let visualizationDisplay = this.props.allVisualizations.map((visualization) => {
            if(visualization.curriculum){
            return(
                <Card className="visualizationCard"> 
                    <CardTitle className="font-weight-bold m-2 ButtonDown">{visualization.visualizationName}</CardTitle>
                    <br/>
                    {/* The map take the array of curriculums and maps them to this CardText, this will do it for all the elements */}
                    {visualization.curriculum.map(element => {return(
                    <CardText className="ButtonsDown">{element.curriculumName}</CardText>)
                    })}
                    
                    <CardText className="ButtonsDown">{`${window.location.href}visualization/${visualization.visualizationId}`}</CardText>
                    <ButtonGroup className="ButtonsDown">
                    <Button color="success" onClick={(e: SyntheticEvent)=>this.updateView(e,visualization.visualizationId)}>Update</Button>

                    <Button color="danger" onClick={(e:SyntheticEvent)=>this.deleteVisualization(e,visualization.visualizationId)}>Delete</Button>
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