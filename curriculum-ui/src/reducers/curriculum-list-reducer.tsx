import { Curriculum } from "../models/Curriculum"
import { AnyAction } from "redux"
import { curriculumListTypes } from "../action-mappers/view-curriculum-list-action-mapper"
import { ICurriculumListState } from '.'

const initialState:ICurriculumListState = {
  curriculumList:[],
  errorMessage:''
}

export const curriculumListReducer = (state=initialState,action:AnyAction)=>{
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