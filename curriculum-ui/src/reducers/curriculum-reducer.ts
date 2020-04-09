import { Curriculum } from "../models/Curriculum"
import { AnyAction } from "redux"
import { curriculumTypes } from "../action-mappers/create-curriculum-action-mapper"
import { ICurriculumState } from '.'

const initialState:ICurriculumState = {
  curriculum:new Curriculum(0,'',[]),
  errorMessage:''
}

export const curriculumReducer = (state=initialState,action:AnyAction)=>{
  switch(action.type){
    case curriculumTypes.CREATE_CURRICULUM:{
      return {
        ...state,
        curriculum:action.payload.curriculum
      }
    }
    case curriculumTypes.FAILED_TO_CREATE_CURRICULUM:{
      return {
        ...state,
        errorMessage:action.payload.errorMessage
      }
    }
    default: return state;
  }
}