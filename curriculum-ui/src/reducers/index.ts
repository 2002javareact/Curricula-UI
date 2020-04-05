import { combineReducers } from "redux";
import { getAllSkillsReducer } from "./getAllSkillsReducer";

export interface IgetAllSkillState{
    allSkills:[]
    errorMessage:string
}
export interface IState {
    getAllSkills:IgetAllSkillState
}

export const state = combineReducers<IState>({
    getAllSkills:getAllSkillsReducer
})