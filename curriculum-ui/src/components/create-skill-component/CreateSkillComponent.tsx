
import { Skill } from "../../models/Skill";
import { Category } from "../../models/Category";
import { Input, Container,UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, Button, Row, Card } from "reactstrap";
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
    label:string
}

export class CreateSkillComponent extends React.Component<ICreateSkillProps,ICreateSkillState>{
    constructor(props:any){
        super(props)
        this.state = {
            skillName:'',
            category: new Category(0,'',''),
            label:"Category"
        }      
    }
    componentDidMount() {

          return (this.props.getAllCategoriesActionMapper())

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
            category,
            label:category.categoryName
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
                <Container style={{width: "30rem"}}>                    
                        <Form onSubmit = {this.submit}>
                        <Row>
                            <Input onChange={this.updateSkillName} className = "skillNameInput" value={this.state.skillName} type="text" placeholder="skill name" required />
                        <UncontrolledButtonDropdown>
                        <DropdownToggle caret>
                            {this.state.label}
                        </DropdownToggle>
                        <DropdownMenu>
                           {view}
                        </DropdownMenu>
                        </UncontrolledButtonDropdown>
                            <Button>Create</Button>
                            </Row>
                        </Form>                    
                 </Container>
            </>
         
        )
    }
}