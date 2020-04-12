import { combineReducers } from "redux";
import { Curriculum } from "../models/Curriculum";
import { curriculumReducer } from "./curriculum-reducer";
import { allCurriculumReducer } from "./all-curriculum-reducer";
import { Skill } from "../models/Skill";
import { Category } from "../models/Category";
import { getAllSkillsReducer } from "./view-all-skills-reducers";
import { categoriesReducer } from "./category-reducer";
import { Visualization } from "../models/Visualization";
import { visualizationReducer } from "./visualization-reducer";

export interface IGetAllSkillState {
  allSkills: [];
  errorMessage: string;
}

export interface IAllCurriculumState {
  curriculumList: Array<Curriculum>;
  errorMessage: string;
}
export interface ICreateSkillState {
  createdSkill: Skill;
  listCategories: Category[];
  errorMessage: string;
}

export interface ICurriculumState {
  curriculum: Curriculum;
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

export interface IViewAllVisualizationsState {
  allVisualizations: Visualization[];
  errorMessage: string;
}

export interface IState {
  getAllSkills: IGetAllSkillState;
  createCurriculum: ICurriculumState;
  allCategory: ICategoriesState;
  curriculum: ICurriculumState;
  allCurriculum: IAllCurriculumState;
  allVisualizations: IViewAllVisualizationsState;
}

export const state = combineReducers<IState>({
  curriculum: curriculumReducer,
  allCurriculum: allCurriculumReducer,
  getAllSkills: getAllSkillsReducer,
  createCurriculum: curriculumReducer,
  allCategory: categoriesReducer,
  allVisualizations: visualizationReducer
});
