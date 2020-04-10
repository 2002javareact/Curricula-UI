import React, { SyntheticEvent } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, Button, Alert} from 'reactstrap';
import { Curriculum } from '../../models/Curriculum';
import { Skill } from '../../models/Skill';
import { Category } from '../../models/Category';

interface ICreateCurriculumFormProps {
  getAllCategoriesActionMapper:()=>any
  getSkillsByCategoryIdActionMapper:(id:number)=>any,
  createCurriculumActionMapper:(c:Curriculum)=>any,
  allCategory:Array<Category>,
  skillsByCategoryId:Array<Skill>
}
interface ICreateCurriculumFormState {
  name:string,
  existSkillList:Array<any>,
  notExistSkillList:Array<any>,
  categoryId:number,
  isLoading:boolean
}

export class CreateCurriculumFormComponent extends React.Component<ICreateCurriculumFormProps,ICreateCurriculumFormState>{
  constructor(props:any){
    super(props);
    this.state={
      name:'',
      existSkillList:[],
      notExistSkillList:[],
      categoryId:1,
      isLoading:false
    }
    this.handlerName=this.handlerName.bind(this);
    this.handlerCategory=this.handlerCategory.bind(this);
    this.handlerAddSkill=this.handlerAddSkill.bind(this);
    this.handlerRemoveSkill=this.handlerRemoveSkill.bind(this);
    this.submitCategory=this.submitCategory.bind(this);
    this.submitCurriculum=this.submitCurriculum.bind(this);
  }
  componentDidMount(){
    if(this.props.allCategory){
      this.props.getAllCategoriesActionMapper();
    }
  }
  static getDerivedStateFromProps(props:any,state:ICreateCurriculumFormState){
    const notExistSkillList=props.skillsByCategoryId.filter((el:any)=>!state.existSkillList.includes(el));
    state={
      name:state.name,
      existSkillList:state.existSkillList,
      notExistSkillList:notExistSkillList,
      categoryId:state.categoryId,
      isLoading:state.isLoading
    }
  }
  handlerName(e:any){this.setState({name:e.target.value})}
  handlerCategory(e:any){this.setState({categoryId:e.target.value})}
  submitCategory(e:SyntheticEvent){
    e.preventDefault();
    this.props.getSkillsByCategoryIdActionMapper(this.state.categoryId);
    
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
  async submitCurriculum(e:SyntheticEvent){
    e.preventDefault();
    this.setState({isLoading:true})
    const response = await this.props.createCurriculumActionMapper({
      "curriculumId": 0,
      "curriculumName": "test3",
      "skills": [
        {
          "skillId": 1,
          "skillName": "POSTGRES",
          "category": {
            "categoryId": 1,
            "categoryColor": "#9400D3",
            "categoryName": "DATABASE"
          }
        }
      ]
    }).then((e:any)=>{
      this.setState({isLoading:false})
    })
    console.log(response);
  }
  render(){

    return(
      <Container>
        <Row className="p-4 m-4 border border-secondary">
          <Col>
            <h2>Create Curriculum Form</h2>
            <Form>
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" onChange={this.handlerName} placeholder="Enter the Curriculum Name" defaultValue={this.state.name}/>
              </FormGroup>
            </Form>
            <Form inline onSubmit={this.submitCategory}>
              <FormGroup className="col-sm-10">
                <Label className="p-0 col-sm-2">Category</Label>     
                <Input type="select" name="category" className="col-sm-10" onChange={this.handlerCategory}>
                  {this.props.allCategory.map((el:Category)=>(<option value={el.categoryId}>{el.categoryName}</option>))}
                </Input>
              </FormGroup>
              <Button  className="col-sm-2">Search</Button>
            </Form>
            <Form onSubmit={this.submitCurriculum}>
              <Button type="submit" className="my-3 col-sm-12">Submit</Button>
            </Form>
            <Form>
              <FormGroup>
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
            </Form>
            {this.state.isLoading && <Alert>Loading</Alert>}
          </Col>
        </Row>
      </Container>
    )
  }
}