
import { Skill } from "../../models/Skill";
import { Category } from "../../models/Category";
import { Input, Container,UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, Button, Row, Card } from "reactstrap";
import React, { SyntheticEvent } from "react";
import { Redirect } from "react-router";





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
            this.props.createdSkill.skillId === 0?               
            <>  
            &nbsp;
              <Container className=".container-md ">
                        <Form onSubmit = {this.submit}>
                        <Row className="justify-content-md-center"> 
                        <Card className="col-6 shadow-custom2">
                        &nbsp;
                        <Row className="justify-content-md-center">
                        
                            <Input onChange={this.updateSkillName} className = "skillNameInputCreate" value={this.state.skillName} type="text" placeholder="Skill Name" required />
                        <UncontrolledButtonDropdown>
                        <DropdownToggle color="info" caret>
                            {/**category label */}
                            {this.state.label}
                        </DropdownToggle>
                        <DropdownMenu  className = "categoryDropDown">
                           {view}
                        </DropdownMenu>
                        </UncontrolledButtonDropdown>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Button color="primary" className = "createButton">Create</Button>
                        </Row>
                        &nbsp;
                        </Card>
                        </Row>
                        </Form>   
                        </Container>  
                        <p>{this.props.errorMessage}</p>               
            </>
            :
            <Redirect to = "/skills"/>
         
        )
    }
}