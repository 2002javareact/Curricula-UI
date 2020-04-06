import { curriculaClient } from "./CurriculaClient"
import { TokenExpiredError } from "../errors/tokenExpiredError"
import { UserNotFoundError } from "../errors/userNotFoundError"
import { InternalServiceError } from "../errors/internalServiceError"

export const getAllSkills = async ()=>{
    try{
    let allSkills = await curriculaClient.get('/skill')

    if(allSkills.status === 400){
        throw new TokenExpiredError()
    }

    return allSkills.data

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