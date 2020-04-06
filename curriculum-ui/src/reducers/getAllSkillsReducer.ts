import { AnyAction } from "redux";
import { IgetAllSkillState } from ".";
import { getAllSkillTypes } from "../action-mappers/view-all-skill-action-mapper";

const initialState:IgetAllSkillState = {
    allSkills:[],
    errorMessage:''
}

export const getAllSkillsReducer = (state = initialState, action:AnyAction ) =>{
    switch (action.type) {
        case getAllSkillTypes.GET_ALL_SKILLS:{
            return {
                ...state,
                allSkills: action.payload.skillsArray,
                errorMessage: 'Skills Displayed'
            }
        }  
        case getAllSkillTypes.FAILED_TO_RETRIEVE_SKILLS:{
            return {
                ...state,
                errorMessage:'Failed to Retrieve Skills'
            }
        } 
        default:
            return state;
    }
}