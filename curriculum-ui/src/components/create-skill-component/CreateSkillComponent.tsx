
import { Skill } from "../../models/Skill";
import { Category } from "../../models/Category";
import { Input, Container, Row, Col, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, Button } from "reactstrap";
import React, { SyntheticEvent } from "react";


export interface ICreateSkillProps{
    createdSkill: Skill
    errorMessage: string
    createSkillActionMapper:(n:string, c:Category)=>void
}

export interface ICreateSkillState{
    skillName:string
    category:String[]

}

export class CreateSkillComponent extends React.Component<ICreateSkillProps,ICreateSkillState>{
    constructor(props:any){
        super(props)
        this.state = {
            skillName:'',
            category:["database", "sourcecode", "framework", "ide", "devops", "architecture" ]
        }
    }

    submit =  async (e: SyntheticEvent) =>{
        e.preventDefault()
        this.props.createSkillActionMapper(this.state.skillName,new Category(0,'',''))

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
                            <DropdownItem>{this.state.category[0]}</DropdownItem>
                            <DropdownItem >{this.state.category[1]}</DropdownItem>
                            <DropdownItem>{this.state.category[2]}</DropdownItem>
                            <DropdownItem>{this.state.category[3]}</DropdownItem>
                            <DropdownItem>{this.state.category[4]}</DropdownItem>
                            <DropdownItem>{this.state.category[5]}</DropdownItem>
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