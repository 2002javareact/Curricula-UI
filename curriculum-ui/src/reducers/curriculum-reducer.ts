import { Curriculum } from "../models/Curriculum"
import { AnyAction } from "redux"
import { curriculumTypes } from "../action-mappers/create-curriculum-action-mapper"
import { curriculumListTypes } from "../action-mappers/view-curriculum-list-action-mapper"
import { updateCurriculumTypes } from '../action-mappers/update-curriculum-action-mapper';
import { getCurriculumTypes } from '../action-mappers/get-curriculum-by-id-action-mapper'
import { ICurriculumState } from '.'

const initialState:ICurriculumState = {
  curriculum:new Curriculum(0,'',[]),
  createCurriculum: new Curriculum(0,'',[]),
  curriculumList: [],
  updateCurriculum: new Curriculum(0,'',[]),
  errorMessage: ""
}

export const curriculumReducer = (state=initialState,action:AnyAction)=>{
  switch(action.type){
    case curriculumTypes.CREATE_CURRICULUM:{
      return {
        ...state,
        createCurriculum:action.payload.createCurriculum
      }
    }
    case curriculumTypes.FAILED_TO_CREATE_CURRICULUM:{
      return {
        ...state,
        errorMessage:action.payload.errorMessage
      }
    }
    case getCurriculumTypes.GET_CURRICULUM:{
      return {
        ...state,
        curriculum:action.payload.curriculum
      }
    }
    case getCurriculumTypes.FAILED_TO_GET_CURRICULUM:{
      return {
        ...state,
        errorMessage:action.payload.errorMessage
      }
    }
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
    case updateCurriculumTypes.UPDATE_CURRICULUM:{
      return {
        ...state,
        updateCurriculum:action.payload.updateCurriculum
      }
    }
    case updateCurriculumTypes.FAILED_TO_VIEW_AND_UPDATE_CURRICULUM:{
      return {
        ...state,
        errorMessage:action.payload.errorMessage
      }
    }
    default: return state;
  }
}