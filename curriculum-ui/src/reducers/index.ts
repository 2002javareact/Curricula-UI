import { combineReducers } from "redux";
import { getAllSkillsReducer } from "./getAllSkillsReducer";
import { Curriculum } from "../components/models/Curriculum";

export interface IgetAllSkillState{
    allSkills:[]
    errorMessage:string
}

export interface ICurriculumState{
  curriculum:Curriculum
  errorMessage:string
}
export interface IState {
    getAllSkills:IgetAllSkillState
}



export const state = combineReducers<IState>({
    getAllSkills:getAllSkillsReducer
})