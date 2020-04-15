import { Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, Button, Alert, CustomInput} from 'reactstrap';
import React, { SyntheticEvent } from "react";
import { Visualization } from "../../../models/Visualization";
import { Curriculum } from '../../../models/Curriculum';
import { Redirect } from 'react-router';

 interface ICreateVisualizationProps{
    createVisualization: Visualization
     errorMessage: string
    createVisualizationActionMapper:(n:string,c:Array<any>)=>void
    viewCurriculumListActionMapper:()=>void
    getAllVisualizationsActionMapper: () => void
    curriculumList:Array<Curriculum>
}

 interface ICreateVisualizationState{
    visualizationName:string,
    checkedCurriculumList:Array<any>,
    isLoading:boolean,
    isRedirect:boolean,
    isEmpty:boolean,
}

export class CreateVisualizationComponent extends React.Component<ICreateVisualizationProps,ICreateVisualizationState>{
  constructor(props:any){
    super(props)
    this.state = {
        visualizationName:'',
        checkedCurriculumList:[],
        isLoading:false,
        isRedirect:false,
        isEmpty:false
    }
    this.handlerName=this.handlerName.bind(this);
    this.submitVisualization=this.submitVisualization.bind(this);
    this.submitCurriculum=this.submitCurriculum.bind(this);
  }
  async componentDidMount(){
    await this.props.viewCurriculumListActionMapper()
    const checkedCurriculumList = this.props.curriculumList.map((c: Curriculum) => {
      return this.convertCurriculumToCheckedObject(c, false);
    })
    this.setState({
        checkedCurriculumList: checkedCurriculumList
    })
    
  }
  convertCurriculumToCheckedObject(curriculum: Curriculum, isExist: boolean) {
    return ({
        curriculumId: curriculum.curriculumId,
        curriculumName: curriculum.curriculumName,
        isExist: isExist
    })
}
  handlerName(e:any){this.setState({visualizationName:e.target.value})}
  submitCurriculum(e:SyntheticEvent){
    e.preventDefault();
   
    this.props.viewCurriculumListActionMapper();
    
  }
  
  updateVisualizationCurriculum = (id: number) => {
    console.log("iscalling " + id)
    const newCurriculumList = this.state.checkedCurriculumList.map((c: any) => {
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
    this.setState({ checkedCurriculumList: newCurriculumList })
  }

  submitVisualization = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (this.state.visualizationName.length>0){
      
    const checkedCurriculumList = this.props.curriculumList.map((c: Curriculum) => {
      return this.convertCurriculumToCheckedObject(c, false);
    })
    this.setState({    
      visualizationName: '', 
      checkedCurriculumList:checkedCurriculumList, 
      isLoading:false
    }) 
   

    let array: any[] = []

    this.state.checkedCurriculumList.forEach((element: any) => {
        if (element.isExist) {
            array.push({ curriculumId: element.curriculumId })
        }
    })
    
    await this.props.createVisualizationActionMapper(this.state.visualizationName,array)
    this.props.getAllVisualizationsActionMapper()
    this.setState({isRedirect:true})
    }
  else{
    this.setState({isEmpty:true})
    console.log('you need to Enter Visulaization name');
  }   
  }
  render(){
    const curriculumCheckBoxes =
    this.state.checkedCurriculumList.map((el) => (
        <CustomInput onChange={this.updateVisualizationCurriculum.bind(this, el.curriculumId)} className="p-3" type="checkbox" id={`${el.curriculumId}`} label={el.curriculumName} value={el.curriculumId} checked={el.isExist} />
    ))
    return(
      <div>
        {this.state.isRedirect && <Redirect to={"/"}/> }
      <Container>
        <Row className="p-4 m-4 border border-light text-left rounded shadow-custom bg-light">
          <Col>
            <h2 className="text-center">Create Visualization Form</h2>
            <Form onSubmit={this.submitVisualization}>
              <FormGroup>
                <Label className="pl-2 font-weight-bold">Visualization Name</Label>
                <Input type="text" onChange={this.handlerName} placeholder="Enter the Visualization Name" defaultValue={this.state.visualizationName} />
              </FormGroup>
              <Label className="pl-2 font-weight-bold m-0" for="exampleCheckbox">Check Curriculum to add or remove from current Visualization</Label>
              <FormGroup check inline className="pl-3 w-100">
                {curriculumCheckBoxes}
              </FormGroup>
              <Button color="primary" type="submit" className="my-3 col-sm-12">Submit</Button>
            </Form>
            <p>{this.props.errorMessage}</p>
            {this.state.isLoading && <Alert>Loading</Alert>}
            {this.state.isEmpty && <Alert color='danger'>Please Enter Visualization Name</Alert>}
          </Col>
        </Row>
       
      </Container>
      
      
      </div>
    )
  }
}