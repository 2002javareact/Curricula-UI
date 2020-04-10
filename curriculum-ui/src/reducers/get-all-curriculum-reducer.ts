import { Curriculum } from "../models/Curriculum"
import { AnyAction } from "redux"
import { curriculumListTypes } from "../action-mappers/get-all-curriculum-action-mapper"
import { IAllCurriculumState } from '.'

const initialState:IAllCurriculumState = {
  curriculumList:[],
  errorMessage:''
}

export const allCurriculumReducer = (state=initialState,action:AnyAction)=>{
  switch(action.type){
    case curriculumListTypes.CURRICULUM_LIST_SUCCESSFUL:{
      return {
        ...state,
        curriculumList: action.payload.curriculumList
      }
    }
    case curriculumListTypes.CURRICULUM_LIST_FAILED:{
      return {
        ...state,
        errorMessage: action.payload.errorMessage
      }
    }
    default: return state;
  }
}