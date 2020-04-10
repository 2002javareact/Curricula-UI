import { combineReducers } from "redux";
import { Curriculum } from "../models/Curriculum";
import { curriculumReducer } from "./get-all-curriculums-reducers";
import { updateReducer } from "./update-curriculum-reducer";
import { Skill } from "../models/Skill";
import { skillsReducer } from "./skills-reducers";
import { categoriesReducer } from "./category-reducer";
import { getCurriculumByIdReducer } from "./get-curriculum-by-id-reducer";

import { Category } from "../models/Category";
import { Visualization } from "../models/Visualization";
import { visualizationReducer } from "./visualization-reducer";
import { allCurriculumReducer } from "./all-curriculum-reducer";
import { getSkillsByCategoryIdReducer } from "./get-skill-category-reducer";

export interface IAllCurriculumState {
  curriculumList:Array<Curriculum>,
  errorMessage:string
}

export interface IGetSkillsByCategoryIdState{
  skillsByCategoryId:Skill[],
  errorMessage:string
}

//export interface ICreateSkillState{
export interface ISkillState{
  createdSkill:Skill
  allSkills:Skill[]
  errorMessage:string
}

export interface ICurriculumState{
  curriculum:Curriculum
  errorMessage:string
}

export interface IViewCurriculumState{
  updateCurriculum:Curriculum
  errorMessage:string
}
export interface ICategoriesState{
  allCategory:[]
  errorMessage:string
}
export interface ICreateVIsualizationState{
    createVIsualization:Skill
    listCurriculum:Curriculum[]
    errorMessage:string
  }

export interface IViewAllVisualizationsState{
  // allVisualizations:Visualization[]
  errorMessage: string
}

export interface IGetCurriculumByIdState{
  getCurriculumById:Curriculum
  errorMessage:string
}
export interface ICreateVIsualizationState{
    createVIsualization:Skill
    listCurriculum:Curriculum[]
    errorMessage:string
  }

export interface IViewAllVisualizationsState{
  allVisualizations:Visualization[]
  errorMessage: string
}

export interface IState {
  //getAllSkills:IGetAllSkillState
  skillsByCategoryId:IGetSkillsByCategoryIdState
  createCurriculum:ICurriculumState
  allCategory:ICategoriesState
  updateCurriculum:IViewCurriculumState
  getCurriculumById:IGetCurriculumByIdState
  skills:ISkillState
  curriculum:ICurriculumState,
  allCurriculum:IAllCurriculumState
  allVisualizations: IViewAllVisualizationsState

}

export const state = combineReducers<IState>({
  updateCurriculum:updateReducer,
  getCurriculumById:getCurriculumByIdReducer,
  //getAllSkills:getAllSkillsReducer,
  skillsByCategoryId:getSkillsByCategoryIdReducer,
  skills:skillsReducer,
  curriculum: curriculumReducer,
  allCurriculum: allCurriculumReducer,
  createCurriculum:curriculumReducer,
  allCategory:categoriesReducer,
  allVisualizations:visualizationReducer,
})