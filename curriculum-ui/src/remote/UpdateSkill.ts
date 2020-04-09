import { curriculaClient } from "./CurriculaClient"
import { TokenExpiredError } from "../errors/TokenExpiredError"
import { UserNotFoundError } from "../errors/UserNotFoundError"
import { InternalServiceError } from "../errors/InternalServiceError"
import { Skill } from "../models/Skill"

export const updateSkill = async (skillToUpdate:Skill)=>{
    try{
    let req = {
        skillToUpdate
    }
    let updateSkill = await curriculaClient.patch('/skill', req)

    if(updateSkill.status === 400){
        throw new TokenExpiredError()
    }

    return updateSkill.data

} catch (e) {
    if(e.status === 400){
        throw e
    } else if(e.status === 404){
        throw new UserNotFoundError()
    }
    else{
        throw new InternalServiceError()
    }
}

}