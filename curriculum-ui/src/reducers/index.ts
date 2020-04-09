import { combineReducers } from "redux";
import { Curriculum } from "../models/Curriculum";
import { curriculumReducer } from "./curriculum-reducer";
import { Skill } from "../models/Skill";
import { skillsReducer } from "./skills-reducers";
import { categoriesReducer } from "./category-reducer";
import { Category } from "../models/Category";

export interface ISkillState{
  createdSkill:Skill
  allSkills:Skill[]
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
  skills:ISkillState
  createCurriculum:ICurriculumState
  allCategory:ICategoriesState

}

export const state = combineReducers<IState>({
  skills:skillsReducer,
  createCurriculum:curriculumReducer,
  allCategory:categoriesReducer
})