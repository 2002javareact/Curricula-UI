import { combineReducers } from "redux";
import { Curriculum } from "../models/Curriculum";
import { curriculumReducer } from "./curriculum-reducer";
import { allCurriculumReducer } from "./all-curriculum-reducer";
import { Skill } from "../models/Skill";
import { skillsReducer } from "./skills-reducers";
import { categoriesReducer } from "./category-reducer";
import { Category } from "../models/Category";
import { Visualization } from "../models/Visualization";
import { visualizationReducer } from "./visualization-reducer";
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
  skillToUpdate:Skill
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
  skills:ISkillState
  createCurriculum:ICurriculumState
  allCategory:ICategoriesState
  curriculum:ICurriculumState,
  allCurriculum:IAllCurriculumState
  allVisualizations: IViewAllVisualizationsState

}

export const state = combineReducers<IState>({
  //getAllSkills:getAllSkillsReducer,
  skillsByCategoryId:getSkillsByCategoryIdReducer,
  skills:skillsReducer,
  curriculum: curriculumReducer,
  allCurriculum: allCurriculumReducer,
  createCurriculum:curriculumReducer,
  allCategory:categoriesReducer,
  allVisualizations:visualizationReducer,
})