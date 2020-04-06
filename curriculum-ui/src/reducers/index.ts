import { combineReducers } from "redux";
import { getAllSkillsReducer } from "./get-all-skills-reducer";
import { Curriculum } from "../components/models/Curriculum";
import { Skill } from "../components/models/Skill";
import { Category } from "../components/models/Category";

export interface IGetAllSkillState{
    allSkills:[]
    errorMessage:string
}

export interface ICreateSkillState{
    createdSkill:Skill
    listCategories:Category[]
    errorMessage:string
}

export interface ICurriculumState{
  curriculum:Curriculum
  errorMessage:string
}
export interface IState {
    getAllSkills:IGetAllSkillState

}

export const state = combineReducers<IState>({
    getAllSkills:getAllSkillsReducer
})