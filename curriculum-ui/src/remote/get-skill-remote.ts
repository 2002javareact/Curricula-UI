import { curriculaClient } from "./curricula-client"
import { TokenExpiredError } from "../errors/TokenExpiredError"
import { UserNotFoundError } from "../errors/UserNotFoundError"
import { InternalServiceError } from "../errors/InternalServiceError"

export const getAllSkills = async ()=>{
    try{
    let allSkills = await curriculaClient.get('/skill')

    if(allSkills.status === 400){
        throw new TokenExpiredError()
    }
    console.log(allSkills.data)
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