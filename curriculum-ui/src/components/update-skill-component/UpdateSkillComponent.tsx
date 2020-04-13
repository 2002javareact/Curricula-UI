import { Category } from "../../models/Category";
import { Skill } from "../../models/Skill";
import React, { SyntheticEvent } from "react";
import { Container, Form, FormGroup, Input, DropdownItem, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, Button, Row } from "reactstrap";
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
        console.log("here");
          
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
<<<<<<< HEAD
=======
                <br/><br/>
>>>>>>> c8779e0a1750b73e396219d1470218bd07d4e543
            <Form onSubmit = {this.submit}>
                <Row className="maxHeight">
                <UncontrolledButtonDropdown className = "skillDropDown">
                    <DropdownToggle caret>
                       {this.state.skillLabel}
                    </DropdownToggle>
                    <DropdownMenu>
                        {dropSkills}
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
                <UncontrolledButtonDropdown>
                    <DropdownToggle caret>
                        {this.state.categoryLabel}
                    </DropdownToggle>
                    <DropdownMenu className = "categoryDropDown"> 
                        {dropCategories}
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
                <FormGroup>
                <Input onChange={this.updateSkillName} className = "skillNameInput" value={this.state.name} type="text" placeholder="new name" />
                </FormGroup>
                </Row>
                <Button className= "updateButton">Update</Button>
            </Form>
            </>
            :
            <Redirect to = "/skills"/>
        )
    }
}