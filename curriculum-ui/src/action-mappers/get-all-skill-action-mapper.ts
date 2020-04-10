import { Dispatch } from "redux"
import { getAllSkills } from "../remote/skill-get-remote"

export const getAllSkillTypes = {
    GET_ALL_SKILLS: 'PROJECT-3_GET_ALL_SKILLS',
    FAILED_TO_RETRIEVE_SKILLS:'PROJECT-3_FAILED_TO_RETRIEVE_SKILLS'
}



export const viewAllSkillsActionMapper = () => async (dispatch:Dispatch) => {
    try{
        let skillsArray = await getAllSkills()
        dispatch({
            type: getAllSkillTypes.GET_ALL_SKILLS,
            payload:{
                skillsArray
            }
        })
    } catch (e){
        dispatch({
            type:getAllSkillTypes.FAILED_TO_RETRIEVE_SKILLS
        })
    }
}