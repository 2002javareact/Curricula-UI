import { combineReducers } from "redux";
import { Curriculum } from "../models/Curriculum";
import { curriculumReducer } from "./curriculum-reducer";
import { Skill } from "../models/Skill";
import { Category } from "../models/Category";
import { getAllSkillsReducer } from "./view-all-skills-reducers";
import { categoriesReducer } from "./category-reducer";

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

export interface ICategoriesState{
  allCategory:Category[]
  errorMessage:string
}

export interface IState {
  getAllSkills:IGetAllSkillState
  createCurriculum:ICurriculumState
  allCategory:ICategoriesState

}

export const state = combineReducers<IState>({
  getAllSkills:getAllSkillsReducer,
  createCurriculum:curriculumReducer,
  allCategory:categoriesReducer
})