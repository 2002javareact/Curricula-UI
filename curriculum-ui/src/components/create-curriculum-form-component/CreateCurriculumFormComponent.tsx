import React, { SyntheticEvent } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, Button} from 'reactstrap';

interface CreateCurriculumFormState {
  name:string,
  existSkillList:Array<any>,
  notExistSkillList:Array<any>,
  categoryList:Array<any>, 
  category:string
}

export class CreateCurriculumFormComponent extends React.Component<any,CreateCurriculumFormState>{
  constructor(props:any){
    super(props);
    this.state={
      name:'',
      existSkillList:[],
      notExistSkillList:[],
      categoryList:[],
      category:''
    }
    this.handlerCategory=this.handlerCategory.bind(this);
  }
  handlerName(e:any){this.setState({name:e.target.value})}
  handlerCategory(e:any){this.setState({category:e.target.value})}
  submitCategory(e:SyntheticEvent){
    e.preventDefault();
    // TODO
  }
  // TODO
  handlerAddSkill(e:any){
    const newSkillList= [...this.state.existSkillList,e.target.value];
    this.setState({existSkillList:newSkillList});
    this.setState({notExistSkillList:this.state.notExistSkillList.filter(el=>el!==e.target.value)})
  }
  // TODO
  handlerRemoveSkill(e:any){
    const newNotSkillList= [...this.state.existSkillList,e.target.value];
    this.setState({notExistSkillList:newNotSkillList});
    this.setState({existSkillList:this.state.existSkillList.filter(el=>el!==e.target.value)})
  }
  // TODO
  submitCurriculum(e:SyntheticEvent){
    
  }
  render(){
    return(
      <Container>
        <Row className="p-4 m-4 border border-secondary">
          <Col>
            <Form onSubmit={this.submitCurriculum}>
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" onChange={this.handlerName} placeholder="Enter the Curriculum Name" defaultValue={this.state.name}/>
              </FormGroup>
              <FormGroup>
                {/* TODO */}
                <Form onSubmit={()=>{}}>
                  <Label>Category</Label>     
                  <Input type="select" name="category" onChange={this.handlerCategory}>
                    <option>1</option>
                    {this.state.categoryList.map(el=><option>{el.name}</option>)}
                  </Input>
                  <Button>Search</Button>
                </Form>
                <Label>Skills</Label>
                {this.state.existSkillList.map(el=>
                  <Card>
                    <CardBody>
                      <CardTitle>Skill Name</CardTitle>
                      <Button>Add</Button>
                    </CardBody>
                  </Card>
                )}
                {this.state.notExistSkillList.map(el=>
                  <Card>
                    <CardBody>
                      <CardTitle>Skill Name</CardTitle>
                      <Button>Add</Button>
                    </CardBody>
                  </Card>
                )}
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}