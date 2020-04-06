import { AnyAction } from "redux";
import { IUpdateSkillState } from ".";
import { updateSkillTypes } from "../action-mappers/update-skill";
import { Skill } from "../components/models/Skill";
import { Category } from "../components/models/Category";

const initialState:IUpdateSkillState = {
    skillToUpdate:new Skill(0,'',new Category(0,'','')),
    errorMessage:''
}

export const updateSkillReducer = (state = initialState, action:AnyAction ) =>{
    switch (action.type) {
        case updateSkillTypes.UPDATED_SKILL:{
            return {
                ...state,
                skillToUpdate: action.payload.updatedSkill,
                errorMessage: 'Skills Displayed'
            }
        }  
        case updateSkillTypes.FAILED_TO_UPDATE_SKILL:{
            return {
                ...state,
                errorMessage:'Failed to Retrieve Skills'
            }
        } 
        default:
            return state;
    }
}