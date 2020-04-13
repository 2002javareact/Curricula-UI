import { AnyAction } from "redux"
import { Curriculum } from '../models/Curriculum';
import {updateCurriculumTypes} from '../action-mappers/update-curriculum-action-mapper';
import {IViewCurriculumState} from '.';



const initialState:IViewCurriculumState = {
    updateCurriculum:new Curriculum(0,'',[]),
    errorMessage:''
  }


  export const updateReducer = (state=initialState,action:AnyAction)=>{

    switch(action.type){
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