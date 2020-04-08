import { Skill } from "../models/Skill"
import { Card, CardText, Container, Row, Col, Label, Input } from "reactstrap"
import React from "react"
import {Form, FormGroup} from 'reactstrap';
import { SyntheticEvent } from 'react';
import { Curriculum } from '../models/Curriculum';



export interface IUpdateSkillState{
    errorMessage:string
    updateSkillActionMapper:(skillToUpdate:Skill)=>void
}


export class UpdateSkillComponent extends React.Component<IUpdateSkillState,any>{
    componentDidMount(){
        this.setState({
            id:0,
            category:'',
            name:'',
        })
    }

    update(){
        if(this.state.id === 0){
            let updateSkill = new Skill(this.state.id, this.state.name, this.state.category)
            return (this.props.updateSkillActionMapper(updateSkill))

        }else{

        }
    }
    setId(e:any){
        this.setState({id:e})
    }
    setName(e:any){
        this.setState({id:e})
    }
    setCategory(e:any){
        this.setState({id:e})
    }
    
    render(){
        return(
            <Form>
                <FormGroup>
                    <Input type="number" onChange={this.setId} placeholder="Id Number" defaultValue={this.state.id}></Input>
                </FormGroup>
                <FormGroup>
                    <Input type="text" onChange={this.setName} placeholder="Name:" defaultValue={this.state.name}></Input>
                </FormGroup>
                <FormGroup>
                    <Input type="text" onChange={this.setCategory} placeholder="Category:" defaultValue={this.state.category}></Input>
                </FormGroup>
            </Form>
        )
    }
}
