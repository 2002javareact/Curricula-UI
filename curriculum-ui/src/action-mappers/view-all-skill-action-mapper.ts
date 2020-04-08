import { Dispatch } from "redux"
import { getAllSkills } from "../remote/GetAllSkillsRequest"

export const getAllSkillTypes = {
    GET_ALL_SKILLS: 'PROJECT-3_GET_ALL_SKILLS',
    FAILED_TO_RETRIEVE_SKILLS:'PROJECT-3_FAILED_TO_RETRIEVE_SKILLS'
}



<<<<<<< HEAD
export const viewAllComponentsActionMapper = () => async (dispatch:Dispatch) => {
    // try to get all users from a remote function
    try{
        let skillsArray = await getAllSkills()
        //if we do call dispatch with those users
=======
export const viewAllSkillsActionMapper = () => async (dispatch:Dispatch) => {
    try{
        let skillsArray = await getAllSkills()
>>>>>>> dev
        dispatch({
            type: getAllSkillTypes.GET_ALL_SKILLS,
            payload:{
                skillsArray
            }
        })
    } catch (e){
<<<<<<< HEAD
            //catch any errors and dispatch a bad action
=======
>>>>>>> dev
        dispatch({
            type:getAllSkillTypes.FAILED_TO_RETRIEVE_SKILLS
        })
    }
<<<<<<< HEAD
    //function completes
=======
>>>>>>> dev
}