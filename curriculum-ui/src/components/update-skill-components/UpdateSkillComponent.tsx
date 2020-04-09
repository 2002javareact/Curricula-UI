
import { Card, CardText, Container, Row, Col, Label, Input } from "reactstrap"
import React from "react"
import {Form, FormGroup} from 'reactstrap';
import { SyntheticEvent } from 'react';
import { Curriculum } from '../../models/Curriculum';
import { Skill } from "../../models/Skill";
import { Category } from "../../models/Category";



export interface IUpdateSkillState{
    errorMessage:string
    allCategories:Category[]
    updateSkillActionMapper:(skillToUpdate:Skill)=>void
    getAllCategoriesActionMapper:()=>void
}


export class UpdateSkillComponent extends React.Component<IUpdateSkillState,any>{
    componentDidMount(){
        if(this.props.allCategories.length === 0)
            return (this.props.getAllCategoriesActionMapper())

        else{}
    }
    constructor(props:any){
        super(props)
        this.state={
            id:0,
            category:new Category(0,'',''),
            name:'',
        }
        this.setId=this.setId.bind(this);
        this.setName=this.setName.bind(this);
        this.setCategory=this.setCategory.bind(this);
        this.updateSkill=this.updateSkill.bind(this);
    }
    
    updateSkill(){
        if(this.state.id === 0){
            let updateSkill = new Skill(this.state.id, this.state.name, this.state.category)
            return (this.props.updateSkillActionMapper(updateSkill))
        }else{

        }
    }
    setId(e:any){
        this.setState({id:e.target.value})
    }
    setName(e:any){
        
        this.setState({name:e.target.value})
    }
    setCategory(e:any){
        console.log(e.target.value);
        
        this.setState({category:e.target.value})
    }
    
    render(){
        if(this.props.allCategories.length === 0){

        }else{
            let listOfCategories = this.props.allCategories.map((category:Category)=>{
                return(
                <option onSubmit={this.state.setCategory}>{category.categoryName}</option>
                )
            })
        }
        return(
            <Container>
            <Card style={{width: "18rem"}}>
            <Form>
                <FormGroup>
                    <Input type="number" onChange={this.setId} placeholder="Id Number" value={this.state.id}></Input>
                </FormGroup>
                <FormGroup>
                    <Input type="text" onChange={this.setName} placeholder="Name:" value={this.state.name}></Input>
                </FormGroup>
                <FormGroup>
                    <Input type="text" onChange={this.setCategory} placeholder="Category:" value={this.state.category}></Input>
                </FormGroup>
            </Form>
            </Card>
            </Container>
        )
    }
}
