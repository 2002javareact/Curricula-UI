
import { Skill } from "../../models/Skill";
import { Category } from "../../models/Category";
import { Input, Container, Row, Col, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, Button } from "reactstrap";
import React, { SyntheticEvent } from "react";


export interface ICreateSkillProps{
    createdSkill: Skill
    categories:Category[]
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
        if (this.props.categories.length === 0) {
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
    updateCategory = (e:any) =>{
        this.setState({
            category:e.currentTarget.value
        })
    }

    
 
    render(){
        let view = this.props.categories.map((category) =>{
            return (
                <DropdownItem onChange={this.updateCategory}>{category.categoryName}</DropdownItem>
            )})

        return(                
            <>
                <Container className = "skillNameInput">
                    <Row xs= "3">
                        <Form onSubmit = {this.submit}>
                        <Col>
                            <Input onChange={this.updateSkillName} value={this.state.skillName} type="text" placeholder="skill name" required />
                        </Col>
                        <Col>
                        <UncontrolledButtonDropdown>
                        <DropdownToggle caret>
                            Category
                        </DropdownToggle>
                        <DropdownMenu>
                           {view}
                        </DropdownMenu>
                        </UncontrolledButtonDropdown>
                        </Col>
                        <Col>
                            <Button>Create</Button>
                        </Col>
                        </Form>
                    </Row>
                 </Container>
            </>
         
        )
    }
}