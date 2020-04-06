import { curriculaClient } from "./curricula-client"
import { tokenExpiredError } from "../errors/tokenExpiredError"
import { userNotFoundError } from "../errors/userNotFoundError"
import { internalServiceError } from "../errors/internalServiceError"

export const getAllSkills = async ()=>{
    try{
    let allSkills = await curriculaClient.get('/skill')

    if(allSkills.status === 400){
        throw new tokenExpiredError()
    }

    return allSkills.data

} catch (e) {
    if(e.status === 400){
        throw e
    } else if(e.status === 404){
        throw new userNotFoundError()
    }
    else{
        throw new internalServiceError()
    }
}

}