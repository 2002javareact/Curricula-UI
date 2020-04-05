import React, { SyntheticEvent } from "react";
import { Skill } from "./models/Skill";
import { Category } from "./models/category";

export interface ICreateSkillProps{
    createdSkill: Skill
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
         
            <p></p>
        )
    }
}