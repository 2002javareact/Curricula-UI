import { Dispatch } from "redux"
import { getAllSkills } from "../remote/getAllSkillsRequest"

export const getAllSkillTypes = {
    GET_ALL_SKILLS: 'PROJECT-3_GET_ALL_SKILLS',
    FAILED_TO_RETRIEVE_SKILLS:'PROJECT-3_FAILED_TO_RETRIEVE_SKILLS'
}



export const viewAllComponentsActionMapper = () => async (dispatch:Dispatch) => {
    // try to get all users from a remote function
    try{
        let skillsArray = await getAllSkills()
        //if we do call dispatch with those users
        dispatch({
            type: getAllSkillTypes.GET_ALL_SKILLS,
            payload:{
                skillsArray
            }
        })
    } catch (e){
            //catch any errors and dispatch a bad action
        dispatch({
            type:getAllSkillTypes.FAILED_TO_RETRIEVE_SKILLS
        })
    }
    //function completes
}