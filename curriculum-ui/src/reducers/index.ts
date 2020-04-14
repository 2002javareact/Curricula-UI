import { combineReducers } from "redux";
import { Curriculum } from "../models/Curriculum";
import { Skill } from "../models/Skill";
import { skillsReducer } from "./skills-reducers";
import { categoriesReducer } from "./category-reducer";
import { Category } from "../models/Category";
import { Visualization } from "../models/Visualization";
import { visualizationReducer } from "./visualization-reducer";
import { curriculumReducer } from './curriculum-reducer';
import { getSkillsByCategoryIdReducer } from "./get-skill-category-reducer";

export interface IGetAllSkillState {
  allSkills: [];
  errorMessage: string;
}

export interface ICreateSkillState {
  createdSkill: Skill;
  listCategories: Category[];
  errorMessage: string;
}

export interface IGetSkillsByCategoryIdState {
  skillsByCategoryId: Skill[];
  errorMessage: string;
}

export interface ISkillState {
  createdSkill: Skill;
  allSkills: Skill[];
  updatedSkill: Skill;
  errorMessage: string;
}

export interface ICurriculumState {
  createCurriculum: Curriculum;
  curriculum: Curriculum;
  curriculumList: Array<Curriculum>;
  updateCurriculum: Curriculum;
  errorMessage: string;
}

export interface ICategoriesState {
  allCategory: [];
  updatedCategory: Category;
  errorMessage: string;
}
export interface ICreateVIsualizationState {
  createVIsualization: Skill;
  listCurriculum: Curriculum[];
  errorMessage: string;
}

export interface IViewCurriculumState {
  errorMessage: string;
}
export interface ICategoriesState {
  allCategory: [];
  errorMessage: string;
}

export interface IGetCurriculumByIdState {
  getCurriculumById: Curriculum;
  errorMessage: string;
}
export interface ICreateVIsualizationState {
  createVIsualization: Skill;
  listCurriculum: Curriculum[];
  errorMessage: string;
}

export interface IViewAllVisualizationsState {
  allVisualizations: Visualization[];
  errorMessage: string;
  visualization: Visualization;
}

export interface IState {
  //getAllSkills:IGetAllSkillState
  skillsByCategoryId: IGetSkillsByCategoryIdState;
  allCategory: ICategoriesState;
  skills: ISkillState;
  curriculum: ICurriculumState;
  allVisualizations: IViewAllVisualizationsState;
}

export const state = combineReducers<IState>({
  //getAllSkills:getAllSkillsReducer,
  skillsByCategoryId: getSkillsByCategoryIdReducer,
  skills: skillsReducer,
  curriculum: curriculumReducer,
  allCategory: categoriesReducer,
  allVisualizations: visualizationReducer
});
