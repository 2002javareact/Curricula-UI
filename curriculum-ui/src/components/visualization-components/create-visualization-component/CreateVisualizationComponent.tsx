import { Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, Button, Alert} from 'reactstrap';
import React, { SyntheticEvent } from "react";
import { Visualization } from "../../../models/Visualization";
import { Curriculum } from '../../../models/Curriculum';

 interface ICreateVisualizationProps{
    createVisualization: Visualization
     errorMessage: string
    createVisualizationActionMapper:(n:string,c:Array<any>)=>void
    viewCurriculumListActionMapper:()=>void
    curriculumList:Array<Curriculum>
}

 interface ICreateVisualizationState{
    visualizationName:string,
    Curriculum:Array<any>,
    isLoading:boolean,
    
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
    this.submitCurriculum=this.submitCurriculum.bind(this);
  }
  componentDidMount(){
    
    this.props.viewCurriculumListActionMapper();
      console.log('we are in mount  '+this.props.viewCurriculumListActionMapper);
      
    
  }
  handlerName(e:any){this.setState({visualizationName:e.target.value})}
  handlerCurriculum(e:any){this.setState({Curriculum:e.target.value})}
  submitCurriculum(e:SyntheticEvent){
    e.preventDefault();
   
    this.props.viewCurriculumListActionMapper();
    
  }
  
   submitVisualization = async (e: SyntheticEvent) => 
  {
    e.preventDefault();
    if (this.state.visualizationName.length>0){
    this.props.createVisualizationActionMapper(this.state.visualizationName,this.state.Curriculum)}
    else{
     console.log('you need to put some name');
  
     
    }
 
  this.setState({    
    visualizationName: '', 
    Curriculum:[], 
    isLoading:false
})
    console.log(this.props.createVisualizationActionMapper);
  }
  render(){
      let curriculumOption 
      if (this.props.curriculumList.length>0){
       curriculumOption = this.props.curriculumList.map((el:Curriculum)=>(<option value={el.curriculumId}>{el.curriculumName}</option>))}
      
    return(
      <div>
      <Container>
        <Row className="p-4 m-4 border border-secondary">
          <Col>
            <h2>Create Visualization Form</h2>
            <Form>
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" onChange={this.handlerName} placeholder="Enter the Visualization Name" defaultValue={this.state.visualizationName} />
              </FormGroup>
            </Form>
            <Form inline onSubmit={this.submitCurriculum}>
              <FormGroup className="col-sm-10 pl-0">
                <Label className="text-align-left col-sm-2">Curriculum</Label>     
                <Input type="select" name="Curriculum" className="col-sm-10" onChange={this.handlerCurriculum}>
                 {curriculumOption}
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
      <>
      <p>{this.props.errorMessage}</p></>
      </div>
    )
  }
}