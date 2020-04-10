import React, { SyntheticEvent } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, Button, Alert} from 'reactstrap';
import { Curriculum } from '../../../models/Curriculum';
import { Skill } from '../../../models/Skill';
import { Category } from '../../../models/Category';
import { Redirect } from 'react-router';

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
  isLoading:boolean,
  alert:string,
  isRedirect:boolean
}

export class CreateCurriculumFormComponent extends React.Component<ICreateCurriculumFormProps,ICreateCurriculumFormState>{
  constructor(props:any){
    super(props);
    this.state={
      name:'',
      existSkillList:[],
      notExistSkillList:[],
      categoryId:1,
      isLoading:false,
      alert:"",
      isRedirect:false
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
    const notExistSkillList=props.skillsByCategoryId.filter((el:Skill)=>!state.existSkillList.some((item:Skill)=>el.skillId===item.skillId));
    return {
      notExistSkillList:notExistSkillList,
    }
  }
  handlerName(e:any){this.setState({name:e.target.value||undefined})}
  handlerCategory(e:any){this.setState({categoryId:e.target.value})}
  submitCategory(e:SyntheticEvent){
    e.preventDefault();
    this.props.getSkillsByCategoryIdActionMapper(this.state.categoryId);
    
  }
  handlerAddSkill(e:SyntheticEvent,skill:Skill){
    const newSkillList= [...this.state.existSkillList,skill].sort((a:Skill,b:Skill)=>{return a.category.categoryId-b.category.categoryId});
    this.setState({existSkillList:newSkillList});
    this.setState({notExistSkillList:this.state.notExistSkillList.filter((el:Skill)=>el.skillId!==skill.skillId)})
  }
  handlerRemoveSkill(e:SyntheticEvent,skill:Skill){
    const newNotSkillList= [...this.state.existSkillList,skill];
    this.setState({notExistSkillList:newNotSkillList});
    this.setState({existSkillList:this.state.existSkillList.filter((el:Skill)=>el.skillId!==skill.skillId)})
  }
  // TODO
  async submitCurriculum(e:SyntheticEvent){
    e.preventDefault();
    //TODO
    if(this.state.existSkillList.length===0){
      this.setState({alert:"Please include at least one skill"},()=>
        setTimeout(()=>this.setState({alert:""}),5000))
    }
    if(!this.state.name){
      this.setState({alert:"Name is required"},()=>
        setTimeout(()=>this.setState({alert:""}),5000))
    }
    else{
      this.setState({isLoading:true})
      const curriculum = new Curriculum(0,this.state.name,this.state.existSkillList);
      const response = await this.props.createCurriculumActionMapper(curriculum).then((e:any)=>{
        this.setState({isLoading:false,isRedirect:true})
      })
    }
  }
  render(){
    return(
      <Container>
        {this.state.isRedirect && <Redirect to={"/curriculum"}/> }
        <Row className="p-4 m-4 border border-secondary">
          <Col >
            <h2>Create Curriculum Form</h2>
            <Form>
              <FormGroup>
                <Label className="text-left">Name</Label>
                <Input type="text" onChange={this.handlerName} placeholder="Enter the Curriculum Name" defaultValue={this.state.name} required/>
              </FormGroup>
            </Form>
            <Form inline onSubmit={this.submitCategory}>
              <FormGroup className="col-sm-10 pl-0">
                <Label className="text-align-left col-sm-2">Category</Label>     
                <Input type="select" name="category" className="col-sm-10" onChange={this.handlerCategory}>
                  {this.props.allCategory.map((el:Category)=>(<option value={el.categoryId}>{el.categoryName}</option>))}
                </Input>
              </FormGroup>
              <Button color="primary" className="col-sm-2">Search</Button>
            </Form>
            <Form onSubmit={this.submitCurriculum}>
              <Button color="primary" type="submit" className="my-3 col-sm-12">Submit</Button>
            </Form>
            {this.state.alert && <Alert color="warning">{this.state.alert}</Alert>}
            <Form>
              <FormGroup>
                {this.state.existSkillList.length!==0 &&
                  <React.Fragment>
                    <Label>Selected Skills</Label>
                    {this.state.existSkillList.map((el:Skill)=>
                      <Card style={{backgroundColor:el.category.categoryColor}}>
                        <CardBody>
                          <CardTitle>{el.skillName}</CardTitle>
                          <Button color="danger" onClick={(e:SyntheticEvent)=>this.handlerRemoveSkill(e,el)}>Remove</Button>
                        </CardBody>
                      </Card>
                    )}
                  </React.Fragment>
                }
                {this.state.notExistSkillList.length!==0 &&
                  <React.Fragment>
                    <Label>Available Skills</Label>
                    {this.state.notExistSkillList.map((el:Skill)=>
                      <Card style={{backgroundColor:el.category.categoryColor}}>
                        <CardBody>
                          <CardTitle>{el.skillName}</CardTitle>
                          <Button color="primary" onClick={(e:SyntheticEvent)=>this.handlerAddSkill(e,el)}>Add</Button>
                        </CardBody>
                      </Card>
                    )}
                  </React.Fragment>
                }
              </FormGroup>
            </Form>
            {this.state.isLoading && <Alert>Loading</Alert>}
          </Col>
        </Row>
      </Container>
    )
  }
}