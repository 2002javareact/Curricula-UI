import { AnyAction } from "redux";
import { ISkillState } from ".";
import { getAllSkillTypes, createSkillTypes, updateSkillTypes } from "../action-mappers/skill-action-mapper";
import { Skill } from "../models/Skill";
import { Category } from "../models/Category";

const initialState:ISkillState = {
    createdSkill: new Skill(0,'',new Category(0,'','')),
    allSkills:[],   
    skillToUpdate:new Skill(0,'',new Category(0,'','')),
    errorMessage:''
}

export const skillsReducer = (state = initialState, action:AnyAction ) =>{
    switch (action.type) {
        case getAllSkillTypes.GET_ALL_SKILLS:{
            return {
                ...state,
                allSkills: action.payload.skillsArray,
                errorMessage: ''
            }
        }  
        case getAllSkillTypes.FAILED_TO_RETRIEVE_SKILLS:{
            return {
                ...state,
                errorMessage:'Get all Skills Failed'
            }
        } 
        case createSkillTypes.CREATE_SKILL:{
            return {
                ...state,
                createdSkill: action.payload.createdSkill,
                errorMessage:''
            }
        } 
        case createSkillTypes.FAILED_CREATE_SKILL:{
            return {
                ...state,
                errorMessage:'Create Skills Failed'
            }
        } 
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
