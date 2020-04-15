import { Category } from "../../models/Category";
import { Skill } from "../../models/Skill";
import React, { SyntheticEvent } from "react";
import { Container, Form, FormGroup, Input, DropdownItem, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, Button, Row, Card } from "reactstrap";
import { Redirect } from "react-router";

export interface IUpdateSkillProp{
    errorMessage:string
    allCategory:Category[]
    allSkills:Skill[]
    skillToUpdate:Skill
    viewAllSkillsActionMapper:()=>void
    updateSkillActionMapper:(id:number, name:string, category:Category)=>void
    getAllCategoriesActionMapper:()=>void
}
export interface IUpdateSkillState{
    skill:Skill;
    category:Category
    name:string
    skillLabel:string
    categoryLabel:string
}


export class UpdateSkillComponent extends React.Component<IUpdateSkillProp,IUpdateSkillState>{
    
    constructor(props:any){
        super(props)
        this.state={
            skill:new Skill(0,'',new Category(0,'','')),
            category:new Category(0,'',''),
            name:'',
            skillLabel:"Skill",
            categoryLabel:"Category"
        }

    this.updateSkill=this.updateSkill.bind(this);
    this.updateCategory=this.updateCategory.bind(this);
    this.updateSkillName=this.updateSkillName.bind(this);
    this.submit=this.submit.bind(this);

    }

    componentDidMount() {
        return (this.props.getAllCategoriesActionMapper(), this.props.viewAllSkillsActionMapper())
     
    }
    submit =  async (e: SyntheticEvent) =>{
        e.preventDefault()             
        this.props.updateSkillActionMapper(this.state.skill.skillId,this.state.name, this.state.category)
        this.forceUpdate()
    }
    updateSkill = (skill:Skill) => (e:any) =>{
        this.setState({
            skill,
            skillLabel:skill.skillName
        })
    }
    
    updateCategory = (category:Category) => (e:any) =>{
        this.setState({
            category,
            categoryLabel:category.categoryName
        })
    }

    updateSkillName(e:any){
        
        this.setState({name:e.target.value})
    }
    
    render(){
        
        let dropCategories = this.props.allCategory.map((category) =>{
            return (
                <DropdownItem onClick= {this.updateCategory(category)}>{category.categoryName}</DropdownItem>
            )})
        let dropSkills = this.props.allSkills.map((skill)=>{
            return (
                <DropdownItem onClick= {this.updateSkill(skill)}>{skill.skillName}</DropdownItem>
            )
        })
        
        return(
            this.props.skillToUpdate.skillId === 0?
            <>
            &nbsp;
            <Row className="d-flex justify-content-center">
                
           <Form onSubmit = {this.submit}>
            
            <Card className="col-12 shadow-custom2">
            &nbsp;
            <Row className="d-flex justify-content-center ">
             
                <UncontrolledButtonDropdown>
                    <DropdownToggle color="info" caret>
                       {this.state.skillLabel}
                    </DropdownToggle>
                    <DropdownMenu>
                        {dropSkills}
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
                
                <UncontrolledButtonDropdown className="skillDropDown">
                    <DropdownToggle color="info" caret>
                        {this.state.categoryLabel}
                    </DropdownToggle>
                    <DropdownMenu className = "categoryDropDown"> 
                        {dropCategories}
                    </DropdownMenu>
                </UncontrolledButtonDropdown>

                <Input onChange={this.updateSkillName} className = "mx-1 col-6" value={this.state.name} type="text" placeholder="New Name" />
                
                </Row>
                
                <Row className="d-flex justify-content-center">
                <Button color="primary" className= "col-3 updateButton">Update</Button>
                </Row>
                &nbsp;
                </Card>
            </Form>
            </Row>
            <p>{this.props.errorMessage}</p> 
            </>
            :
            <Redirect to = "/skills"/>
        )
    }
}