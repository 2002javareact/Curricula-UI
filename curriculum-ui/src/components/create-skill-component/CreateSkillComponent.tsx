
import { Skill } from "../../models/Skill";
import { Category } from "../../models/Category";
import { Input, Container, Row, Col, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, Button } from "reactstrap";
import React, { SyntheticEvent } from "react";




export interface ICreateSkillProps{
    createdSkill: Skill
    allCategory:Category[]
    errorMessage: string
    createSkillActionMapper:(n:string, c:Category)=>void    
    getAllCategoriesActionMapper: () => void
}

export interface ICreateSkillState{
    skillName:string
    category:Category
}

export class CreateSkillComponent extends React.Component<ICreateSkillProps,ICreateSkillState>{
    constructor(props:any){
        super(props)
        this.state = {
            skillName:'',
            category: new Category(0,'','')
        }      
    }
    componentDidMount() {
        if (this.props.allCategory.length === 0) {
          return (this.props.getAllCategoriesActionMapper())
        }
        else { }
      }

    submit =  async (e: SyntheticEvent) =>{
        e.preventDefault()
        this.props.createSkillActionMapper(this.state.skillName, this.state.category)

    }

    updateSkillName = (e: any) => {
        this.setState({
            skillName: e.currentTarget.value
        })
    }
    updateCategory = (category:Category) => (e:any) =>{
        this.setState({
            category
        })
    }

    
 
    render(){
        let view = this.props.allCategory.map((category) =>{
            return (
                <DropdownItem onClick= {this.updateCategory(category)}>{category.categoryName}</DropdownItem>
            )})
        return(                
            <>  
                <br/><br/><br/>
                <Container>
                        <Form onSubmit = {this.submit}>
                            <Input onChange={this.updateSkillName} className = "skillNameInput" value={this.state.skillName} type="text" placeholder="skill name" required />
                        <UncontrolledButtonDropdown>
                        <DropdownToggle caret>
                            Category
                        </DropdownToggle>
                        <DropdownMenu>
                           {view}
                        </DropdownMenu>
                        </UncontrolledButtonDropdown>
                            <Button>Create</Button>
                        </Form>
                 </Container>
            </>
         
        )
    }
}