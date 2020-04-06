import { Dispatch } from "redux"
import { updateSkill } from "../remote/UpdateSkill"
import { Skill } from "../components/models/Skill"

export const updateSkillTypes = {
    UPDATED_SKILL: 'PROJECT-3_UPDATED_SKILL',
    FAILED_TO_UPDATE_SKILL:'PROJECT-3_FAILED_TO_UPDATE_SKILL'
}



export const updateSkillActionMapper = (skillToUpdate:Skill) => async (dispatch:Dispatch) => {
    // try to get all users from a remote function
    try{
        let updatedSkill = await updateSkill(skillToUpdate)
        dispatch({
            type: updateSkillTypes.UPDATED_SKILL,
            payload:{
                updatedSkill
            }
        })
    } catch (e){
        dispatch({
            type:updateSkillTypes.FAILED_TO_UPDATE_SKILL
        })
    }
    //function completes
}