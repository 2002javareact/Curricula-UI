import { Curriculum } from "../models/Curriculum";
import { IGetCurriculumByIdState } from '.';
import {getCurriculumTypes} from '../action-mappers/get-curriculum-by-id-action-mapper'
import { AnyAction } from "redux";


const initialState:IGetCurriculumByIdState = {
    getCurriculumById:new Curriculum(0,'',[]),
    errorMessage:''
  }


  
  export const getCurriculumByIdReducer = (state=initialState,action:AnyAction)=>{

    switch(action.type){
        case getCurriculumTypes.GET_CURRICULUM:{
          return {
            ...state,
            getCurriculumById:action.payload.getCurriculumById
          }
        }
        case getCurriculumTypes.FAILED_TO_GET_CURRICULUM:{
          return {
            ...state,
            errorMessage:action.payload.errorMessage
          }
        }
        default: return state;
      }
    }

