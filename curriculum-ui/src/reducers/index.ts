import { combineReducers } from "redux";
import { Curriculum } from "../models/Curriculum";
import { curriculumReducer } from "./curriculum-reducer";
import { curriculumListReducer } from "./curriculum-list-reducer";


export interface IState {
  curriculum:ICurriculumState,
  curriculumList:ICurriculumListState
}

export interface ICurriculumListState {
  curriculumList:Array<Curriculum>,
  errorMessage:string
}

export interface ICurriculumState {
  curriculum:Curriculum,
  errorMessage:string
}

export const state = combineReducers<IState>({
  curriculum: curriculumReducer,
  curriculumList: curriculumListReducer
})