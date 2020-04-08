import { combineReducers } from "redux";
<<<<<<< HEAD
import { getAllSkillsReducer } from "./get-all-skills-reducer";
import { Curriculum } from "../components/models/Curriculum";
import { Skill } from "../components/models/Skill";
import { Category } from "../components/models/Category";
import { updateSkillReducer } from "./update-skill";

export interface IGetAllSkillState{
    allSkills:[]
    errorMessage:string
}

export interface ICreateSkillState{
    createdSkill:Skill
    listCategories:Category[]
    errorMessage:string
=======
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
>>>>>>> dev
}

export interface ICurriculumState{
  curriculum:Curriculum
  errorMessage:string
}
export interface IState {
    getAllSkills:IGetAllSkillState
    updateSkillsState:IUpdateSkillState
}
export interface IUpdateSkillState{
    skillToUpdate:Skill
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
<<<<<<< HEAD
    getAllSkills:getAllSkillsReducer,
    updateSkillsState:updateSkillReducer,
=======
  getAllSkills:getAllSkillsReducer,
  createCurriculum:curriculumReducer,
  allCategory:categoriesReducer
>>>>>>> dev
})