import { Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, Button, Alert} from 'reactstrap';
import React, { SyntheticEvent } from "react";
import { Visualization } from "../../../models/Visualization";


export interface ICreateVisualizationProps{
    createVisualization: Visualization
     errorMessage: string
    createVisualizationActionMapper:(n:string,c:Array<any>)=>any
}

export interface ICreateVisualizationState{
    visualizationName:string,
    Curriculum:Array<any>,
    isLoading:boolean
}

export class CreateVisualizationComponent extends React.Component<ICreateVisualizationProps,ICreateVisualizationState>{
    constructor(props:any){
        super(props)
        this.state = {
            visualizationName:'',
            Curriculum:[],
            isLoading:false

        }
        
   
    this.handlerName=this.handlerName.bind(this);
    this.handlerCurriculum=this.handlerCurriculum.bind(this);
    this.submitVisualization=this.submitVisualization.bind(this);
  }
  handlerName(e:any){this.setState({visualizationName:e.target.value})}
  handlerCurriculum(e:any){this.setState({Curriculum:e.target.value})}
  
  
   submitVisualization = async (e: SyntheticEvent) => 
  {
    e.preventDefault();
    this.props.createVisualizationActionMapper(this.state.visualizationName,this.state.Curriculum)
 
  this.setState({    
    visualizationName: '', 
    Curriculum:[], 
    isLoading:false
})
   // console.log(this.props.createVisualizationActionMapper);
  }
  render(){
    return(
      <Container>
        <Row className="p-4 m-4 border border-secondary">
          <Col>
            <h2>Create Visualization Form</h2>
            <Form>
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" onChange={this.handlerName} placeholder="Enter the Visualization Name" defaultValue={this.state.visualizationName}/>
              </FormGroup>
            </Form>
            <Form inline onSubmit={()=>{}}>
              <FormGroup className="col-sm-10">
                <Label className="p-0 col-sm-2">Curriculum</Label>     
                <Input type="select" name="Curriculum" className="col-sm-10" onChange={this.handlerCurriculum}>
                  <option>1</option>
                  {this.state.Curriculum.map(el=><option>{el.name}</option>)}
                </Input>
              </FormGroup>
              <Button  className="col-sm-2">Search</Button>
            </Form>
            <Form onSubmit={this.submitVisualization}>
              <Button type="submit" className="my-3 col-sm-12">Submit</Button>
            </Form>
           
            {this.state.isLoading && <Alert>Loading</Alert>}
          </Col>
        </Row>
      </Container>
    )
  }
}