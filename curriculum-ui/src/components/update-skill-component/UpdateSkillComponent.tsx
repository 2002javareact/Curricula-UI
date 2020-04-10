import { Category } from "../../models/Category";
import { Skill } from "../../models/Skill";
import React, { SyntheticEvent } from "react";
import { Container, Card, Form, FormGroup, Input, DropdownItem, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, Button } from "reactstrap";

export interface IUpdateSkillProp{
    errorMessage:string
    allCategory:Category[]
    allSkills:Skill[]
    skillToUpdate:Skill
    viewAllSkillsActionMapper:()=>void
    updateSkillActionMapper:(skillToUpdate:Skill)=>void
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
    componentDidMount() {
        if (this.props.allCategory.length === 0 && this.props.allSkills.length === 0) {
          return (this.props.getAllCategoriesActionMapper(), this.props.viewAllSkillsActionMapper())
        }
        else { }
      }
    constructor(props:any){
        super(props)
        this.state={
            skill:new Skill(0,'',new Category(0,'','')),
            category:new Category(0,'',''),
            name:'',
            skillLabel:"Skill",
            categoryLabel:"Category"
        }
    }

    submit =  async (e: SyntheticEvent) =>{
        e.preventDefault()
        this.props.updateSkillActionMapper(new Skill(this.state.skill.skillId,this.state.name, this.state.category))

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
            
            <Container>
                <br/><br/><br/>
            <Card style={{width: "18rem"}}>
            <Form>
                <UncontrolledButtonDropdown>
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
                    <DropdownMenu>
                        {dropCategories}
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
                <FormGroup>
                <Input onChange={this.updateSkillName} className = "skillNameInput" value={this.state.name} type="text" placeholder="skill name" />
                </FormGroup>
                <Button>Update</Button>
            </Form>
            </Card>
            </Container>
        )
    }
}