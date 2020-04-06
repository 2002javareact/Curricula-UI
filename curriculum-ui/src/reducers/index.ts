import { combineReducers } from "redux";
import { Curriculum } from "../models/Curriculum";
import { curriculumReducer } from "./curriculum-reducer";


export interface IState {
  curriculum:ICurriculumState
}

export interface ICurriculumState {
  curriculum:Curriculum,
  errorMessage:string
}

export const state = combineReducers<IState>({
  curriculum: curriculumReducer
})