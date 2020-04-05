import React from "react";
import { skill } from "../models/skill";
import { Category } from "../models/category";
import { SyntheticEvent } from "react";
import { Input, Container, Row, Col } from "reactstrap";


export interface ICreateSkillProps{
    createdSkill: skill
    errorMessage: string
    createSkillActionMapper:(n:string, c:Category)=>void
}

export interface ICreateSkillState{
    skillName:string
    category:string
}

export class createSkillComponent extends React.Component<ICreateSkillProps,ICreateSkillState>{
    constructor(props:any){
        super(props)
        this.state = {
            skillName:'',
            category:''
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
                    <Row xs= "2">
                        <Col>
                            <Input onChange={this.updateSkillName} value={this.state.skillName} type="text" placeholder="skill name" required />
                        </Col>
                        <Col>
                            
                        </Col>
                    </Row>
                 </Container>
            </>
         
        )
    }
}